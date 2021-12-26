import { ajax } from 'rxjs/ajax';
import { map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

export default class Server {
  constructor() {
    this.url = 'http://localhost:3333';
  }

  async ajaxRx(fn) {
    const obs$ = await ajax.getJSON(`${this.url}/messages/unread`)
    // .pipe(
    //   map((response) => response),
    //   catchError((error) => {
    //     console.log('error: ', error);
    //     return of(error);
    //   }),
    // );

    // obs$
  }
}
