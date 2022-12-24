import template from './profile-edit-user.hbs';
import {IUser} from '../../shared/interfaces/user.interface';
import {Block} from '../../../utils/block';
import withStore from '../../../hoc/hoc';

class ProfileEditUser extends Block {

  constructor(props: IUser | undefined) {
      super({ ...props });
  }

  render() {
    return this.compile(template, {...this.props});
  }
}

export const ProfilePageEditUser = withStore((state) => ({ user: { ...state.user } }))(ProfileEditUser);
