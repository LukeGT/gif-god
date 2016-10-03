import { Dispatcher } from 'flux'

class EventDispatcher {

  constructor() {
    this.dispatcher = new Dispatcher();
  }

  on(event, callback) {
    return this.dispatcher.register( (payload) => {
      if (payload.event === event) {
        callback(payload.data);
      }
    });
  }

  off(id) {
    return this.dispatcher.unregister(id)
  }

  fire(event, data) {
    this.dispatcher.dispatch({ event, data });
  }
}

const event_dispatcher = new EventDispatcher();

export default event_dispatcher