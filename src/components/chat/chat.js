import Handlebars from "handlebars";
import {htmlChatList} from "./chat-list/chat-list";
import {htmlChatContact} from "./chat-contact/chat-contact";
export const template = `
<div class="chat">
    <div class="chat__list">
    
    </div>
    <div class="chat__main">
        <div class="header">
            <div class="photo">
            <img class="photo__avatar" alt="avatar" src={{photo}}>
            <span class="username">{{name}}</span>
            </div>
            <button class="button__menu">Menu</button>
        </div>
        <div class="space">

        </div>
        <div class="message">

        </div>
    </div>
</div>
`
const configChat = {
    photo: 'https://sun9-north.userapi.com/sun9-88/s/v1/if1/Ut6lK2K0J5PgfQ315J18BI2BIryVYtizUK6IXM2HMwUbpF2cMbObnEzUNcncenN2cd0ZN9en.jpg?size=2160x2160&quality=96&type=album',
    name: 'Pavel',
}
const render = Handlebars.compile(template);
export const htmlChat = render(configChat)

document.addEventListener('DOMContentLoaded', () => {

    const chatList = document.querySelector('.chat__list');
    chatList.innerHTML = htmlChatList;
    const chats = document.querySelector('.chats');
    chats.innerHTML = htmlChatContact;

});
