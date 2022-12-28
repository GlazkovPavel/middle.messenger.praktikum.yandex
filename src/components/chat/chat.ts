import template from './chat.hbs';
import {ChatList} from "./chat-list/chat-list";
import {Button} from "../shared/components/button";
import {Input} from "../shared/components/input/input";
import {Block} from '../../utils/block';
import ChatsController from "../../controllers/chats-controller";
import withStore from "../../hoc/hoc";
import MessagesController from "../../controllers/messages-controller";
import store from "../../utils/store";
import {MessengerProps} from "./interfaces/messenger-props.interface";
import {Message} from "./message/message";
import {Popup} from "../shared/components/popup/popup";
import UserController from "../../controllers/update-user-controller";
import {UserCard} from "../shared/components/user-card/user-card";
import {IUser} from "../shared/interfaces/user.interface";
import {isEqualObject} from "../../utils/helpers";
import {ChatInfo} from "./interfaces/chat-info.interface";

export class ChatBase extends Block {
  constructor() {
    super({});
  }

  init() {
    this.children.chatList = new ChatList({ isLoaded: false });
    this.children.messages = this.createMessages(this.props)

    this.children.buttonSendMessage = new Button({
      id: 'message-button',
      class: 'form__button',
      events: {
        click: () => this.onSubmit(),
      }
    });

    this.children.menuButton = new Button({
      id: 'menu-button',
      class: 'menu',
      events: {
        click: () => (this.children.popupMenu as Popup).show()
      }
    });

    this.children.message = new Input({
      id: 'message',
      name: 'message',
      type: 'text',
      placeholder: 'Message',
      class: 'form__input',
    });

    this.children.popupMenu = new Popup({
      title: "Меню",
      close: new Button({
        class: 'popup__close',
        events: {
          click: () => {
            (this.children.popupMenu as Popup).hide();
          },
        },
      }),
      button: new Button({
        label: "Добавить пользователя",
        type: "click",
        class: 'popup__button',
        events: {
          click: (e: any) => {
            e.preventDefault();
            (this.children.popupMenu as Popup).hide();
            (this.children.popupAddUser as Popup).show();
          },
        },
      }),
      button2: new Button({
        label: "Удалить пользователя",
        type: "click",
        class: 'popup__button',
        events: {
          click: (e: any) => {
            e.preventDefault();
            ChatsController.getUsersChat(this.props.selectedChat as number);
            (this.children.popupMenu as Popup).hide();

          },
        },
      }),
    });

    this.children.popupDeleteUser = new Popup({
      title: "Выберите пользователя",
      //usersCards: this.createUsersCards(this.props, false),
      close: new Button({
        class: 'popup__close',
        events: {
          click: () => {
            (this.children.popupDeleteUser as Popup).hide();
          },
        },
      }),
    }) as Popup;

    this.children.popupWithUsersCard = new Popup({
      title: "Выберите пользователя",
      usersCards: this.createUsersCards(this.props, true),
      close: new Button({
        class: 'popup__close',
        events: {
          click: () => {
            (this.children.popupWithUsersCard as Popup).hide();
          },
        },
      }),
    })

    this.children.popupAddUser = new Popup({
      title: "Добавить пользователя",
      button: new Button({
        label: "Искать",
        type: "submit",
        class: 'popup__button',
        events: {
          click: (e: any) => {
            e.preventDefault();
            const input: HTMLInputElement = document.querySelector("#input-search") as HTMLInputElement;
            UserController.searchUser({login: input.value});
            (this.children.popupAddUser as Popup).hide();
            (this.children.popupWithUsersCard as Popup).show();
          },
        },
      }),
      close: new Button({
        class: 'popup__close',
        events: {
          click: () => {
            (this.children.popupAddUser as Popup).hide();
          },
        },
      }),
      content: new Input({
        type: "text",
        id: 'input-search',
        placeholder: "Введите имя...",
        name: "search",
      }),
    });

    ChatsController.fetchChats().finally(() => {
      (this.children.chatsList as Block)?.setProps({
        isLoaded: true
      })
    });

  }

  protected componentDidUpdate(_oldProps: MessengerProps, newProps: MessengerProps): boolean {
    this.children.messages = this.createMessages(newProps);
    if (newProps?.users && !isEqualObject(_oldProps?.users, newProps?.users)) {
      this.children.popupWithUsersCard = new Popup({
        title: "Выберите пользователя",
        usersCards: this.createUsersCards(newProps, true),
        close: new Button({
          class: 'popup__close',
          events: {
            click: () => {
              (this.children.popupWithUsersCard as Popup).hide();
            },
          },
        }),
      })
      this.children.popupWithUsersCard.show()
    }
    if (newProps?.chatUsers && !isEqualObject(_oldProps?.chatUsers, newProps?.chatUsers)) {
      this.children.popupDeleteUser = new Popup({
        title: "Выберите пользователя",
        usersCards: this.createUsersCards(newProps, false),
        close: new Button({
          class: 'popup__close',
          events: {
            click: () => {
              (this.children.popupDeleteUser as Popup).hide();
            },
          },
        }),
      })
      this.children.popupDeleteUser.show()
    }
    return true;
  }

  private createUsersCards(props: any, isCreate: boolean): UserCard[] {
    return isCreate ? props.users?.map((val: IUser) => {
      return new UserCard({
        id: val.id as number,
        avatar: val.avatar,
        name: val.first_name as string,
        events: {
          click: () => {
            ChatsController.addUserToChat(store.getState().selectedChat.id, val.id as number);
            (this.children.popupWithUsersCard as Popup).hide();
          },
        },
      })
    }) :
      props.chatUsers?.map((val: IUser) => {
        return new UserCard({
          id: val.id as number,
          avatar: val.avatar,
          name: val.first_name as string,
          events: {
            click: () => {
              ChatsController.deleteUserFromChat(store.getState().selectedChat.id, val.id as number);
              (this.children.popupDeleteUser as Popup).hide();
            },
          },
        })
      })
  }

  private createMessages(props: MessengerProps): Message[] {
    return props.messages?.map(data => {
      return new Message({...data, isMine: props.userId === data.user_id });
    })
  };

  private onSubmit(): void {
    const input = this.children.message as Input;
    const message = input.getValue();

    input.setValue('');

    MessagesController.sendMessage(store.getState().selectedChat.id, message);
  }

  render()  {
    return this.compile(template, {...this.props});
  }
}

const withSelectedChatMessages = withStore((state) => {
  const selectedChatId = state.selectedChat?.id;

  if (!selectedChatId) {
    return {
      messages: [],
      chats: [...(state.chats || [])],
      selectedChat: undefined,
      userId: state.user?.id,
      avatar: state.user?.avatar,
      users: state.user?.users,
      chatUsers: state.selectedChat?.users,
      isMineChat: (state.chats?.find((item: ChatInfo) => item!.id === state.selectedChat?.id)?.created_by === state.user?.id),
    };
  }

  return {
    messages: (state.messages || {})[selectedChatId] || [],
    chats: [...(state.chats || [])],
    selectedChat: state.selectedChat?.id,
    userId: state.user?.id,
    avatar: state.user?.avatar,
    users: state.user?.users,
    chatUsers: state.selectedChat?.users,
    isMineChat: (state.chats?.find((item: ChatInfo) => item!.id === state.selectedChat?.id)?.created_by === state.user?.id),
  };
});

export const Chat = withSelectedChatMessages(ChatBase as any);


