const player = () => {};

(function () {
  let gameBoard = {
    board: ["", "", "", "", "", "", "", "", ""],
    playerTurn: false,
    gameOver: false,
    moveCounter: 0,
    init: function () {
      this.cacheDom();
      this.bindEvents();
      this.render();
      this.checkWin();
    },
    // handles all targeting of DOM elements //
    cacheDom: function () {
      this.start = document.querySelector(".start");
      this.restart = document.querySelector(".restart");
      this.gameBoard = document.querySelector(".board");
      this.gridItem = document.querySelectorAll(".grid-item");
      this.display = document.querySelector("h2");
    },
    // handles the board display //
    render: function () {
      for (let i = 0; i < this.board.length; i++) {
        this.gridItem[i].textContent = this.board[i];
      }
    },
    // handles DOM events //
    bindEvents: function () {
      this.gridItem.forEach((box) => {
        box.addEventListener("click", this.markBox.bind(this));
      });
      this.restart.addEventListener("click", this.resetBoard.bind(this));
    },

    markBox: function (e) {
      let mark = e.currentTarget.dataset.index;

      if (this.board[mark] !== "") {
        return;
      } else if (this.gameOver === true) {
        return;
      } else if (this.playerTurn === false) {
        this.board[mark] = "X";
        this.moveCounter++;
        this.display.textContent = "Player O turn";
        this.playerTurn = true;
      } else if (this.playerTurn === true) {
        this.board[mark] = "O";
        this.moveCounter++;
        this.display.textContent = "Player X turn";
        this.playerTurn = false;
      }
      this.render();
      this.winCondition();
      this.checkWin();
    },
    winCondition: function () {
      const checkIndices = [
        [0, 1, 2],
        [0, 3, 6],
        [0, 4, 8],
        [1, 4, 7],
        [2, 5, 8],
        [3, 4, 5],
        [6, 7, 8],
        [6, 4, 2],
      ];

      checkIndices.forEach((index) => {
        let a = index[0];
        let b = index[1];
        let c = index[2];

        if (
          this.board[a] != "" &&
          this.board[a] == this.board[b] &&
          this.board[b] == this.board[c]
        ) {
          this.gameOver = true;
        }
      });
    },
    checkWin: function () {
      if (this.gameOver === true) {
        if (this.playerTurn) {
          this.display.textContent = "Player X Wins!";
        } else {
          this.display.textContent = "Player O Wins!";
        }
      } else if (this.moveCounter === 9) {
        this.display.textContent = "Tie Game";
        this.gameOver = true;
      }
    },
    resetBoard: function () {
      (this.board = ["", "", "", "", "", "", "", "", ""]),
        (this.playerTurn = false),
        (this.gameOver = false),
        (this.moveCounter = 0);
      this.display.textContent = "";
      this.render();
    },
  };

  gameBoard.init();
})();
