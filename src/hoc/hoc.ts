import Block from "../utils/block";
import {StoreEvents} from "../components/shared/enums/store.enum";
import isEqual from "../utils/isEqual";
import store from '../utils/store';
import {IState} from "../components/shared/interfaces/state.interface";


// export function withStore(mapStateToProps: (state: IState) => IState) {
//   return function wrap(Component: typeof Block) {
//     let previousState: any = null;
//
//     return class WithStore extends Component {
//       constructor(props: any) {
//         previousState = mapStateToProps(store.getState());
//
//         super({ ...props, ...previousState });
//
//         store.on(StoreEvents.Updated, () => {
//           const stateProps = mapStateToProps(store.getState());
//
//           if (isEqual(previousState, stateProps)) {
//             return;
//           }
//
//           this.setProps({ ...stateProps });
//         });
//       }
//     };
//   };
// }

const withStore =
  (mapStateToProps: (state: IState) => Record<string, unknown>) => (Component: typeof Block) => {
    let state: Record<string, unknown>;

    return class extends Component {
      constructor(props: Record<string, unknown>) {
        state = mapStateToProps(store.getState());

        super({ ...props, ...state });

        store.on(StoreEvents.Updated, () => {
          const newState = mapStateToProps(store.getState());

          if (!isEqual(state, newState)) {
            this.setProps({
              ...newState,
            });
          }
        });
      }
    };
  };

export default withStore;
