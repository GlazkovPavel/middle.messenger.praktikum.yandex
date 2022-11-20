import template from './sign-up.hbs';
import Block from "../../../utils/block";
import {Input} from "../../shared/input/input";
import {Button} from "../../shared/button";

interface ISubmitForm {
    password: string;
    login: string;
}

export class SignUp extends Block {
    private form: HTMLFormElement;
    private password: HTMLInputElement;
    private login: HTMLInputElement;

    constructor() {
        super({});
    }

    init() {
        this.children.firstName = new Input({
            name: 'first_name',
            id: 'first_name',
            type: 'text',
            placeholder: 'Имя'
        });

        this.children.secondName = new Input({
            name: 'second_name',
            id: 'second_name',
            type: 'text',
            placeholder: 'Фамилия'
        });

        this.children.email = new Input({
            name: 'email',
            id: 'email',
            type: 'email',
            placeholder: 'E-mail'
        });

        this.children.login = new Input({
            name: 'login',
            id: 'login',
            type: 'text',
            placeholder: 'Логин'
        });

        this.children.phone = new Input({
            name: 'phone',
            id: 'phone',
            type: 'tel',
            placeholder: 'Телефон'
        });

        this.children.password = new Input({
            name: 'password',
            id: 'password',
            type: 'password',
            placeholder: 'Пароль'
        });

        this.children.cpassword = new Input({
            name: 'cpassword',
            id: 'cpassword',
            type: 'cpassword',
            placeholder: 'Пароль'
        });

        this.children.button = new Button({
            label: 'Зарегистрироваться',
            events: {
                click: () => this.onSubmit(),
            },
        });
    }

    handlerForm(): void {
        this.form = document.querySelector('.container__form');
        this.password = this.form.querySelector('#password') as HTMLInputElement;
        this.login = this.form.querySelector('#login') as HTMLInputElement;
        this.password.classList.add('container__form-input');
        this.login.classList.add('container__form-input');
        this.form.querySelector('#sign-in').classList.add('container__form-button', 'sign-in');
    }

    onSubmit(): void {
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

