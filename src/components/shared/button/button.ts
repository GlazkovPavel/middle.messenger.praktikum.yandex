import Handlebars from "handlebars";

export const template: string = `
    <button class="form__button"></button>
`;

const render = Handlebars.compile(template);
export const htmlButton = render({});
