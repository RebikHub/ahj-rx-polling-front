import { ajax } from 'rxjs/ajax';

export default class Server {
  constructor() {
    this.url = 'http://localhost:3333';
    this.message = null;
  }

  ajaxRx() {
    const obs$ = ajax.getJSON(`${this.url}/messages/unread`);
    return obs$;
  }
}
