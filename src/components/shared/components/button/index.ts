import template from "./button.hbs";
import {IButtonProps} from "../../interfaces/button.interface";
import {Block} from '../../../../utils/block';

export class Button extends Block<IButtonProps> {
  constructor(props: IButtonProps) {
    super({ type: 'button', ...props });
  }

    render() {
        return this.compile(template, { ...this.props });
    }
}
