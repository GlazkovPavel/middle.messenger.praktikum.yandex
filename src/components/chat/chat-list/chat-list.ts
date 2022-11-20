import * as Handlebars from "handlebars";
import {configChatList} from "../const/const";

export const template: string = `
<div class="chat-header">
    <button class="button">{{button}} ></button>
    <input class="input" type="text" placeholder="search...">
</div>   
<div class="chats">

</div> 
`

const render = Handlebars.compile(template);
export const htmlChatList = render(configChatList);
