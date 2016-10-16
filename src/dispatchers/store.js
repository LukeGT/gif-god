import { Dispatcher } from 'flux'

class StoreDispatcher {

  constructor() {
    this.dispatcher = new Dispatcher();
    this.data = {};
  }

  register(callback) {
    return this.dispatcher.register(callback);
  }

  register_component(component) {
    return this.register(() => setTimeout(() => component.forceUpdate()));
  }

  unregister(id) {
    return this.dispatcher.unregister(id);
  }

  change(modifier) {
    if (modifier(this.data) !== false) {
      return this.dispatcher.dispatch(this.data);
    }
  }

  change_later(modifier) {
    setTimeout(() => this.change(modifier));
  }
}

const store_dispatcher = new StoreDispatcher();

export default store_dispatcher;