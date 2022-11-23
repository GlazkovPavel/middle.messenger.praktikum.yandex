import template from './chat.hbs';
import {ChatList} from "./chat-list/chat-list";
import PopupAttachment from "./utils/PopupAttachment";
import {configChat} from "./const/const";
import {Button} from "../shared/button";
import Block from "../../utils/block";

export class Chat extends Block {
  constructor() {
    super({});
  }

  public renderChatList(): void {
    const chatList = new ChatList();
    document.querySelector('.chat__list').append(chatList.getContent());
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



// const render = Handlebars.compile(template);
// export const htmlChat = render(configChat);
//
// function renderElement(query: string, block: Button) {
//     const element = document.querySelector(query);
//     block.getContent().classList.add('form__button')
//     element.appendChild(block.getContent());
//     return element;
// }
//
// function onSubmit(): void {
//     console.log('tratata');
// }
//
// const button = new Button({
//     events: {
//         click: () => onSubmit(),
//     },
// });
//
// document.addEventListener('DOMContentLoaded', () => {
//
//     const chatList = document.querySelector('.chat__list');
//     chatList.innerHTML = htmlChatList;
//     const chats = document.querySelector('.chats');
//     chats.innerHTML = htmlChatContact;
//
//     const openPopupAttachment = new PopupAttachment('.popup');
//
//
//     const attachmentButton = document.querySelector('.attachment');
//     attachmentButton.addEventListener('click', (evt) => {
//         evt.preventDefault();
//         if (openPopupAttachment.getIsOlenPopup()) {
//             openPopupAttachment.close();
//         } else {
//             openPopupAttachment.setEventListener();
//             openPopupAttachment.open();
//         }
//     })
//
//     renderElement('.form', button);
//
// });
