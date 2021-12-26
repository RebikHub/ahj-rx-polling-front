import { Observable } from 'rxjs';

export default class Polling {
  constructor(server) {
    this.server = server;
    this.messagees = document.querySelector('.messages');
    this.message = null;
    this.obs = {
      next(v) {
        return v;
      },
    };
  }

  async init() {
    const ajaxData = await this.server.ajaxRx();
    console.log(ajaxData);
    // ajaxData.subscribe({
    //   next(v) {
    //     this.message = v;
    //     console.log(v);
    //   },
    //   complete() {
    //     console.log('completed');
    //   },
    //   error(err) {
    //     console.log(err);
    //   },
    // });
    ajaxData.subscribe(this.obs);
    console.log(this.obs);
  }

  render(message) {
    const newMessage = document.createElement('div');
    const email = document.createElement('div');
    const subject = document.createElement('div');
    const time = document.createElement('div');
    newMessage.classList.add('.new-message');
    newMessage.appendChild(email);
    newMessage.appendChild(subject);
    newMessage.appendChild(time);
    this.messagees.appendChild(newMessage);
    console.log(message);
  }
}
