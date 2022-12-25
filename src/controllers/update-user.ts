import {IUser} from "../components/shared/interfaces/user.interface";
import {UserAPI} from "../api/user-api";
import AuthController from "./auth-controller";
import {IPassword} from "../components/shared/interfaces/password.interface";

class UserController {
  constructor(private api: UserAPI) {}

  async updateUser(data: IUser) {
    try {
      await this.api.updateUser(data);
      await AuthController.fetchUser();
    } catch (e: any) {
      console.error(e);
    }
  }

  async updatePassword(data: IPassword) {
    try {
      await this.api.updatePassword(data);
    } catch (e: any) {
      console.error(e.reason);
      throw e;
    }
  }

  async updateAvatar(data: FormData) {
    try {
      await this.api.updateAvatar(data);
      await AuthController.fetchUser();
    } catch (e: any) {
      console.error(e.message);
    }
  }
}

export default new UserController(new UserAPI());
