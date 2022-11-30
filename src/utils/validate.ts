import {patterns} from '../const/patterns';

export const validate = (
  event: Event
) => {

  const input = event.target as HTMLInputElement;
  const error: HTMLElement | null = document.querySelector(`#${input.id}-error`);
  const regExp: RegExp = patterns[input.name].regExp;
  const isValid: boolean = regExp.test(input.value);

  if (isValid) {
    if (event.type === "focusout") {
      error!.textContent = "";
      error!.classList.remove('error');
    }
  } else {
    error!.classList.add('error');
    error!.textContent = patterns[input.name].error;
  }
};
