import Handlebars from "handlebars";
import {htmlProfileEdit} from "./profile-edit-user/profile-edit-user"
import {htmlProfileUserPasswordEng} from "./profile-edit-password/profile-edit-password";
import {config} from "./const";

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
    const profileForm = document.querySelector('.profile-form');
    profileForm.innerHTML = htmlProfileEdit;
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
        editButton.classList.add('disabled');
        editPasswordButton.classList.add('disabled');
        profileForm.innerHTML = htmlProfileUserPasswordEng;
        savePasswordBtn.classList.remove('disabled');

    });

    savePasswordBtn.addEventListener('click', (evt) => {
        evt.preventDefault();
        editButton.classList.remove('disabled');
        editPasswordButton.classList.remove('disabled');
        savePasswordBtn.classList.add('disabled');
        profileForm.innerHTML = htmlProfileEdit;
    })

})
