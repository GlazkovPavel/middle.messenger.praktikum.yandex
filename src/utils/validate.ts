import {patterns} from '../const/patterns';

export const validate = (
  event: Event,
  elem: HTMLElement,
  className: string
) => {
  const error: HTMLElement | null = elem.querySelector(className);

  const input = event.target as HTMLInputElement;
  const regExp: RegExp = patterns[input.name].regExp;
  const isValid: boolean = regExp.test(input.value);

  if (isValid) {
    if (event.type === "focusout") {
      error.textContent = "";
    }
  } else {
    error.textContent = patterns[input.name].error;
  }
};
