import template from './sign-up.hbs';
import {Input} from "../../shared/components/input/input";
import {Button} from "../../shared/components/button";
import authController from "../../../controllers/auth-controller";
import {Block} from '../../../utils/block';
export class SignUp extends Block {

    constructor() {
        super({});
    }

    init() {
        this.children.firstName = new Input({
            name: 'first_name',
            id: 'first_name',
            type: 'text',
            placeholder: 'Name'
        });

        this.children.secondName = new Input({
            name: 'second_name',
            id: 'second_name',
            type: 'text',
            placeholder: 'Surname'
        });

        this.children.email = new Input({
            name: 'email',
            id: 'email',
            type: 'email',
            placeholder: 'E-mail',
        });

        this.children.login = new Input({
            name: 'login',
            id: 'login',
            type: 'text',
            placeholder: 'Login',
        });

        this.children.phone = new Input({
            name: 'phone',
            id: 'phone',
            type: 'tel',
            placeholder: 'Telephone',
        });

        this.children.password = new Input({
            name: 'password',
            id: 'password',
            type: 'password',
            placeholder: 'Password',
        });

        this.children.button = new Button({
            label: 'Sign up',
            id: 'sign-up',
            class: 'container__form-button',
            events:  {
              click: (): void => {
                this.onSubmit()
              },
            },
        });

    }

    private onSubmit(): void {
      const values = Object
        .values(this.children)
        .filter(child => child instanceof Input)
        .map((child) => ([(child as Input).getName(), (child as Input).getValue()]))

      const data = Object.fromEntries(values);
      console.log(data);
      authController.signup(data).then(r => console.log(r));
    }

    render() {
        return this.compile(template, {...this.props});
    }
}

