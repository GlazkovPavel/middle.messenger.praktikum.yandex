import Handlebars from "handlebars";
import {configChatContact} from "../const/const";

export const template = `
<div class="chat-contact">
     <div class="photo">
         <img class="photo__avatar" alt="avatar" src={{photo}}>
     </div>
     <div class="chat-container">
        <span class="user-name">{{name}}</span>
        <div class="chat-text">
            <span class="my-chat show">You:</span>
            <span class="message">{{message}}</span>
        </div>
     </div>
     <div class="chat-info">
        <span class="time">{{timeMessage}}</span>
        <span class="total-message">{{totalMessage}}</span>
     </div>
</div>   
`

const render = Handlebars.compile(template);
export const htmlChatContact = render(configChatContact);

