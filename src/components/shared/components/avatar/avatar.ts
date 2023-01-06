import {Block} from "../../../../utils/block";
import template from './avatar.hbs';
import {IAvatar} from "../../interfaces/avatar.interface";
import withStore from "../../../../hoc/hoc";

export class Avatar extends Block {
  constructor(props: IAvatar) {
    super(props);
  }

  render() {
    return this.compile(template, { ...this.props });
  }
}

export const AvatarUser = withStore((state) => ({ user: { ...state.user } }))(Avatar);
