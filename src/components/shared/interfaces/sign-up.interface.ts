import {ISubmitForm} from "./form-authorization.interface";

export interface ISignUp extends ISubmitForm{
    email?: string;
    name?: string;
    surname?: string;
    phone?: string;

}
