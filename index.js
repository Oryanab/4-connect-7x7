"use strict";

// regular variables
class Model {
  constructor() {
    this.currentPlayer = 1;
    //this.winneingArrays = [
    //   [0, 1, 2, 3],
    //   [41, 40, 39, 38],
    //   [7, 8, 9, 10],
    //   [34, 33, 32, 31],
    //   [14, 15, 16, 17],
    //   [27, 26, 25, 24],
    //   [21, 22, 23, 24],
    //   [20, 19, 18, 17],
    //   [28, 29, 30, 31],
    //   [13, 12, 11, 10],
    //   [35, 36, 37, 38],
    //   [6, 5, 4, 3],
    //   [0, 7, 14, 21],
    //   [41, 34, 27, 20],
    //   [1, 8, 15, 22],
    //   [40, 33, 26, 19],
    //   [2, 9, 16, 23],
    //   [39, 32, 25, 18],
    //   [3, 10, 17, 24],
    //   [38, 31, 24, 17],
    //   [4, 11, 18, 25],
    //   [37, 30, 23, 16],
    //   [5, 12, 19, 26],
    //   [36, 29, 22, 15],
    //   [6, 13, 20, 27],
    //   [35, 28, 21, 14],
    //   [0, 8, 16, 24],
    //   [41, 33, 25, 17],
    //   [7, 15, 23, 31],
    //   [34, 26, 18, 10],
    //   [14, 22, 30, 38],
    //   [27, 19, 11, 3],
    //   [35, 29, 23, 17],
    //   [6, 12, 18, 24],
    //   [28, 22, 16, 10],
    //   [13, 19, 25, 31],
    //   [21, 15, 9, 3],
    //   [20, 26, 32, 38],
    //   [36, 30, 24, 18],
    //   [5, 11, 17, 23],
    //   [37, 31, 25, 19],
    //   [4, 10, 16, 22],
    //   [2, 10, 18, 26],
    //   [39, 31, 23, 15],
    //   [1, 9, 17, 25],
    //   [40, 32, 24, 16],
    //   [9, 17, 25, 33],
    //   [8, 16, 24, 32],
    //   [11, 17, 23, 29],
    //   [12, 18, 24, 30],
    //   [1, 2, 3, 4],
    //   [5, 4, 3, 2],
    //   [8, 9, 10, 11],
    //   [12, 11, 10, 9],
    //   [15, 16, 17, 18],
    //   [19, 18, 17, 16],
    //   [22, 23, 24, 25],
    //   [26, 25, 24, 23],
    //   [29, 30, 31, 32],
    //   [33, 32, 31, 30],
    //   [36, 37, 38, 39],
    //   [40, 39, 38, 37],
    //   [7, 14, 21, 28],
    //   [8, 15, 22, 29],
    //   [9, 16, 23, 30],
    //   [10, 17, 24, 31],
    //   [11, 18, 25, 32],
    //   [12, 19, 26, 33],
    //   [13, 20, 27, 34],
    //   [48, 41, 34, 27],
    //   [47, 40, 33, 26],
    //   [46, 39, 32, 25],
    //   [45, 38, 31, 24],
    //   [44, 37, 30, 23],
    //   [43, 36, 29, 22],
    //   [42, 35, 28, 21],
    //   [42, 43, 44, 45],
    //   [43, 44, 45, 46],
    //   [44, 45, 46, 47],
    //   [45, 46, 47, 48],
    //   [42, 36, 30, 24],
    //   [43, 37, 31, 25],
    //   [44, 38, 32, 26],
    //   [45, 39, 33, 27],
    //   [48, 40, 32, 24],
    //   [47, 39, 31, 23],
    //   [46, 38, 30, 22],
    //   [45, 37, 29, 21],
    // ];
  }
}

