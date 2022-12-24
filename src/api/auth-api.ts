import BaseAPI from './base-api';
import {ISignUp} from '../components/shared/interfaces/sign-up.interface';
import {ISubmitForm} from '../components/shared/interfaces/form-authorization.interface';
import {IUser} from "../components/shared/interfaces/user.interface";

export class AuthAPI extends BaseAPI {
  constructor() {
    super("/auth");
  }

  public signin(data: ISubmitForm) {
    return this.http.post("/signin", data);
  }

  public signup(data: ISignUp) {
    return this.http.post("/signup", data);
  }

  public read(): Promise<IUser | unknown> {
    return this.http.get("/user");
  }


  logout() {
    return this.http.post("/logout");
  }

  create = undefined;
  update = undefined;
  delete = undefined;
}
