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
