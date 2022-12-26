import {Block} from "../../../../utils/block";
import template from "./user-card.hbs";
import './user-card.less'

interface IUserCard {
  name: string;
  avatar?: string;
  id: number;
  events?: {
    click: (e: Event) => void;
  };
}

export class UserCard extends Block<IUserCard> {
  constructor(props: IUserCard) {
    super({ ...props });
  }

  render() {
    return this.compile(template, { ...this.props });
  }
}

