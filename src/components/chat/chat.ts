import template from './chat.hbs';
import {ChatList} from "./chat-list/chat-list";
import {Button} from "../shared/components/button";
import {IChat} from "./interfaces/chat.interface";
import {Input} from "../shared/components/input/input";
import {Block} from '../../utils/block';
import PopupAttach from "./utils/PopupAttachment";
import ChatsController from "../../controllers/chats-controller";

export class Chat extends Block<IChat> {
  constructor(props: IChat) {
    super(props);
  }

  init() {
    this.children.chatList = new ChatList({ isLoaded: false });

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

  private onSubmit(): void {
    console.log('Send message');
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

