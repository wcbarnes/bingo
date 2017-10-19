const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const logger = require('morgan');

const boardController = require('./controllers/board-controller');

const ENV = app.get('env');

if (ENV === 'development') app.use(logger('dev'));

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

// If in test enviroment do not start the server here
if (ENV !== 'test') app.listen(PORT, () => console.log(`Server running on ${PORT}`));

module.exports = app;
