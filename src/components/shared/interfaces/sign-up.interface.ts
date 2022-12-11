import {ISubmitForm} from "./form-authorization.interface";

export interface ISignUp extends ISubmitForm{
  email?: string;
  first_name?: string;
  second_name?: string;
  phone?: string;

}
