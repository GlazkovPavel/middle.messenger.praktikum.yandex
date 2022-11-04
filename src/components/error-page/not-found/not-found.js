import Handlebars from "handlebars";

const template = `
<div class="container__error">
    <p class="title title__number">{{numberError}}</p>
    <p class="title title__text">{{textError}}</p>
    <button onclick="window.renderPage('htmlChat')" class="button">{{buttonText}}</button>
</div>
`;

const configEng = {
    numberError: '404',
    textError: 'Page not found',
    buttonText: 'Back to chats'
}

const renderer = Handlebars.compile(template)

export const htmlNotFoundPage = renderer(configEng)
