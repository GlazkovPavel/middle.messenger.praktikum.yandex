import {SignIn} from './components/authorization/sign-in/sign-in';
import {SignUp} from './components/authorization/sign-up/sign-up';
import {Profile} from "./components/profile/profile";
import {ServerError} from './components/error-page/server-error/server-error';
import {NotFound} from './components/error-page/not-found/not-found';
import {Chat} from "./components/chat/chat";
import * as imgPhotoVideo from "../static/images/photo-video.svg";
import * as imgFile from "../static/images/file.svg";
import * as imgLocation from "../static/images/location.svg";
import {IProfileState} from './components/profile/interfaces/profile-state.interface';


//const signIn = new SignIn();
const signUp = new SignUp();
//const notFound = new NotFound();
//const serverError = new ServerError();
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

//window.renderPage = renderPage;

const user = {
  userEmail: "gg@gg.gg",
  username: 'usernamePasha',
  surname: 'Glazkov',
  nameInChat: 'PG',
  tel: '8-999-9965432',
  name: 'Pavel',
  photo: 'https://sun9-north.userapi.com/sun9-88/s/v1/if1/Ut6lK2K0J5PgfQ315J18BI2BIryVYtizUK6IXM2HMwUbpF2cMbObnEzUNcncenN2cd0ZN9en.jpg?size=2160x2160&quality=96&type=album',
}

const state: IProfileState = {
  isProfileEdit: true,
  isCanEdit: false,
  name: 'Pavel',
  avatar: 'https://sun9-north.userapi.com/sun9-88/s/v1/if1/Ut6lK2K0J5PgfQ315J18BI2BIryVYtizUK6IXM2HMwUbpF2cMbObnEzUNcncenN2cd0ZN9en.jpg?size=2160x2160&quality=96&type=album',
}

//const profile = new Profile(state, user);
//root.innerHTML = profile.getContent().innerHTML;

document.addEventListener('DOMContentLoaded', async () => {

  function renderPage() {
    const root = document.querySelector('#root')

    root.append(signUp.getContent());
   // chat.renderChatList();
  }

  renderPage()

})
