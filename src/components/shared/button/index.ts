import Block from "../../../utils/block";
import template from "./button.hbs";
import {IButtonProps} from "../interfaces/button.interface";

export class Button extends Block<IButtonProps> {
    constructor(props: IButtonProps) {
        super( {type: 'button', ...props});
    }

    render() {
        return this.compile(template, {...this.props});
    }
}
