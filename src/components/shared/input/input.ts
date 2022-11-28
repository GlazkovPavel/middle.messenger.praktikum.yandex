import template from './input.hbs';
import Block from "../../../utils/block";
import {IInputProps} from "../interfaces/input.interface";
import {validate} from '../../../utils/validate';

export class Input extends Block<IInputProps> {
  constructor(props: IInputProps) {
    const events = {
      focusin: (e: Event): void => this.onFocus(e),
      focusout: (e: Event): void => this.onBlur(e),
    };
    super({class: 'container__form-input', value: '', events,  ...props});
  }

  public setValue(value: string) {
    return (this.element as HTMLInputElement).value = value;
  }

  public getName() {
    return (this.element as HTMLInputElement).name;
  }

  public getValue() {
    return (this.element as HTMLInputElement).value;
  }

  public onFocus = (evt: Event): void => {
    validate(evt);
  };

  public onBlur = (evt: Event): void => {
    validate(evt);
  };

  render() {
    return this.compile(template, { ...this.props });
  }
}
