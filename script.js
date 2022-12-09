const player = () => {

};

(function() {
    let gameBoard = {
        board : ['0','1','2','3','4','5','6','7','8'],
        init: function () {
            this.cacheDom();
            this.render();
            
        },
        cacheDom: function (){
            this.start = document.getElementsByClassName('.start');
            this.restart = document.getElementsByClassName('.restart');
            this.gameBoard = document.getElementById('gameBoard');
            this.gridItem = document.querySelectorAll('.grid-item');
        },
        render: function (){
            let data = {
                board: this.board
            };
        },
        displayController: function (){
            
        }
    };

    gameBoard.init();

})()