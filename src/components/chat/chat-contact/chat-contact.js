import Handlebars from "handlebars";

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

const configChatContact = {
    photo: 'https://sun9-north.userapi.com/sun9-88/s/v1/if1/Ut6lK2K0J5PgfQ315J18BI2BIryVYtizUK6IXM2HMwUbpF2cMbObnEzUNcncenN2cd0ZN9en.jpg?size=2160x2160&quality=96&type=album',
    name: 'Pavel',
    message: 'Friends, I have a special news release for you!',
    timeMessage: '10:20',
    totalMessage: 2
}

const render = Handlebars.compile(template);
export const htmlChatContact = render(configChatContact);

