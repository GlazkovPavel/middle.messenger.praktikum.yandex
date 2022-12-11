import BaseAPI from './base-api';
import {ISignUp} from '../components/shared/interfaces/sign-up.interface';
import {ISubmitForm} from '../components/shared/interfaces/form-authorization.interface';

export class AuthAPI extends BaseAPI {
  constructor() {
    super("/auth");
  }

  signin(data: ISubmitForm) {
    return this.http.post("/signin", {data});
  }

  signup(data: ISignUp) {
    return this.http.post("/signup", {data});
  }

  logout() {
    return this.http.post("/logout", {});
  }

  create = undefined;
  update = undefined;
  delete = undefined;
  read = undefined;
}
