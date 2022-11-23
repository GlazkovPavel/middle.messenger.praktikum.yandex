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
    this.children.buttonAttachment = new Button({
      id: 'attachment-button',
      events: {
        click: () => this.onShowMenu(),
      }
    });

    this.children.buttonSendMessage = new Button({
      id: 'message-button',
      events: {
        click: () => this.onSubmit(),
      }
    });

    this.children.inputMessage = new Input({
      id: 'input-message',
      name: 'input-message',
      type: 'text',
      dataName: 'input-message',
      placeholder: 'Message'
    })

    setTimeout(() => {
      this.handlerTemplate();
    }, 0)
  }

  private handlerTemplate() {
    document.querySelector('#attachment-button').classList.add('attachment');
    document.querySelector('#input-message').classList.add('form__input');
    document.querySelector('#message-button').classList.add('form__button');
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

  public renderChatList(): void {
    const chatList = new ChatList();
    document.querySelector('.chat__list').append(chatList.getContent());
    chatList.renderMessage({
      photo: 'https://sun9-north.userapi.com/sun9-88/s/v1/if1/Ut6lK2K0J5PgfQ315J18BI2BIryVYtizUK6IXM2HMwUbpF2cMbObnEzUNcncenN2cd0ZN9en.jpg?size=2160x2160&quality=96&type=album',
      name: 'Pavel',
      message: 'Friends, I have a special news release for you!',
      timeMessage: '10:20',
      totalMessage: 1
    });
    chatList.renderMessage({
      photo: 'https://sun9-north.userapi.com/sun9-88/s/v1/if1/Ut6lK2K0J5PgfQ315J18BI2BIryVYtizUK6IXM2HMwUbpF2cMbObnEzUNcncenN2cd0ZN9en.jpg?size=2160x2160&quality=96&type=album',
      name: 'Pavel',
      message: 'Friends, I have a special news release for you!',
      timeMessage: '10:20',
      totalMessage: 2
    });
  }

  render()  {
    return this.compile(template, {...this.props});
  }
}
