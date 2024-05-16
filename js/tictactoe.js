const prompt = require('prompt-sync')



/*------- Look up data - contestants ------*/

/*----- Winning Code --------*/

/*------ State ------*/
let board, turn, winner

/*----- logic -----*/
init();

function init(){
board = [
    [null,null,null],
    [null,null,null],
    [null,null,null],
];


let turn = 'x'
let winner = 'null'

render();
}

function render() {
    renderMessage()
    renderBoard()
}



main();

 function main() {
    while(!winner) {
        renderBoard();
        renderMessage();

        let row = evt.target.id('row');
        let col = getUserInput('column');

        const selectedSpace = board[row - 1] [col - 1];

        if (selectedSpace !== '') {
            console.log(
                "This spot is taken! Choose an empty spot!"
            );
        } else {}
    }
 }