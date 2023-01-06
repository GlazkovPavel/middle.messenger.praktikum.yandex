import {StoreEvents} from "../components/shared/enums/store.enum";
import isEqual from "../utils/isEqual";
import store from '../utils/store';
import {IState} from "../components/shared/interfaces/state.interface";
import {Block} from '../utils/block';

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
