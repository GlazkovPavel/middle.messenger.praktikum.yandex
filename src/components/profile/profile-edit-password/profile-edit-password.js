import Handlebars from "handlebars";
import {configProfileUserPasswordEng} from "../const";

const template = `
    <div class="user-profile">
        <form class="profile__form" novalidate>
          <fieldset class="profile__fields">
          <div class="profile__container">
              <p class="profile__form-input-name">{{oldPassword}}</p>
              <input
                type="password"
                name="email"
                class="profile__form-input"
                required
                minlength="8"
                id="old-password-input">
            </div>
            <span class="form__input-error old-password-input-error"></span>
            <hr/>
            <div class="profile__container">
              <p class="profile__form-input-name">{{newPassword}}</p>
              <input
                type="password"
                class="profile__form-input"
                id="new-password-input"
                required
                minlength="8">
                <span class="form__input-error new-password-input-error"></span>
            </div>
            <hr/>
            <div class="profile__container">
              <p class="profile__form-input-name">{{newCpassword}}</p>
              <input
                type="password"
                class="profile__form-input"
                id="new-cpassword-input"
                required
                minlength="8">
                <span class="form__input-error new-cpassword-input-error"></span>
            </div>
          </fieldset>
        </form>
     </div>
`


const renderer = Handlebars.compile(template);

export const htmlProfileUserPasswordEng = renderer(configProfileUserPasswordEng);
