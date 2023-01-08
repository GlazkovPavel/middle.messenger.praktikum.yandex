import {Block} from "./block";

describe('Block', () => {
  class Component extends Block<{}> {
    render() {
      return new DocumentFragment();
    }
  }

  it('test', () => {
    const instance = new Component({})
    console.log(instance);
  });
})
