export default class Polling {
  constructor(server) {
    this.server = server;
    this.messagees = document.querySelector('.messages');
  }

  async init() {
    const ajaxData = await this.server.ajaxRx(this.render());
    console.log(ajaxData);
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