// build html structure
class View {
  constructor() {
    //this.squares = document.querySelectorAll(".grid div");
    this.result = this.getElement("#results");
    this.resetBtn = this.getElement("#reset");
    this.displayCurrentPlayer = this.getElement("#current-player");
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
}

// append all functionality
class Controller {
  #model;
  #view;
  constructor(model, view) {
    this.#model = model;
    this.#view = view;
    this.generateGame(this.#view.getElementAll(".grid div"));
    this.restartGame(this.#view.resetBtn);
  }

  generateGame(squares) {
    for (let i = 0; i < squares.length; i++) {
      squares[i].addEventListener("click", (e) => {
        if (squares[i + 7].classList.contains("taken")) {
          if (
            this.#model.currentPlayer === 1 &&
            !squares[i].classList.contains("taken")
          ) {
            squares[i].classList.add("taken");
            squares[i].style.backgroundColor = "red";
            squares[i].classList.add("player-one");
            this.#model.currentPlayer = 2;
            this.#view.displayCurrentPlayer.textContent = 2;
            this.checkBoard(i);
          } else if (
            this.#model.currentPlayer === 2 &&
            !squares[i].classList.contains("taken")
          ) {
            squares[i].classList.add("taken");
            squares[i].style.backgroundColor = "blue";
            squares[i].classList.add("player-two");
            this.#model.currentPlayer = 1;
            this.#view.displayCurrentPlayer.textContent = 1;
            this.checkBoard(i);
          }
        } else if (
          squares[i + 7].classList.contains("taken") &&
          !this.checkIfallSquareChecked(this.#view.squares)
        ) {
          this.#view.textContent = " no winner";
        }
      });
    }
  }

  checkIfallSquareChecked(squares) {
    for (let i = 0; i < 43; i++) {
      if (!squares[i].classList.contains("taken")) {
        return false;
      }
    }
    return true;
  }

  //   checkBoard(squares, winneingArrays) {
  //     for (let row of winneingArrays) {
  //       const row1 = squares[row[0]];
  //       const row2 = squares[row[1]];
  //       const row3 = squares[row[2]];
  //       const row4 = squares[row[3]];
  //       if (
  //         row1.classList.contains("player-one") &&
  //         row2.classList.contains("player-one") &&
  //         row3.classList.contains("player-one") &&
  //         row4.classList.contains("player-one")
  //       ) {
  //         this.#view.result.textContent = " Player 1";
  //         this.endGame(this.#view.getElementAll(".grid div"));
  //       } else if (
  //         row1.classList.contains("player-two") &&
  //         row2.classList.contains("player-two") &&
  //         row3.classList.contains("player-two") &&
  //         row4.classList.contains("player-two")
  //       ) {
  //         this.#view.result.textContent = " Player 2";
  //         this.endGame(this.#view.getElementAll(".grid div"));
  //       }
  //     }
  //   }

  endGame(squares) {
    for (let i = 0; i < squares.length; i++) {
      squares[i].classList.add("taken");
    }
    console.log("game has finished");
  }

  restartGame(btn) {
    btn.addEventListener("click", (e) => {
      let squares = document.querySelectorAll(".grid div");
      for (let i = 0; i < 49; i++) {
        for (let cls of squares[i].classList) {
          squares[i].classList.remove(cls);
        }
        for (let cls of squares[i].classList) {
          squares[i].classList.remove(cls);
        }
        squares[i].style.backgroundColor = "white";
      }
      console.log("game has started");
      this.#view.result.textContent = "";
    });
  }

  // Check Winner Section:

  checkBoard(indexSelected) {
    this.checkBoardHorizontalUp(indexSelected);
    this.checkBoardHorizontalDown(indexSelected);
    this.checkBoardVerticalUp(indexSelected);
    this.checkBoardVerticalDown(indexSelected);
    this.checkBoardCrossUp(indexSelected);
    this.checkBoardCrossDown(indexSelected);
  }

  returnClass(squareSelected) {
    if (squareSelected) {
      if (squareSelected.classList.contains("player-one")) {
        return "player-one";
      } else if (squareSelected.classList.contains("player-two")) {
        return "player-two";
      } else {
        return false;
      }
    } else {
      return false;
    }
  }

  equalizedFourElements(a, b, c, d) {
    if (a === b && a === c && a === d) {
      return true;
    } else {
      return false;
    }
  }

  checkBoardHorizontalUp(indexSelected) {
    let squares = document.querySelectorAll(".grid div");
    let indexB = indexSelected + 1;
    let indexC = indexB + 1;
    let indexD = indexC + 1;
    if (
      this.equalizedFourElements(
        this.returnClass(squares[indexSelected]),
        this.returnClass(squares[indexB]),
        this.returnClass(squares[indexC]),
        this.returnClass(squares[indexD])
      )
    ) {
      document.querySelector("#results").textContent =
        this.returnClass(squares[indexSelected]) + " wins!";
      this.endGame(squares);
    } else {
      return;
    }
  }

  checkBoardHorizontalDown(indexSelected) {
    let squares = document.querySelectorAll(".grid div");
    let indexB = indexSelected - 1;
    let indexC = indexB - 1;
    let indexD = indexC - 1;
    if (
      this.equalizedFourElements(
        this.returnClass(squares[indexSelected]),
        this.returnClass(squares[indexB]),
        this.returnClass(squares[indexC]),
        this.returnClass(squares[indexD])
      )
    ) {
      document.querySelector("#results").textContent =
        this.returnClass(squares[indexSelected]) + " wins!";
      this.endGame(squares);
    } else {
      return;
    }
  }

  checkBoardVerticalUp(indexSelected) {
    let squares = document.querySelectorAll(".grid div");
    let indexB = indexSelected + 7;
    let indexC = indexB + 7;
    let indexD = indexC + 7;
    if (
      this.equalizedFourElements(
        this.returnClass(squares[indexSelected]),
        this.returnClass(squares[indexB]),
        this.returnClass(squares[indexC]),
        this.returnClass(squares[indexD])
      )
    ) {
      document.querySelector("#results").textContent =
        this.returnClass(squares[indexSelected]) + " wins!";
      this.endGame(squares);
    } else {
      return;
    }
  }

  checkBoardVerticalDown(indexSelected) {
    let squares = document.querySelectorAll(".grid div");
    let indexB = indexSelected - 7;
    let indexC = indexB - 7;
    let indexD = indexC - 7;
    if (
      this.equalizedFourElements(
        this.returnClass(squares[indexSelected]),
        this.returnClass(squares[indexB]),
        this.returnClass(squares[indexC]),
        this.returnClass(squares[indexD])
      )
    ) {
      document.querySelector("#results").textContent =
        this.returnClass(squares[indexSelected]) + " wins!";
      this.endGame(squares);
    } else {
      return;
    }
  }

  checkBoardCrossUp(indexSelected) {
    let squares = document.querySelectorAll(".grid div");
    let indexB = indexSelected + 6;
    let indexC = indexB + 6;
    let indexD = indexC + 6;
    if (
      this.equalizedFourElements(
        this.returnClass(squares[indexSelected]),
        this.returnClass(squares[indexB]),
        this.returnClass(squares[indexC]),
        this.returnClass(squares[indexD])
      )
    ) {
      document.querySelector("#results").textContent =
        this.returnClass(squares[indexSelected]) + " wins!";
      this.endGame(squares);
    } else {
      return;
    }
  }

  // checkBoardCrossUp(45, 39, 33, 27);

  checkBoardCrossDown(indexSelected) {
    let squares = document.querySelectorAll(".grid div");
    let indexB = indexSelected + 8;
    let indexC = indexB + 8;
    let indexD = indexC + 8;
    if (
      this.equalizedFourElements(
        this.returnClass(squares[indexSelected]),
        this.returnClass(squares[indexB]),
        this.returnClass(squares[indexC]),
        this.returnClass(squares[indexD])
      )
    ) {
      document.querySelector("#results").textContent =
        this.returnClass(squares[indexSelected]) + " wins!";
      this.endGame(squares);
    } else {
      return;
    }
  }
}

const app = new Controller(new Model(), new View());
