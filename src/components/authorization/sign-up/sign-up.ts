import template from './sign-up.hbs';
import Block from "../../../utils/block";
import {Input} from "../../shared/input/input";
import {Button} from "../../shared/button";
import {ISignUp} from "../../shared/interfaces/sign-up.interface";

export class SignUp extends Block {
    private form: HTMLFormElement;
    private password: HTMLInputElement;
    private login: HTMLInputElement;
    private inputs: NodeListOf<HTMLInputElement>;

    constructor() {
        super({});
    }

    init() {
        this.children.name = new Input({
            name: 'name',
            id: 'name',
            dataName: 'input',
            type: 'text',
            placeholder: 'Name'
        });

        this.children.surname = new Input({
            name: 'surname',
            id: 'surname',
            dataName: 'input',
            type: 'text',
            placeholder: 'Surname'
        });

        this.children.email = new Input({
            name: 'email',
            id: 'email',
            type: 'email',
            dataName: 'input',
            placeholder: 'E-mail'
        });

        this.children.login = new Input({
            name: 'login',
            id: 'login',
            type: 'text',
            dataName: 'input',
            placeholder: 'Login'
        });

        this.children.phone = new Input({
            name: 'phone',
            id: 'phone',
            type: 'tel',
            dataName: 'input',
            placeholder: 'Telephone'
        });

        this.children.password = new Input({
            name: 'password',
            id: 'password',
            type: 'password',
            dataName: 'input',
            placeholder: 'Password'
        });

        this.children.cpassword = new Input({
            name: 'cpassword',
            id: 'cpassword',
            type: 'cpassword',
            dataName: 'input',
            placeholder: 'Repeat the password'
        });

        this.children.button = new Button({
            label: 'Sign up',
            id: 'sign-up',
            events: {
                click: () => this.onSubmit(),
            },
        });

        setTimeout(() => {
            this.handlerForm();
        }, 0)
    }

    handlerForm(): void {
        this.form = document.querySelector('.container__form');
        this.inputs = this.form.querySelectorAll('[data-name]');
        this.inputs.forEach((item: HTMLInputElement) => {
            item.classList.add('container__form-input');
        });
        this.form.querySelector('#sign-up').classList.add('container__form-button');
    }

    onSubmit(): void {

        let submitForm: ISignUp = {};

        this.inputs.forEach((item: HTMLInputElement) => {
            // @ts-ignore
            submitForm[item.id] = item.value;
        })

        console.log(submitForm);
    }

    render() {
        return this.compile(template, {...this.props});
    }
}

