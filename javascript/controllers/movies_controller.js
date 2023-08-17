import { Controller } from 'stimulus'

export default class extends Controller {
  static targets = ["list", "input"];

  static values = {
    baseUrl: String
  }

  connect() {
    console.log("I am the movies controller");
  }

  searchMovies() {
    const userInput = this.inputTarget.value;

    const url = `${this.baseUrlValue}/?s=${userInput}&apikey=adf1f2d7`;

    fetch(url)
    .then(response => response.json())
    .then((data) => {
      this.listTarget.innerHTML = "";
      const searchResults = data.Search;

      searchResults.forEach((result) => {
        console.log(result);
        const resultTag = `<li class="list-group-item me-3">
          <img src="${result.Poster}" alt="${result.Title}" width=100 height=90%>
          <p>${result.Title}</p>
        </li>`

        this.listTarget.insertAdjacentHTML("beforeend", resultTag);
      })
    })
  }


  // CÓDIGO REFATORADO:

  // displayMovies(data) {
  //   this.listTarget.innerHTML = "";
  //   const searchResults = data.Search;

  //   searchResults.forEach((result) => {
  //     const resultTag = `<li class="list-group-item me-3">
  //       <img src="${result.Poster}" alt="${result.Title}" width=100 height=90%>
  //       <p>${result.Title}</p>
  //     </li>`

  //     this.listTarget.insertAdjacentHTML("beforeend", resultTag);
  //   })
  // }

  // fetchMovies(input) {
    // fetch(`http://www.omdbapi.com/?s=${input}&apikey=adf1f2d7`)
    // .then(response => response.json())
    // .then(data => this.displayMovies(data))
  // }

  // searchMovies() {
  //   const userInput = this.inputTarget.value;

  //   this.fetchMovies(userInput);
  // }
}
