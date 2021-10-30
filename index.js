"use strict";

class Model {
  constructor() {}
}

class View {
  constructor() {}

  createElement(tag, className) {
    const element = document.createElement(tag);
    if (className) element.classList.add(className);
    return element;
  }

  getElement(selector) {
    const element = document.querySelector(selector);
    return element;
  }
}

class Controller {
  #model;
  #view;
  constructor(model, view) {}
}

const app = new Controller(new Model(), new View());
