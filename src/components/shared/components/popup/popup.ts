import template from "./popup.hbs";
import "./popup.less";
import {Block} from "../../../../utils/block";

interface IPopup {
  title: string;
  classTitle?: string;
  content?: Block;
  button?: Block;
  button2?: Block;
  button3?: Block;
  close: Block;
  usersCards?: Block[]
  // className?: string;
  events?: {
    submit: (e: SubmitEvent) => void;
  };
}

export class Popup extends Block {

  constructor(props: IPopup) {
    const events = {};
    super({ ...props, events });
  }

  render() {
    return this.compile(template, { ...this.props });
  }
}
