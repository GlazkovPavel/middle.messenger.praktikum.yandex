import Handlebars from "handlebars";

export const template = `
<div class="chat-header">
    <button class="button">{{button}} ></button>
    <input class="input" type="text" placeholder="search...">
</div>   
<div class="chats">

</div> 
`
const configChatList = {
    button: 'Профиль'
}

const render = Handlebars.compile(template);
export const htmlChatList = render(configChatList);
