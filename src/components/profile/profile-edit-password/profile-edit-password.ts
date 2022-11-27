import template from './profile-edit-password.hbs';
import Block from "../../../utils/block";
import {Input} from "../../shared/input/input";

export class ProfileEditPassword extends Block {
    constructor() {
        super({});
    }

    init() {
      this.children.inputOldPassword = new Input({
        placeholder: "old password",
        type: "password",
        name: "password",
        class: "profile__form-input",
        minlength: "8",
        id: "old-password-input",
      })
      this.children.inputNewPassword = new Input({
        placeholder: "new password",
        type: "password",
        name: "email",
        class: "profile__form-input",
        minlength: "8",
        id: "new-password-input"
      })
      this.children.inputNewCPassword = new Input({
        placeholder: "new password",
        type: "password",
        name: "email",
        class: "profile__form-input",
        minlength: "8",
        id: "new-cpassword-input"
      })


    }

  render() {
    return this.compile(template, {...this.props});
  }

}
