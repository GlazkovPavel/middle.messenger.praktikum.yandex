import template from './profile-edit-password.hbs';
import { Input } from '../../shared/components/input/input';
import { Block } from '../../../utils/block';

export class ProfileEditPassword extends Block {
  constructor() {
    super({});
  }

  init() {
    this.children.inputOldPassword = new Input({
      placeholder: 'old password',
      type: 'password',
      name: 'oldPassword',
      class: 'profile__form-input',
      minlength: '8',
      id: 'old-password-input',
    });
    this.children.inputNewPassword = new Input({
      placeholder: 'new password',
      type: 'password',
      name: 'newPassword',
      class: 'profile__form-input',
      minlength: '8',
      id: 'new-password-input',
    });
    this.children.inputNewCPassword = new Input({
      placeholder: 'new password',
      type: 'password',
      name: 'cpassword',
      class: 'profile__form-input',
      minlength: '8',
      id: 'new-cpassword-input',
    });
  }

  render() {
    return this.compile(template, { ...this.props });
  }
}
