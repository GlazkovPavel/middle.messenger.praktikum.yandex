import BaseAPI from "./base-api";
import {IUser} from "../components/shared/interfaces/user.interface";
import {IPassword} from "../components/shared/interfaces/password.interface";

export class UserAPI extends BaseAPI {
  constructor() {
    super("/user");
  }

  headers: Record<string, string> = { "Content-Type": "application/json" };

  updateUser(data: IUser) {
    return this.http.put("/profile", data);
  }

  updatePassword(data: IPassword) {
    console.log(data);
    return this.http.put("/password", data);
  }

  updateAvatar(data: FormData) {
    return this.http.put("/profile/avatar", data);
  }

  create = undefined;
  read = undefined;
  update = undefined;
  delete = undefined;
}

export default new UserAPI();
