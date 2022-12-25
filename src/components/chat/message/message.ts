import {MessageProps} from "../interfaces/message-props.intreface";
import {Block} from "../../../utils/block";
import template from "./message.hbs";
import "./message.less";

export class Message extends Block<MessageProps> {
  constructor(props: MessageProps) {
    super({ ...props });
  }

  protected render(): DocumentFragment {
    let time = this.props.time;
    if (time !== undefined) {
      time = new Date(time).toString().substring(16, 21);
    }

    return this.compile(template, { ...this.props, time });
  }
}
