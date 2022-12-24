import template from './chat-message.hbs';
import {IChatMessage} from "../interfaces/chat-message.interface";
import {Block} from '../../../utils/block';

export class ChatMessage extends Block<IChatMessage>{
  constructor(props: IChatMessage) {
    super(props);
  }

  render() {
    return this.compile(template, {...this.props});
  }
}

