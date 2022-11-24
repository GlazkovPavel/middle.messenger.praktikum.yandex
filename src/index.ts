import {SignIn} from './components/authorization/sign-in/sign-in';
import {SignUp} from './components/authorization/sign-up/sign-up';
import {htmlProfileMain} from "./components/profile/profile";
import {ServerError} from './components/error-page/server-error/server-error';
import {NotFound} from './components/error-page/not-found/not-found';
import {Chat} from "./components/chat/chat";
import * as imgPhotoVideo from "../static/images/photo-video.svg";
import * as imgFile from "../static/images/file.svg";
import * as imgLocation from "../static/images/location.svg";

declare global {
    interface window {
        renderPage?: any;
    }
}

const htmlMap = new Map();

htmlMap.set('htmlProfileMain', htmlProfileMain);

//const signIn = new SignIn();
//const signUp = new SignUp();
//const notFound = new NotFound();
//const serverError = new ServerError();
// const chat = new Chat({
//     photo: 'https://sun9-north.userapi.com/sun9-88/s/v1/if1/Ut6lK2K0J5PgfQ315J18BI2BIryVYtizUK6IXM2HMwUbpF2cMbObnEzUNcncenN2cd0ZN9en.jpg?size=2160x2160&quality=96&type=album',
//     name: 'Pavel',
//     popup: {
//         photoCard: {
//             src: imgPhotoVideo,
//             text: 'Photo and video'
//         },
//         file: {
//             src: imgFile,
//             text: 'File'
//         },
//         location: {
//             src: imgLocation,
//             text: 'Location'
//         }
//     }
// });

//window.renderPage = renderPage;
//
// document.addEventListener('DOMContentLoaded', async () => {
//
//     function renderPage() {
//         const root = document.querySelector('#root')
//         root.append(chat.getContent());
//         chat.renderChatList();
//     }
//
//     renderPage()
//
// })

(function initRoute() {
    renderPage('htmlProfileMain');
})();

function renderPage(html: string) {
    const root = document.querySelector('#root')
    root.innerHTML = htmlMap.get(html);
}

window.renderPage = renderPage;

document.addEventListener('DOMContentLoaded', () => {


})
