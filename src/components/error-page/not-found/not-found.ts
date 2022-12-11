import template from './not-found.hbs';
import Block from "../../../utils/block";
import {Button} from "../../shared/button";
import router from '../../../utils/router';

export class NotFound extends Block {
    constructor() {
        super({});
    }

    init() {
        this.children.button = new Button({
          label: 'Back to chats',
          id: 'back-to-chats',
          class: 'button',
          events: {
              click: () => this.backToChats(),
          },
        });
    }

    private backToChats(): void {
        router.go('/messenger')
    }

    render() {
        return this.compile(template, {...this.props})
    }
}
