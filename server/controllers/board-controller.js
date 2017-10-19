let store = require('../store/store');

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

const boardController = {
  createBoard: (req, res, next) => {
    const newStore = Object.assign({}, store);
    shuffle(newStore[req.params.name].ballChoices);
    const tempBallChoices = Array.from(newStore[req.params.name].ballChoices);
    for (let i = 0; i < 25; ++i) {
      newStore[req.params.name].board.push(tempBallChoices.pop());
    }
    shuffle(newStore[req.params.name].ballChoices);
    store = newStore;
    req.locals.board = store[req.params.name].board;
    next();
  },

  getCurrentBoard: (req, res, next) => {
    const currentBoard = store[req.params.name].board;
    req.locals.board = currentBoard;
    next();
  },

  getNextBall: (req, res, next) => {
    const newStore = Object.assign({}, store);
    const nextBall = newStore[req.params.name].ballChoices.pop();
    store = newStore;
    req.locals.ball = nextBall;
    next();
  },

  checkWin: (req, res, next) => {
    // write an algo to check if the request body has a winner
    next();
  },

  resetBoard: (req, res, next) => {
    const newStore = Object.assign({}, store);
    newStore[req.params.name] = {
      ballChoices: Array.from({ length: 100 }, (v, i) => i + 1),
      board: [],
    }
    store = newStore;
    next();
  }
};

module.exports = boardController;
