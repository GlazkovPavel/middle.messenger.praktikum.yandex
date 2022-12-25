import template from './chat.hbs';
import {ChatList} from "./chat-list/chat-list";
import {Button} from "../shared/components/button";
import {Input} from "../shared/components/input/input";
import {Block} from '../../utils/block';
import PopupAttach from "./utils/PopupAttachment";
import ChatsController from "../../controllers/chats-controller";
import withStore from "../../hoc/hoc";
import MessagesController from "../../controllers/messages-controller";
import store from "../../utils/store";
import {MessengerProps} from "./interfaces/messenger-props.interface";
import {Message} from "./message/message";

export class ChatBase extends Block {
  constructor() {
    super({});
  }

  init() {
    this.children.chatList = new ChatList({ isLoaded: false });
    this.children.messages = this.createMessages(this.props)
    this.children.buttonAttachment = new Button({
      id: 'attachment-button',
      class: 'attachment',
      events: {
        click: () => this.onShowMenu(),
      }
    });

    this.children.buttonSendMessage = new Button({
      id: 'message-button',
      class: 'form__button',
      events: {
        click: () => this.onSubmit(),
      }
    });

    this.children.message = new Input({
      id: 'message',
      name: 'message',
      type: 'text',
      placeholder: 'Message',
      class: 'form__input',
    });

    ChatsController.fetchChats().finally(() => {
      (this.children.chatsList as Block)?.setProps({
        isLoaded: true
      })
    });

  }

  protected componentDidUpdate(_oldProps: MessengerProps, newProps: MessengerProps): boolean {
    this.children.messages = this.createMessages(newProps);

    return true;
  }

  private createMessages(props: MessengerProps) {
    return props.messages?.map(data => {
      return new Message({...data, isMine: props.userId === data.user_id });
    })
  }

  private onSubmit(): void {
    const input = this.children.message as Input;
    const message = input.getValue();

    input.setValue('');

    MessagesController.sendMessage(store.getState().selectedChat, message);
  }

  private onShowMenu(): void {
    const openPopupAttachment = new PopupAttach('.popupAttachment');

      if (openPopupAttachment.getIsOlenPopup()) {
        openPopupAttachment.close();
      } else {
        openPopupAttachment.setEventListener();
        openPopupAttachment.open();
      }

  }

  render()  {
    return this.compile(template, {...this.props});
  }
}

const withSelectedChatMessages = withStore((state) => {
  const selectedChatId = state.selectedChat;

  if (!selectedChatId) {
    return {
      messages: [],
      chats: [...(state.chats || [])],
      selectedChat: undefined,
      userId: state.user?.id,
      avatar: state.user?.avatar
    };
  }

  return {
    messages: (state.messages || {})[selectedChatId] || [],
    chats: [...(state.chats || [])],
    selectedChat: state.selectedChat,
    userId: state.user?.id,
    avatar: state.user?.avatar
  };
});

export const Chat = withSelectedChatMessages(ChatBase as any);


