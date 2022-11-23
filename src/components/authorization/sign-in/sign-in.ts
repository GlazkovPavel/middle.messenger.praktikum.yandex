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
            events: {
                click: () => this.onSubmit()
            },
        });

        setTimeout(() => {
            this.handlerForm();
        }, 0)
    };

    handlerForm(): void {
        this.form = document.querySelector('.container__form');
        this.password = this.form.querySelector('#password') as HTMLInputElement;
        this.login = this.form.querySelector('#login') as HTMLInputElement;
        this.password.classList.add('container__form-input');
        this.login.classList.add('container__form-input');
        this.form.querySelector('#sign-in').classList.add('container__form-button', 'sign-in');
    }

    private onSubmit(): void {
        const submitForm: ISubmitForm = {
            password: this.password.value,
            login: this.login.value
        }
        console.log('this.form ', submitForm);
    }

    render() {
        return this.compile(template, {...this.props});
    }
}
