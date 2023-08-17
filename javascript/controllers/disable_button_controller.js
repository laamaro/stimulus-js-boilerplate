import { Controller } from 'stimulus'

export default class extends Controller {

  static targets = ["button", "link"]

  connect() {
    console.log("Uhul");
  }

  disable() {
    // console.log('o botão foi clicado');
    // console.log(this.buttonTarget);
    // console.log(this.linkTarget);

    this.buttonTarget.classList.add('disabled');
    this.buttonTarget.innerText = "Button disabled..."
    // event.currentTarget.classList.add('disabled');
    this.linkTarget.classList.remove('d-none');
  }

  refreshButton() {
    console.log('o link foi clicado');
    this.buttonTarget.classList.remove('disabled');
    this.buttonTarget.innerText = "Click me!";

    this.linkTarget.classList.add('d-none');
  };
}
