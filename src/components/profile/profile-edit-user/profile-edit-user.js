import Handlebars from "handlebars";
import {configProfileUserEng} from "../const";

const template = `
 <div class="user-profile">
        <h2 class='profile__title'>Hi, {{user.name}}!</h2>
        <form class="profile__form" novalidate>
          <fieldset class="profile__fields">
          <div class="profile__container">
              <p class="profile__form-input-name">{{email}}</p>
              <input
                type="email"
                name="email"
                class="profile__form-input"
                required
                minlength="7"
                id="email-input"
                value={{user.userEmail}}>
            </div>
            <span class="form__input-error email-input-error"></span>
            <hr/>
            <div class="profile__container">
              <p class="profile__form-input-name">{{username}}</p>
              <input
                type="text"
                class="profile__form-input"
                id="username-input"
                value={{user.username}}>
                <span class="form__input-error username-input-error"></span>
            </div>
            <hr/>
            <div class="profile__container">
              <p class="profile__form-input-name">{{name}}</p>
              <input
                type="text"
                class="profile__form-input"
                id="name-input"
                value={{user.name}}>
                <span class="form__input-error name-input-error"></span>
            </div>
            <hr/>
            <div class="profile__container">
              <p class="profile__form-input-name">{{surname}}</p>
              <input
                type="text"
                class="profile__form-input"
                id="surname-input"
                value={{user.surname}}>
                <span class="form__input-error surname-input-error"></span>
            </div>
            <hr/>
            <div class="profile__container">
              <p class="profile__form-input-name">{{nameInChat}}</p>
              <input
                type="text"
                class="profile__form-input"
                id="nameInChat-input"
                value={{user.nameInChat}}>
                <span class="form__input-error nameInChat-input-error"></span>
            </div>
            <hr/>
            <div class="profile__container">
              <p class="profile__form-input-name">{{tel}}</p>
              <input
                type="tel"
                class="profile__form-input"
                id="tel-input"
                value={{user.tel}}>
                <span class="form__input-error tel-input-error"></span>
            </div>
          </fieldset>
        </form>
      </div>
`


const renderer = Handlebars.compile(template);

export const htmlProfileEdit = renderer(configProfileUserEng);
