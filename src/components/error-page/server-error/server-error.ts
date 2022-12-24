import template from './server-error.hbs';
import {Button} from "../../shared/button";
import {Block} from '../../../utils/block';

export class ServerError extends Block {
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
        console.log('back-to-chats');
    }

    render() {
        return this.compile(template, {...this.props})
    }
}
