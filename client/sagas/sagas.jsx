import { takeLatest } from 'redux-saga';
import axios from 'axios';
import { put } from 'redux-saga/effects';

const CREATE_BOARD = 'localhost:8090/board/';
const GET_BOARD = 'localhost:8090/board/'
const GET_BALL = 'localhost:8090/ball/'
const CHECK_WIN = 'localhost:8090/win/'

// I initially had a closure for all of these functions, but it was dificult to read. These are easy to read but definitely not DRY.

const createBoardRequest = payload => {
  return axios.post(`${CREATE_BOARD}${payload.name}`)
    .then(res => response.data.board)
    .catch(error => console.log(error));
}

const getBoardRequest = payload => {
  return axios.get(`${GET_BOARD}${payload.name}`)
    .then(res => response.data.board)
    .catch(error => console.log(error));
}

const getBallRequest = payload => {
  return axios.get(`${GET_BALL}${payload.name}`)
    .then(res => response.data.ball)
    .catch(error => console.log(error));
}

const checkWinRequest = payload => {
  return axios.post(`${CHECK_WIN}${payload.name}`, {
      board: payload.board
    })
    .then(res => response.data.win)
    .catch(error => console.log(error));
}

function* createBoard(payload) {
  try {
    const board = yield createBoardRequest(payload);
    yield put({ type: 'CREATE_BOARD_SUCCESS', payload: board });
  } catch (error) {
    yield put({ type: 'CREATE_BOARD_FAILURE' });
  }
}

function* getBoard(payload) {
  try {
    const board = yield getBoardRequest(payload);
    yield put({ type: 'GET_BOARD_SUCCESS', payload: board });
  } catch (error) {
    yield put({ type: 'GET_BOARD_FAILURE' });
  }
}

function* getBall(payload) {
  try {
    const ball = yield getBallRequest(payload);
    yield put({ type: 'GET_BALL_SUCCESS', payload: ball });
  } catch (error) {
    yield put({ type: 'GET_BALL_FAILURE' });
  }
}

function* checkWin(payload) {
  try {
    const win = yield checkWinRequest(payload);
    yield put({ type: 'CHECK_WIN_SUCCESS', payload: win });
  } catch (error) {
    yield put({ type: 'CHECK_WIN_FAILURE' });
  }
}

function* watchCreateBoard() {
  yield takeLatest('CREATE_BOARD', createBoard);
}

function* watchGetBoard() {
  yield takeLatest('GET_BOARD', getBoard);
}

function* watchGetBall() {
  yield takeLatest('GET_BALL', getBall);
}

function* watchCheckWin() {
  yield takeLatest('CHECK_WIN', checkWin);
}

export default function* rootSaga() {
  yield [
    watchCreateBoard(),
    watchGetBoard(),
    watchGetBall(),
    watchCheckWin()
  ];
}
