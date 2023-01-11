import { SignIn } from './components/authorization/sign-in/sign-in';
import { SignUp } from './components/authorization/sign-up/sign-up';
import { ServerError } from './components/error-page/server-error/server-error';
import { NotFound } from './components/error-page/not-found/not-found';
import { Chat } from './components/chat/chat';
import Router from './utils/router';
import { Routes } from './components/shared/enums/routes.enum';
import { ProfilePage } from './components/profile/profile';
import AuthController from './controllers/auth-controller';

document.addEventListener('DOMContentLoaded', async () => {
  let isProtectedRoute = true;
  const path = document.location.pathname;

  Router.use(Routes.SIGN_IN, SignIn)
    .use(Routes.SIGN_UP, SignUp)
    .use(Routes.NOT_FOUND, NotFound)
    .use(Routes.SERVER_ERROR, ServerError)
    .use(Routes.MESSENGER, Chat)
    .use(Routes.SETTING, ProfilePage);

  switch (path) {
    case Routes.SIGN_IN:
    case Routes.SIGN_UP:
      isProtectedRoute = false;
      break;
  }

  try {
    await AuthController.fetchUser();

    Router.start();

    if (!isProtectedRoute) {
      Router.go(Routes.MESSENGER);
    }
  } catch (e) {
    Router.start();

    if (isProtectedRoute) {
      Router.go(Routes.SIGN_IN);
    }
  }
});
