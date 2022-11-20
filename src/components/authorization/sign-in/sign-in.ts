import * as Handlebars from "handlebars";

const template: string = `
<div class="container">
    <p class="container__title">{{ title }}</p>
    <form class="container__form" name="form">
        <div class="container__form-type">
            <label class="container__form-label" for="login">{{ login }}</label>
            <input type="text" placeholder={{ login }} class="container__form-input" name="login" id="login">
        </div>
        <div class="container__form-type">
            <label class="container__form-label" for="password">{{ password }}</label>
            <input type="password" placeholder={{ password }} class="container__form-input" name="password" id="password">
        </div>
        <button class="container__form-button sign-in">{{ signIn }}</button>
    </form>
    <button onclick={window.renderPage('htmlSignUp')} class="container__button sign-up router">{{ signUp }}</button>
</div>`

const  configEng = {
    title: 'Enter',
    login: 'Login',
    password: 'Password',
    signIn: 'Sign in',
    signUp: 'Sign up'
}

const renderer = Handlebars.compile(template)

export const htmlSignIn = renderer(configEng)
