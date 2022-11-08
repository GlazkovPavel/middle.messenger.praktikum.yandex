import Handlebars from "handlebars";

const template = `
<div class="container">
    <p class="container__title">{{ title }}</p>
    <form class="container__form" name="form">
        <div class="container__form-type">
            <label class="container__form-label" for="email">{{ email }}</label>
            <input type="email" placeholder={{ email }} class="container__form-input" name="email" id="email">
        </div>
        <div class="container__form-type">
            <label class="container__form-label" for="login">{{ login }}</label>
            <input type="text" placeholder={{ login }} class="container__form-input" name="login" id="login">
        </div>
        <div class="container__form-type">
            <label class="container__form-label" for="name">{{ name }}</label>
            <input type="text" placeholder={{ name }} class="container__form-input" name="name" id="name">
        </div>
        <div class="container__form-type">
            <label class="container__form-label" for="surname">{{ surname }}</label>
            <input type="text" placeholder={{ surname }} class="container__form-input" name="surname" id="surname">
        </div>
        <div class="container__form-type">
            <label class="container__form-label" for="tel">{{ tel }}</label>
            <input type="tel" placeholder={{ tel }} class="container__form-input" name="tel" id="tel">
        </div>
        <div class="container__form-type">
            <label class="container__form-label" for="password">{{ password }}</label>
            <input type="password" placeholder={{ password }} class="container__form-input" name="password" id="password">
        </div>
        <div class="container__form-type">
            <label class="container__form-label" for="сpassword">{{ cpassword }}</label>
            <input type="password" placeholder={{ cpassword }} class="container__form-input" name="сpassword" id="сpassword">
        </div>
        <button type="submit" class="container__form-button sign-in">{{ signUp }}</button>
    </form>
    <button onclick={window.renderPage('htmlSignIn')} class="container__button sign-up router">{{ signIn }}</button>
</div>`

const  configEng = {
    title: 'Sign up',
    email: 'E-Mail',
    login: 'Login',
    name: 'Name',
    surname: 'Surname',
    tel: 'Number phone',
    password: 'Password',
    cpassword: 'confirm the password',
    signUp: 'Create account',
    signIn: 'Sign In'
}

const renderer = Handlebars.compile(template)

export const htmlSignUp = renderer(configEng)
