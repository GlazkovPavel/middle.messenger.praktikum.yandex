import template from './profile-edit-user.hbs';
import {Input} from "../../shared/input/input";
import Block from '../../../utils/block';
import Store from "../../../utils/store";
import {withUser} from '../../../hoc/with-user.hoc';
import {IUser} from '../../shared/interfaces/user.interface';
import store from '../../../utils/store';
import {StoreEvents} from '../../shared/enums/store.enum';
import isEqual from '../../../utils/isEqual';

export class ProfileEditUser extends Block {

  // constructor(props: IUser | undefined) {
  //     super({ ...props });
  // }

  init() {
    //AuthController.fetchUser();
    this.children.userEmail = new Input({
      type: "email",
      name: "email",
      class: "profile__form-input",
      required: "required",
      minlength: "4",
      id: "email-input",
      value: `${this.user?.email}`
    });

    this.children.username = new Input({
      type: "text",
      name: "username",
      class: "profile__form-input",
      required: "required",
      minlength: "2",
      id: "username-input",
      value: `${this.user?.first_name}`
    });

    this.children.firstName = new Input({
      type: "text",
      name: "first_name",
      class: "profile__form-input",
      required: "required",
      minlength: "2",
      id: "first_name-input",
      value: `${this.props?.first_name}`
    });

    this.children.secondName = new Input({
      type: "text",
      name: "second_name",
      class: "profile__form-input",
      required: "required",
      minlength: "2",
      id: "second_name-input",
      value: `${this.props}`
    });

    this.children.displayName = new Input({
      type: "text",
      name: "display_name",
      class: "profile__form-input",
      required: "required",
      minlength: "2",
      id: "display_name-input",
      value: `${this.props!.display_name}`
    });

    this.children.phone = new Input({
      type: "tel",
      name: "phone",
      class: "profile__form-input",
      required: "required",
      minlength: "2",
      id: "phone-input",
      value: `${this.user?.phone}`
    });

  }

   private getStateUser(): void {

     store.on(StoreEvents.Updated, () => {
       console.log(Store.getState()?.user)
       this.user = Store.getState()?.user
       console.log(this.user)
     });
  }

  render() {
    this.getStateUser();
    return this.compile(template, {...this.props});
  }
}

export const ProfilePageEditUser = withUser(ProfileEditUser);
