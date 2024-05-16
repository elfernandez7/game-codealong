

 /*------ Lookup Data / Constants -------*/
const WINNING_COMBOS = [
    [
      { row: 0, col: 0 },
      { row: 0, col: 1 },
      { row: 0, col: 2 },
    ],
    [
      { row: 1, col: 0 },
      { row: 1, col: 1 },
      { row: 1, col: 2 },
    ],
    [
      { row: 2, col: 0 },
      { row: 2, col: 1 },
      { row: 2, col: 2 },
    ],
    [
      { row: 0, col: 0 },
      { row: 1, col: 0 },
      { row: 2, col: 0 },
    ],
    [
      { row: 0, col: 1 },
      { row: 1, col: 1 },
      { row: 2, col: 1 },
    ],
    [
      { row: 0, col: 2 },
      { row: 1, col: 2 },
      { row: 2, col: 2 },
    ],
    [
      { row: 0, col: 0 },
      { row: 1, col: 1 },
      { row: 2, col: 2 },
    ],
    [
      { row: 0, col: 2 },
      { row: 1, col: 1 },
      { row: 2, col: 0 },
    ],
  ];
  
  /*------ Cached Elements -------*/
  const messageEL = document.querySelector('h3.message-header');
const boardEL = document.querySelector('div.board');

boardEL.addEventListener('click', handleBoardClick)
  /*------ State -----*/
  let board, turn, winner;
  
  /*------ Logic -------*/
  init();
  
  function init() {
    board = [
      [null, null, null],
      [null, null, null],
      [null, null, null],
    ];
  
    turn = 'x';
    winner = null;
  
    render();
  }
  
  function render() {
    renderBoard();
    renderMessage();
    renderNewGameButton();
  }

  function renderNewGameButton() {
    if(winner) {
        const newGameButton = document.createElement('button');
        newGameButton.innerText ='Start a New Game?';
        newGameButton.addEventListener('click', init);
        document.body.append(newGameButton);
    } else {
        const newGameButton = document.querySelector('button')
        if(newGameButton) {
            newGameButton.remove('button');
        }
    }
  }

  const selectedSpace = board[row - 1] [col - 1];

  function renderMessage() {
    if( winner=== 'T') {
        messageEL.innerText = `It's A Tie!`; 
    } else if (!winner){
        messageEL.innerText = `${turn}'s move`;
    } else if (turn === 'x'){
        messageEL.innerText = `o won!!!`; 
    } else {
        messageEL.innerText = 'x won!!!';
    }
}


  
  function changeTurn() {
    if (turn === 'x') {
        turn = 'o'
    } else {
        turn = 'x'
    }
  }


  function renderBoard() {
    board.forEach((row, rowIdx) =>{ 
        row.forEach((col, colIdx) => {
            document.getElementById(`r${rowIdx}c${colIdx}`).innerText = col 
            ? col 
            : '' ;
        });
  });
  }

  function handleBoardClick(evt) {
    if (evt.target.classList.contains('cell') && !winner){
        let row = evt.target.id[1];
        let col = evt.target.id[3];

        if (!board[row][col]) {
            board[row][col] = turn;
            checkWinner();
            changeTurn();
            render();
            
    }
  }
}

  function checkWinner() {
    WINNING_COMBOS.forEach((combo) => {
        const pos1 = combo[0];
        const pos2 = combo[1];
        const pos3 = combo[2];
            
                if (
                  board[pos1.row][pos1.col] === board[pos2.row][pos2.col] &&
                  board[pos1.row][pos1.col] === board[pos3.row][pos3.col]
                ) {
                  if (board[pos1.row][pos1.col]) {
                    if(turn === 'x'){
                        winner = 'o';
                    } else {
                        winner ='x';
                    }
                    }
                }
              });
            
              const isEmpty = board.some((row) => row.includes(null));
            
              if (!winner && !isEmpty) {
                winner = 'T';
              }
            } 
        
        
    


 