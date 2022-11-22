import template from './chat-list.hbs';
import Block from "../../../utils/block";
import {Button} from "../../shared/button";
import {Input} from "../../shared/input/input";

export class ChatList extends Block {
  constructor() {
    super({});
  }

  init() {

    this.children.input = new Input({
      placeholder: 'search...',
      id: 'input-search',
      type: 'text'
    })

    this.children.button = new Button({
      id: 'search',
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
    
  }



  render() {
    return this.compile(template, {...this.props});
  }
}
