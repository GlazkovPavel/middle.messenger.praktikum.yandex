import Block from "../../../utils/block";
import template from './sign-in.hbs';
import {Input} from "../../shared/input/input";
import {Button} from "../../shared/button";

interface ISubmitForm {
    password: string;
    login: string;
}
export class SignIn extends Block {

    private form: HTMLFormElement;
    private password: HTMLInputElement;
    private login: HTMLInputElement;

    constructor() {
        super({});
    }

    init(): void {
        this.children.login = new Input({
            name: 'login',
            id: 'login',
            type: 'text',
            placeholder: 'Логин'
        });
        this.children.password = new Input({
            name: 'password',
            id: 'password',
            type: 'password',
            placeholder: 'Пароль'
        });

        this.children.button = new Button({
            label: 'Войти',
            id: 'sign-in',
            class: 'container__form-button sign-in',
            events: {
                click: () => this.onSubmit()
            },
        });
    };


  private onSubmit(): void {
    const values = Object
      .values(this.children)
      .filter(child => child instanceof Input)
      .map((child) => ([(child as Input).getName(), (child as Input).getValue()]))

    const data = Object.fromEntries(values);
    console.log(data);
  }

    render() {
        return this.compile(template, {...this.props});
    }
}
