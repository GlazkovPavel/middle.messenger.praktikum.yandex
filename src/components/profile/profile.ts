import Handlebars from "handlebars";
import { ProfileEditUser} from "./profile-edit-user/profile-edit-user"
import {config} from "./const";
import {ProfileEditPassword} from "./profile-edit-password/profile-edit-password";

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
            <button class="profile__button profile__button_type_edit">Изменить данные</button>
            <button class="profile__button profile__button_type_edit-password">Изменить пароль</button>
            <button class="profile__button profile__button_type_save disabled">Сохранить</button>
            <button class="profile__button  profile__button_type_save-edit disabled" >Сохранить</button>
            <button class="profile__button profile__button_type_signout">Выйти из аккаунта</button>
        </div>

    </div>
</div>
`

const render = Handlebars.compile(template);
export const htmlProfileMain = render(config);



document.addEventListener('DOMContentLoaded', () => {
  const profileEditUserProps = {
    userEmail: "gg@gg.gg",
    username: 'usernamePasha',
    name: 'Pasha',
    surname: 'Glazkov',
    nameInChat: 'PG',
    tel: '8-999-9965432'
  }

    const profileForm = document.querySelector('.profile-form');
    const profileEditUser = new ProfileEditUser(profileEditUserProps);
    profileForm.innerHTML = profileEditUser.getContent().innerHTML;
    const editButton = document.querySelector('.profile__button_type_edit');
    const saveButton = document.querySelector('.profile__button_type_save');
    const editPasswordButton = document.querySelector('.profile__button_type_edit-password');
    const savePasswordBtn = document.querySelector('.profile__button_type_save-edit');
    const formElement = document.querySelector('.profile__form');
    const formInput = formElement.querySelector('.profile__form-input');
    const formError = formElement.querySelector(`.${formInput.id}-error`);

    const showError = (input, errorMessage) => {
        input.classList.add('form__input_type_error');
        formError.textContent = errorMessage;
        formError.classList.add('form__input-error_active');
    };

    const hideError = (input) => {
        input.classList.remove('form__input_type_error');
        formError.classList.remove('form__input-error_active');
        formError.textContent = ''
    };

    const checkInputValidity = () => {
        if (!formInput.validity.valid) {
            showError(formInput, formInput.validationMessage);
        } else {
            hideError(formInput);
        }
    };

    formElement.addEventListener('submit', function (evt) {
        evt.preventDefault();
    });

    formInput.addEventListener('input', function () {
        checkInputValidity();
    });

    editButton.addEventListener('click', (evt) => {
        evt.preventDefault();
        saveButton.classList.remove('disabled');
        editButton.classList.add('disabled');
        editPasswordButton.classList.add('disabled');
    });

    saveButton.addEventListener('click', (evt) => {
        evt.preventDefault();
        editButton.classList.remove('disabled');
        editPasswordButton.classList.remove('disabled');
        saveButton.classList.add('disabled');
    });

    editPasswordButton.addEventListener('click', (evt) => {
        evt.preventDefault();
        const chatProfile = new ProfileEditPassword()
        editButton.classList.add('disabled');
        editPasswordButton.classList.add('disabled');
        profileForm.innerHTML = chatProfile.getContent().innerHTML;
        savePasswordBtn.classList.remove('disabled');

    });

    savePasswordBtn.addEventListener('click', (evt) => {
        evt.preventDefault();
        editButton.classList.remove('disabled');
        editPasswordButton.classList.remove('disabled');
        savePasswordBtn.classList.add('disabled');
        profileForm.innerHTML = profileEditUser.getContent().innerHTML;
    })

})
