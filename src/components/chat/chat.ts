import template from './chat.hbs';
import {ChatList} from "./chat-list/chat-list";
import PopupAttachment from "./utils/PopupAttachment";
import {Button} from "../shared/button";
import Block from "../../utils/block";
import {IChat} from "./interfaces/chat.interface";
import {Input} from "../shared/input/input";

export class Chat extends Block<IChat> {
  constructor(props: IChat) {
    super(props);
  }

  init() {
    this.children.chatList = new ChatList();

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

    this.children.inputMessage = new Input({
      id: 'input-message',
      name: 'input-message',
      type: 'text',
      dataName: 'input-message',
      placeholder: 'Message',
      class: 'form__input',
    })

  }

  private onSubmit(): void {
    console.log('Send message');
  }

  private onShowMenu(): void {
    const openPopupAttachment = new PopupAttachment('.popup');

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

