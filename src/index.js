import {htmlSignIn} from './components/authorization/sign-in/sign-in';
import {htmlSignUp} from './components/authorization/sign-up/sign-up';
import {htmlProfileMain} from "./components/profile/profile";
import {htmlServerError} from './components/error-page/server-error/server-error';
import {htmlNotFoundPage} from './components/error-page/not-found/not-found';
import {htmlChat} from "./components/chat/chat";


const htmlMap = new Map();

htmlMap.set(`htmlSignUp`, htmlSignUp);
htmlMap.set(`htmlSignIn`, htmlSignIn);
htmlMap.set(`htmlServerError`, htmlServerError);
htmlMap.set(`htmlNotFoundPage`, htmlNotFoundPage);
htmlMap.set('htmlProfileMain', htmlProfileMain);
htmlMap.set('htmlChat', htmlChat);

(function initRoute() {
    renderPage('htmlChat');
})();

function renderPage(html) {
    const root = document.querySelector('#root')
    root.innerHTML = htmlMap.get(html);
}

window.renderPage = renderPage;

document.addEventListener('DOMContentLoaded', () => {

})
