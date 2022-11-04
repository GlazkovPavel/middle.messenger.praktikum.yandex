import Handlebars from "handlebars";

const template = `
 <div class="user-profile">
        <h2 class='profile__title'>Hi, {{user.name}}!</h2>
        <form class="profile__form">
          <fieldset class="profile__fields">
          <div class="profile__container">
              <p class="profile__form-input-name">{{email}}</p>
              <input
                type="email"
                name="email"
                class="profile__form-input"
                value={{user.userEmail}}>
            </div>
            <hr/>
            <div class="profile__container">
              <p class="profile__form-input-name">{{username}}</p>
              <input
                type="text"
                class="profile__form-input"
                value={{user.username}}>
            </div>
            <hr/>
            <div class="profile__container">
              <p class="profile__form-input-name">{{name}}</p>
              <input
                type="text"
                class="profile__form-input"
                value={{user.name}}>
            </div>
            <hr/>
            <div class="profile__container">
              <p class="profile__form-input-name">{{surname}}</p>
              <input
                type="text"
                class="profile__form-input"
                value={{user.surname}}>
            </div>
            <hr/>
            <div class="profile__container">
              <p class="profile__form-input-name">{{nameInChat}}</p>
              <input
                type="text"
                class="profile__form-input"
                value={{user.nameInChat}}>
            </div>
            <hr/>
            <div class="profile__container">
              <p class="profile__form-input-name">{{tel}}</p>
              <input
                type="tel"
                class="profile__form-input"
                value={{user.tel}}>
            </div>
          </fieldset>
    
            <button class="profile__button profile__button_type_edit">Редактировать</button>
            <button class="profile__button profile__button_type_save" >Сохранить</button>
        </form>
        <button class="profile__button profile__button_type_signout">Выйти из аккаунта</button>
      </div>
`

const  configEng = {
    user: {
        name: 'Pavel',
        surname: 'Glazkov',
        username: 'pglazkov',
        userEmail: 'pp@pp.com',
        nameInChat: 'Pavel',
        tel: '+7-920-117-9330'
    },
    username: 'Username',
    name: 'Name',
    surname: 'Surname',
    nameInChat: 'Name In Chat',
    title: 'Sign up',
    email: 'E-Mail',
    login: 'Login',
    tel: 'Number phone',
    password: 'Password',
    cpassword: 'confirm the password',
    signUp: 'Create account',
    signIn: 'Sign In'
}

const renderer = Handlebars.compile(template)

export const htmlProfileEdit = renderer(configEng);
