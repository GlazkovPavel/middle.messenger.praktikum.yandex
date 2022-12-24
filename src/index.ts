import {SignIn} from './components/authorization/sign-in/sign-in';
import {SignUp} from './components/authorization/sign-up/sign-up';
import {ServerError} from './components/error-page/server-error/server-error';
import {NotFound} from './components/error-page/not-found/not-found';
import {Chat} from "./components/chat/chat";
import * as imgPhotoVideo from "../static/images/photo-video.svg";
import * as imgFile from "../static/images/file.svg";
import * as imgLocation from "../static/images/location.svg";
import {IProfileState} from './components/profile/interfaces/profile-state.interface';
import Router from './utils/router';
import {Routes} from './components/shared/enums/routes.enum';
import {ProfilePage} from "./components/profile/profile";

document.addEventListener('DOMContentLoaded', async () => {
  // const chat = new Chat({
  //   photo: 'https://sun9-north.userapi.com/sun9-88/s/v1/if1/Ut6lK2K0J5PgfQ315J18BI2BIryVYtizUK6IXM2HMwUbpF2cMbObnEzUNcncenN2cd0ZN9en.jpg?size=2160x2160&quality=96&type=album',
  //   name: 'Pavel',
  //   popup: {
  //     photoCard: {
  //       src: imgPhotoVideo,
  //       text: 'Photo and video'
  //     },
  //     file: {
  //       src: imgFile,
  //       text: 'File'
  //     },
  //     location: {
  //       src: imgLocation,
  //       text: 'Location'
  //     }
  //   }
  // });


  Router.use(Routes.SIGN_IN, SignIn)
    .use(Routes.SIGN_UP, SignUp)
    .use(Routes.NOT_FOUND, NotFound)
    .use(Routes.SERVER_ERROR, ServerError)
    .use(Routes.MESSENGER, Chat)
    .use(Routes.SETTING, ProfilePage)
  Router.start();


})
