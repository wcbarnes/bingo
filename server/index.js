const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const boardController = require('./controllers/board-controller');

let PORT = 8080;

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use((req, res, next) => {
  req.locals = {};
  next();
});

app.get('/', (req, res) => {
  res.sendFile(path.join(`${__dirname}/../index.html`));
});

app.get('/board/:name',
  boardController.resetBoard,
  boardController.createBoard,
  (req, res) => {
    res.send({ board: req.locals.board });
  }
);

app.get('/currentboard/:name',
  boardController.getCurrentBoard,
  (req, res) => {
    res.send({ board: req.locals.board });
  }
);

app.get('/ball/:name',
  boardController.getNextBall,
  (req, res) => {
    res.send({ ball: req.locals.ball });
  }
);

app.post('/win/:name',
  boardController.checkWin,
  (req, res) => {
    res.send({});
  }
);

app.listen(PORT, () => {
  console.log(`listening on ${PORT}`);
});


module.exports = app;
