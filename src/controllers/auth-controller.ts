import {ISubmitForm} from '../components/shared/interfaces/form-authorization.interface';
import {ISignUp} from '../components/shared/interfaces/sign-up.interface';
import router from '../utils/router';
import {AuthAPI} from '../api/auth-api';
import store from '../utils/store';

export class AuthController {

   private loginApi = new AuthAPI();

  async signin(data: ISignUp) {
    try {
      await this.loginApi.signin(data);
      await this.fetchUser();
      router.go("/messenger");
    } catch (e: any) {
      console.error('Error during sign-in', e.message);
    }
  }

  async signup(data: ISubmitForm) {
    try {
      await this.loginApi.signup(data);
      await this.fetchUser();
      router.go("/messenger");
    } catch (e: any) {
      console.error('Error during sign-up', e.message);
    }
  }

  async fetchUser() {
    store.set('user.isLoading', true);
    try {
      store.set('user.error', undefined);
      const user = await this.loginApi.read();
      store.set("user", user);
      console.log(user);
    } catch (e: any) {
      store.set('user.error', e);
      console.error('Error during user fetch', e.message);
    } finally {
      store.set('user.isLoading', false);
    }
  }

  // async logout() {
  //   try {
  //     await this.api.logout();
  //
  //     router.go("/");
  //   } catch (e: any) {
  //     console.error('Error during logging out', e.message);
  //   }
  // }
}

export default new AuthController();
