import template from './chat-message.hbs';
import Block from "../../../utils/block";
import {IChatMessage} from "./chat-message.interface";

export class ChatMessage extends Block<IChatMessage>{
  constructor(props: IChatMessage) {
    super(props);
  }

  render() {
    return this.compile(template, {...this.props});
  }
}

