import template from './profile.hbs';
import { ProfileEditUser} from "./profile-edit-user/profile-edit-user"
import {ProfileEditPassword} from "./profile-edit-password/profile-edit-password";
import Block from "../../utils/block";
import {IUser} from '../shared/interfaces/user.interface';
import {Button} from '../shared/button';

export class Profile extends Block<IUser> {

  public isProfileEdit: boolean = true;

  constructor(props: IUser) {
    super(props);
  }

  init() {
    this.children.profileEdit = new ProfileEditUser(this.props);
    this.children.profileEditPassword = new ProfileEditPassword();
    this.children.buttonEdit = new Button({
      events: {
        click: () => this.onEditUser(),
      },
      class: 'profile__button profile__button_type_edit',
      label: 'Изменить данные',
      type: 'button'
    });

    this.children.buttonEditPassword = new Button({
      events: {
        click: () => this.onEditPassword(),
      },
      class: 'profile__button profile__button_type_edit-password',
      label: 'Изменить пароль',
      type: 'button'
    });

    this.children.buttonSave = new Button({
      events: {
        click: () => this.onSave(),
      },
      class: 'profile__button profile__button_type_save disabled',
      id: 'name',
      label: 'Сохранить',
      type: 'submit'
    });

    this.children.buttonSignOut = new Button({
      events: {
        click: () => this.onSignOut(),
      },
      class: 'profile__button profile__button_type_signout',
      id: 'name',
      label: 'Выйти из аккаунта',
      type: 'button'
    });
  }

  private onEditUser() {
    console.log('onEditPassword');
  }

  private onEditPassword() {
    console.log('onEditPassword');
    this.setProps({...this.props, isProfileEdit: true})
  }

  private onSave() {
    console.log('onEditPassword');
  }

  private onSignOut() {
    console.log('onEditPassword');
  }

  render() {
    return this.compile(template, {...this.props});
  }

}

//
//
//
//     const editButton = document.querySelector('.profile__button_type_edit');
//     const saveButton = document.querySelector('.profile__button_type_save');
//     const editPasswordButton = document.querySelector('.profile__button_type_edit-password');
//     const savePasswordBtn = document.querySelector('.profile__button_type_save-edit');
//     const formElement = document.querySelector('.profile__form');
//     const formInput = formElement.querySelector('.profile__form-input');
//     const formError = formElement.querySelector(`.${formInput.id}-error`);
//
//     const showError = (input, errorMessage) => {
//         input.classList.add('form__input_type_error');
//         formError.textContent = errorMessage;
//         formError.classList.add('form__input-error_active');
//     };
//
//     const hideError = (input) => {
//         input.classList.remove('form__input_type_error');
//         formError.classList.remove('form__input-error_active');
//         formError.textContent = ''
//     };
//
//     const checkInputValidity = () => {
//         if (!formInput.validity.valid) {
//             showError(formInput, formInput.validationMessage);
//         } else {
//             hideError(formInput);
//         }
//     };
//
//     formElement.addEventListener('submit', function (evt) {
//         evt.preventDefault();
//     });
//
//     formInput.addEventListener('input', function () {
//         checkInputValidity();
//     });
//
//     editButton.addEventListener('click', (evt) => {
//         evt.preventDefault();
//         saveButton.classList.remove('disabled');
//         editButton.classList.add('disabled');
//         editPasswordButton.classList.add('disabled');
//     });
//
//     saveButton.addEventListener('click', (evt) => {
//         evt.preventDefault();
//         editButton.classList.remove('disabled');
//         editPasswordButton.classList.remove('disabled');
//         saveButton.classList.add('disabled');
//     });
//
//     editPasswordButton.addEventListener('click', (evt) => {
//         evt.preventDefault();
//         const chatProfile = new ProfileEditPassword()
//         editButton.classList.add('disabled');
//         editPasswordButton.classList.add('disabled');
//         profileForm.innerHTML = chatProfile.getContent().innerHTML;
//         savePasswordBtn.classList.remove('disabled');
//
//     });
//
//     savePasswordBtn.addEventListener('click', (evt) => {
//         evt.preventDefault();
//         editButton.classList.remove('disabled');
//         editPasswordButton.classList.remove('disabled');
//         savePasswordBtn.classList.add('disabled');
//         profileForm.innerHTML = profileEditUser.getContent().innerHTML;
//     })
//
// })
