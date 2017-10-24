const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const logger = require('morgan');

const app = express();

const boardController = require('./controllers/board-controller');

const ENV = app.get('env');

if (ENV === 'development') app.use(logger('dev'));

let PORT = 8090;


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use((req, res, next) => {
  req.locals = {};
  next();
});

app.use('/', express.static(`./dist`));

app.post('/board/:name',
  boardController.resetBoard,
  boardController.createBoard,
  (req, res) => {
    res.status(201).send({ board: req.locals.board });
  }
);

app.get('/board/:name',
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
