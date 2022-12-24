import {SignIn} from './components/authorization/sign-in/sign-in';
import {SignUp} from './components/authorization/sign-up/sign-up';
import {ServerError} from './components/error-page/server-error/server-error';
import {NotFound} from './components/error-page/not-found/not-found';
import {Chat} from "./components/chat/chat";
import Router from './utils/router';
import {Routes} from './components/shared/enums/routes.enum';
import {ProfilePage} from "./components/profile/profile";

document.addEventListener('DOMContentLoaded', async () => {

  Router.use(Routes.SIGN_IN, SignIn)
    .use(Routes.SIGN_UP, SignUp)
    .use(Routes.NOT_FOUND, NotFound)
    .use(Routes.SERVER_ERROR, ServerError)
    .use(Routes.MESSENGER, Chat)
    .use(Routes.SETTING, ProfilePage)
  Router.start();

})
