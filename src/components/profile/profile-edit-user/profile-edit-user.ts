import template from './profile-edit-user.hbs';
import Block from "../../../utils/block";
import {Input} from "../../shared/input/input";

interface IUser {
  userEmail: string;
  username: string;
  name: string;
  surname: string;
  nameInChat: string;
  tel: string;
}
export class ProfileEditUser extends Block {
  private user: any;

  constructor(user: IUser) {
    super({});
    this.user = user;
  }

  init() {
    this.children.userEmail = new Input({
      type: "email",
      name: "email",
      class: "profile__form-input",
      required: "required",
      minlength: "4",
      id: "email-input",
      value: `${this.user.userEmail}`
    });

    this.children.username = new Input({
      type: "text",
      name: "username",
      class: "profile__form-input",
      required: "required",
      minlength: "2",
      id: "username-input",
      value: `${this.user.username}`
    });

    this.children.name = new Input({
      type: "text",
      name: "name",
      class: "profile__form-input",
      required: "required",
      minlength: "2",
      id: "name-input",
      value: `${this.user.name}`
    });

    this.children.surname = new Input({
      type: "text",
      name: "surname",
      class: "profile__form-input",
      required: "required",
      minlength: "2",
      id: "surname-input",
      value: `${this.user.surname}`
    });

    this.children.nameInChat = new Input({
      type: "text",
      name: "nameInChat",
      class: "profile__form-input",
      required: "required",
      minlength: "2",
      id: "nameInChat-input",
      value: `${this.user.nameInChat}`
    });

    this.children.tel = new Input({
      type: "tel",
      name: "tel",
      class: "profile__form-input",
      required: "required",
      minlength: "2",
      id: "tel-input",
      value: `${this.user.tel}`
    });

  }

  render() {
    return this.compile(template, {...this.props});
  }
}
