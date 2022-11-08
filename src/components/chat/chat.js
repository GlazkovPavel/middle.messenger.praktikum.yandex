import Handlebars from "handlebars";
import {htmlChatList} from "./chat-list/chat-list";
import {htmlChatContact} from "./chat-contact/chat-contact";
import PopupAttachment from "./utils/PopupAttachment";
import {configChat} from "./const/const";

export const template = `
<div class="chat">
    <div class="chat__list">
    
    </div>
    <div class="chat__main">
        <div class="header">
            <div class="photo-container">
            <img class="photo__avatar" alt="avatar" src={{photo}}>
            <span class="username">{{name}}</span>
            </div>
            <span class="button__menu">
                <button class="menu"></button>
            </span>
        </div>
        <div class="space">
            <span class="no-open-chat">Выберите чат чтобы отправить сообщение</span>
        </div>
        <div class="message">
            <button class="attachment"></button>
            <form class="form">
                <input type="text" placeholder="Message" class="form__input">
                <button class="form__button"></button>
            </form>
        </div>
        <div class="popup">
            <div class="popup__card">
                <img class="popup__card-img" src={{popup.photoCard.src}} alt="img-card">
                <span class="popup__card-text">{{popup.photoCard.text}}</span>
            </div>
            <div class="popup__card">
                <img class="popup__card-img" src={{popup.file.src}} alt="img-card">
                <span class="popup__card-text">{{popup.file.text}}</span>
            </div>
            <div class="popup__card">
                <img class="popup__card-img" src={{popup.location.src}} alt="img-card">
                <span class="popup__card-text">{{popup.location.text}}</span>
            </div>
        </div>
    </div>
</div>
`

const render = Handlebars.compile(template);
export const htmlChat = render(configChat)

document.addEventListener('DOMContentLoaded', () => {

    const chatList = document.querySelector('.chat__list');
    chatList.innerHTML = htmlChatList;
    const chats = document.querySelector('.chats');
    chats.innerHTML = htmlChatContact;

    const openPopupAttachment = new PopupAttachment('.popup');


    const attachmentButton = document.querySelector('.attachment');
    attachmentButton.addEventListener('click', (evt) => {
        evt.preventDefault();
        if (openPopupAttachment.getIsOlenPopup()) {
            openPopupAttachment.close();
        } else {
            openPopupAttachment.setEventListener();
            openPopupAttachment.open();
        }
    })

});
