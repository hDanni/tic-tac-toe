const player = () => {};

(function () {
  let gameBoard = {
    board: ["", "", "", "", "", "", "", "", ""],
    // board: [
    //   ["", "", ""],
    //   ["", "", ""],
    //   ["", "", ""],
    // ],
    // board: [
    //   ["0", "1", "2"],
    //   ["3", "4", "5"],
    //   ["6", "7", "8"],
    // ],
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
      // let data = {
      //   board: this.board,
      // };
      // for (let i = 0; i < data.board.length; i++) {
      //   for (let j = 0; j < data.board[i].length; j++) {
      //     this.gridItem[this.gridCounter].textContent = data.board[i][j];
      //   }
      // }
      for (let i = 0; i < this.board.length; i++) {
        this.gridItem[i].textContent = this.board[i];
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
      this.turnCounter++;
      this.render();
      this.winCondition();
    },
    winCondition: function () {
      const checkIndices = [
        [0, 1, 2],
        [0, 3, 6],
        [0, 4, 8],
        [0, 4, 8],
        [1, 4, 7],
        [2, 5, 8],
        [3, 4, 5],
        [6, 7, 8],
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
          console.log("Player Wins");
        } else {
          console.log("Tie Game");
        }
      });
    },
  };

  gameBoard.init();
})();
