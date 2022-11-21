import template from './not-found.hbs';
import Block from "../../../utils/block";
import {Button} from "../../shared/button";

export class NotFound extends Block {
    constructor() {
        super({});
    }

    init() {
        this.children.button = new Button({
            label: 'Back to chats',
            id: 'back-to-chats',
            events: {
                click: () => this.backToChats(),
            },
        });

        setTimeout(() => this.handlerRender(), 0);
    }

    private backToChats(): void {
        console.log('back-to-chats');
    }

    handlerRender(): void {
        document.querySelector('#back-to-chats').classList.add('button');
    }

    render() {
        return this.compile(template, {...this.props})
    }
}
