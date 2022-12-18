import Block from "./block";
import {StoreEvents} from "../components/shared/enums/store.enum";
import isEqual from "./isEqual";
import store from './store';
import {State} from "../components/shared/interfaces/state.interface";


export function withStore(mapStateToProps: (state: State) => State) {
  return function wrap(Component: typeof Block) {
    let previousState: any = null;

    return class WithStore extends Component {
      constructor(props: any) {
        previousState = mapStateToProps(store.getState());

        super({ ...props, ...previousState });

        store.on(StoreEvents.Updated, () => {
          const stateProps = mapStateToProps(store.getState());

          if (isEqual(previousState, stateProps)) {
            return;
          }

          this.setProps({ ...stateProps });
        });
      }
    };
  };
}
