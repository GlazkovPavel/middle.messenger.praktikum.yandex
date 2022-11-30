import template from './profile-edit-user.hbs';
import {Input} from "../../shared/input/input";
import Block from '../../../utils/block';
import {IUser} from '../../shared/interfaces/user.interface';

export class ProfileEditUser extends Block {


  constructor(user: IUser | undefined) {
    super({}, user);
  }

  init() {
    this.children.userEmail = new Input({
      type: "email",
      name: "email",
      class: "profile__form-input",
      required: "required",
      minlength: "4",
      id: "email-input",
      value: `${this.user!.email}`
    });

    this.children.username = new Input({
      type: "text",
      name: "username",
      class: "profile__form-input",
      required: "required",
      minlength: "2",
      id: "username-input",
      value: `${this.user!.username}`
    });

    this.children.firstName = new Input({
      type: "text",
      name: "first_name",
      class: "profile__form-input",
      required: "required",
      minlength: "2",
      id: "first_name-input",
      value: `${this.user!.first_name}`
    });

    this.children.secondName = new Input({
      type: "text",
      name: "second_name",
      class: "profile__form-input",
      required: "required",
      minlength: "2",
      id: "second_name-input",
      value: `${this.user!.second_name}`
    });

    this.children.displayName = new Input({
      type: "text",
      name: "display_name",
      class: "profile__form-input",
      required: "required",
      minlength: "2",
      id: "display_name-input",
      value: `${this.user!.display_name}`
    });

    this.children.phone = new Input({
      type: "tel",
      name: "phone",
      class: "profile__form-input",
      required: "required",
      minlength: "2",
      id: "phone-input",
      value: `${this.user!.phone}`
    });

  }

  render() {
    return this.compile(template, {...this.props});
  }
}
