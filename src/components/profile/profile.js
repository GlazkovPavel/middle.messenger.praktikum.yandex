import Handlebars from "handlebars";
import {htmlProfileEdit} from "./profile-edit-user/profile-edit-user"

const template = `
<div class="container__profile">
    <button class="button"></button>
    <div class="profile-main">
        <div class="avatar">
            <div class="avatar__photo-container">
            <figure class="avatar__photo-edit"></figure>
            <img class="avatar__photo" src="{{photo}}"  alt="avatar">
        </div>
            <div class="avatar__name">{{name}}</div>
        </div>
        <div class="profile-form">
    
        </div>
        <div class="button__container">
        
        </div>
    
    </div>
   
</div>
`

const config = {
    photo: 'https://sun9-north.userapi.com/sun9-88/s/v1/if1/Ut6lK2K0J5PgfQ315J18BI2BIryVYtizUK6IXM2HMwUbpF2cMbObnEzUNcncenN2cd0ZN9en.jpg?size=2160x2160&quality=96&type=album',
    name: 'Pavel'
};

const render = Handlebars.compile(template);

export const htmlProfileMain = render(config);

document.addEventListener('DOMContentLoaded', () => {
    const root = document.querySelector('.profile-form')
    root.innerHTML = htmlProfileEdit;

})
