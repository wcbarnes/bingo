export function createBoard(payload) {
  return {
    type: 'CREATE_BOARD',
    payload: payload,
  };
}

export function getBoard(payload) {
  return {
    type: 'GET_BOARD',
    payload: payload,
  };
}

export function getBall(payload) {
  return {
    type: 'GET_BALL',
    payload: payload,
  };
}

export function checkWin(payload) {
  return {
    type: 'CHECK_WIN',
    payload: payload,
  };
}

export function setName(name) {
  return {
    type: 'SET_NAME',
    payload: name,
  }
}
