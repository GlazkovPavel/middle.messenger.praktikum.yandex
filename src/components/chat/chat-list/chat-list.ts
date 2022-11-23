import template from './chat-list.hbs';
import Block from "../../../utils/block";
import {Button} from "../../shared/button";
import {Input} from "../../shared/input/input";
import {IChatMessage} from "../chat-message/chat-message.interface";
import {ChatMessage} from "../chat-message/chat-message";

export class ChatList extends Block {
  constructor() {
    super({});
  }

  init() {

    this.children.input = new Input({
      placeholder: 'search...',
      id: 'input',
      type: 'text'
    })

    this.children.button = new Button({
      id: 'button',
      label: 'profile',
      events: {
        click: () => this.onSubmit()
      },
    })

    setTimeout(() => {
      this.handlerTemplate();
    }, 0)
  }

  private onSubmit(): void {
    console.log('search...')
  }

  private handlerTemplate(): void {
    document.querySelector('#button').classList.add('button');
    document.querySelector('#input').classList.add('input');
  }

  public renderMessage(props: IChatMessage): void {
    const message = new ChatMessage(props);
    document.querySelector('.chats').append(message.getContent());
  }


  render() {
    return this.compile(template, {...this.props});
  }
}
