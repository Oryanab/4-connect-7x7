"use strict";
const allArrays = require("./possibiloties");

// regular variables
class Model {
  constructor() {
    this.currentPlayer = 1;
    this.winneingArrays = allArrays.winneingArray;
  }
}

// build html structure
class View {
  constructor() {
    const parentGrid = this.getElement(".grid");
    const gameDiv = createElement("div");
    const borderDivs = createElement("div", "taken");
    const squares = this.getElementAll(".grid div");
    const result = this.getElement("#results");
    const resetBtn = this.getElement("#reset");
    const displayCurrentPlayer = this.getElement("#current-player");
  }

  createElement(tag, className) {
    const element = document.createElement(tag);
    if (className) element.classList.add(className);
    return element;
  }

  getElement(selector) {
    const element = document.querySelector(selector);
    return element;
  }

  getElementAll(selector) {
    const element = document.querySelectorAll(selector);
    return element;
  }

  render(gameDiv , borderDivs) {
    for (let createDiv = 0; createDiv < 48; createDiv++) {
      parentGrid.appendChild(gameDiv);
    }
    for (let blockDiv = 0; blockDiv < 8; blockDiv++) {
      parentGrid.appendChild(borderDivs);
    }
  }
}

// append all functionality
class Controller {
  #model;
  #view;
  constructor(model, view) {} 
  render()

}

const app = new Controller(new Model(), new View());
