const player = () => {};

(function () {
  let gameBoard = {
    board: ["", "", "", "", "", "", "", "", ""],
    // board: ["0", "1", "2", "3", "4", "5", "6", "7", "8"],
    turnCounter: 1,
    init: function () {
      this.cacheDom();
      this.bindEvents();
      this.render();
    },
    // handles all targeting of DOM elements //
    cacheDom: function () {
      this.start = document.querySelector(".start");
      this.restart = document.querySelector(".restart");
      this.gameBoard = document.querySelector(".board");
      this.gridItem = document.querySelectorAll(".grid-item");
    },
    // handles the board display //
    render: function () {
      let data = {
        board: this.board,
      };
      for (i = 0; i < data.board.length; i++) {
        this.gridItem[i].textContent = data.board[i];
      }
    },
    // handles DOM events //
    bindEvents: function () {
      this.gridItem.forEach((box) => {
        box.addEventListener("click", this.markBox.bind(this));
      });
    },

    markBox: function (e) {
      let mark = e.currentTarget.dataset.index;

      if (this.board[mark] !== "") {
        return;
      } else if (!(this.turnCounter % 2 === 0)) {
        this.board[mark] = "X";
      } else if (this.turnCounter % 2 === 0) {
        this.board[mark] = "O";
      }
      this.render();
    },
  };

  gameBoard.init();
})();
