import {htmlButton} from "./button";
import Block from "../../../utils/block";

export class Button extends Block {
    constructor(props: {}) {
        super( {type: 'button', ...props});
    }

    render() {
        return this.compile(htmlButton, {...this.props});
    }
}
