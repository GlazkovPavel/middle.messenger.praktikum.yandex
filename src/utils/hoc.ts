import Block from "./block";
import {Indexed} from "./helpers";
import {StoreEvents} from "../components/shared/enums/store.enum";
import isEqual from "./isEqual";
import store from './store';


export function withStore(mapStateToProps: (state: Indexed) => Indexed) {
  return function wrap(Component: typeof Block) {
    let previousState: any = null;

    return class WithStore extends Component {
      constructor(props: any) {
        previousState = mapStateToProps(store.getState());

        super({ ...props, ...previousState });

        store.on(StoreEvents.Updated, () => {
          const stateProps = mapStateToProps(store.getState());

          // previousState = stateProps;
          if (isEqual(previousState, stateProps)) {
            return;
          }

          this.setProps({ ...stateProps });
        });
      }
    };
  };
}
