import {ISubmitForm} from '../components/shared/interfaces/form-authorization.interface';
import {ISignUp} from '../components/shared/interfaces/sign-up.interface';
import router from '../utils/router';
import {AuthAPI} from '../api/auth-api';

const loginApi = new AuthAPI();

export class AuthController {


  async signin(data: ISignUp) {
    try {
      await loginApi.signin(data);

      router.go("/profile");
    } catch (e: any) {
      console.error(e);
    }
  }

  async signup(data: ISubmitForm) {
    try {
      await loginApi.signup(data);

      //await this.fetchUser();

      router.go("/profile");
    } catch (e: any) {
      console.error(e.message);
    }
  }

  // async fetchUser() {
  //   const user = await this.api.read();
  //
  //   store.set("user", user);
  // }

  // async logout() {
  //   try {
  //     await this.api.logout();
  //
  //     router.go("/");
  //   } catch (e: any) {
  //     console.error(e.message);
  //   }
  // }
}

export default new AuthController();
