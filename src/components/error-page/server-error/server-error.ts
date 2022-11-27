import template from './server-error.hbs';
import Block from "../../../utils/block";
import {Button} from "../../shared/button";

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
