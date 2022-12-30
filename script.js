const player = () => {};

(function () {
  let gameBoard = {
    board: ["0", "1", "2", "3", "4", "5", "6", "7", "8"],
    init: function () {
      this.cacheDom();
      this.render();
    },
    cacheDom: function () {
      this.start = document.querySelector(".start");
      this.restart = document.querySelector(".restart");
      this.gameBoard = document.querySelector(".board");
      this.gridItem = document.querySelectorAll(".grid-item");
    },
    render: function () {
      let data = {
        board: this.board,
      };
      for (i = 0; i < data.board.length; i++) {
        this.gridItem[i].textContent = data.board[i];
      }
    },
    displayController: function () {},
  };

  gameBoard.init();
})();
