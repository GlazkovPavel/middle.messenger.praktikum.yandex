import {Block} from "../../../../utils/block";
import template from "./form.hbs";
interface IForm {
  input: Block;
  class: string;
  button: Block;
  events?: {
    submit: (e: SubmitEvent) => void;
  };
}

export class Form extends Block {
  constructor(props: IForm) {
    // const events = {
    //   submit: (e: Event) => onSubmit(e),
    // };
    super({ ...props });
  }

  render() {
    return this.compile(template, { ...this.props });
  }
}
