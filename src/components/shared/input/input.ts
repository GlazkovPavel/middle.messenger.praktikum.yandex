import template from './input.hbs';
import Block from "../../../utils/block";
import {IInputProps} from "../interfaces/input.interface";

export class Input extends Block<IInputProps> {
  constructor(props: IInputProps) {
    super(props);
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

  render() {
    return this.compile(template, { ...this.props });
  }
}
