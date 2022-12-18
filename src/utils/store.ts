import {EventBus} from "./event-bus";
import {set} from "./helpers";
import {StoreEvents} from "../components/shared/enums/store.enum";

class Store extends EventBus {
  private state: any = {};

  public set(path: string, value: unknown) {
    set(this.state, path, value);

    this.emit(StoreEvents.Updated, this.getState());
  };

  public getState() {
    return this.state;
  }
}

const store = new Store()

export default store;
