import {SignIn} from './components/authorization/sign-in/sign-in';
import {SignUp} from './components/authorization/sign-up/sign-up';
import {htmlProfileMain} from "./components/profile/profile";
import {htmlServerError} from './components/error-page/server-error/server-error';
import {htmlNotFoundPage} from './components/error-page/not-found/not-found';
import {htmlChat} from "./components/chat/chat";

declare global {
    interface window {
        renderPage?: any;
    }
}

const htmlMap = new Map();

htmlMap.set(`htmlServerError`, htmlServerError);
htmlMap.set(`htmlNotFoundPage`, htmlNotFoundPage);
htmlMap.set('htmlProfileMain', htmlProfileMain);
htmlMap.set('htmlChat', htmlChat);

//const signIn = new SignIn();
const signUp = new SignUp();



//window.renderPage = renderPage;

document.addEventListener('DOMContentLoaded', async () => {

    function renderPage() {
        const root = document.querySelector('#root')
        root.append(signUp.getContent())
    }

    renderPage()

})
