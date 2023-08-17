import { Application, Controller } from 'stimulus';
window.Stimulus = Application.start()

import DisableButtonController from "./controllers/disable_button_controller.js"
Stimulus.register("disable-button", DisableButtonController)

import MoviesController from "./controllers/movies_controller.js"
Stimulus.register("movies", MoviesController)






















// JS VANILLA
// const button = document.querySelector("#click-me");
// // const button = document.getElementById("click-me");

// button.addEventListener("click", (event) => {
//   console.log("o botão foi clicado!");

//   event.currentTarget.classList.remove('btn-primary');
//   event.currentTarget.classList.add('btn-danger', 'disabled');
//   event.currentTarget.innerText = 'Be careful...';

//   // event.currentTarget.classList.add("disabled");
// })
