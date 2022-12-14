import {ISubmitForm} from '../components/shared/interfaces/form-authorization.interface';
import {ISignUp} from '../components/shared/interfaces/sign-up.interface';
import router from '../utils/router';
import {AuthAPI} from '../api/auth-api';
import store from '../utils/store';

class AuthController {
  constructor(private api: AuthAPI) {}

  async signin(data: ISignUp) {
    try {
      await this.api.signin(data);
      this.fetchUser(); // await

      store.set("user.error", undefined);

      router.go("/messenger");
    } catch (e: any) {
      console.error(e);
    }
  }

  async signup(data: ISubmitForm) {
    try {
      await this.api.signup(data);
      await this.fetchUser();

      router.go("/messenger");
    } catch (e: any) {
      console.error(e.message);
    }
  }

  async request(req: () => void) {
    store.set("user.isLoading", true);
    try {
      await req();

      store.set("user.error", undefined);
    } catch (e: any) {
      store.set("user.error", e);
      console.error(e.message);
    } finally {
      store.set("user.isLoading", false);
    }
  }

  async fetchUser() {
    const user = await this.api.read();

    // @ts-ignore
    store.set("user", user);
  }

  async logout() {
    await this.request(async () => {
      await this.api.logout();

      router.go("/");
    });
  }
}

export default new AuthController(new AuthAPI());
