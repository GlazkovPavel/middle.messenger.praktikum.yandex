import template from './chat-list.hbs';
import Block from "../../../utils/block";
import {Button} from "../../shared/button";
import {Input} from "../../shared/input/input";
import {IChatMessage} from "../interfaces/chat-message.interface";
import {ChatMessage} from "../chat-message/chat-message";
import {chatArray} from '../const/chats';

export class ChatList extends Block {
  constructor() {
    super({});
  }

  init() {

    this.children.chat = chatArray.map((item: IChatMessage) => new ChatMessage(item));

    this.children.input = new Input({
      placeholder: 'search...',
      id: 'input',
      class: 'input',
      type: 'text'
    })

    this.children.button = new Button({
      id: 'button',
      class: 'button',
      label: 'profile',
      events: {
        click: () => this.onSubmit()
      },
    })
  }

  private onSubmit(): void {
    console.log('search...')
  }

  render() {
    return this.compile(template, {...this.props});
  }
}
