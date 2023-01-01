const player = () => {};

(function () {
  let gameBoard = {
    board: ["0", "1", "2", "3", "4", "5", "6", "7", "8"],
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
      // this.gridItem[i].textContent = "X";
      let mark = e.currentTarget.dataset.index;
      this.board[mark] = "X";
      this.render();
    },
    displayController: function () {},
  };

  gameBoard.init();
})();
