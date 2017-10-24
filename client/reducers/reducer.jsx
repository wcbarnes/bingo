import { Map, List } from 'immutable';

const INITIAL_STATE = Map({
  board: List(Array.from({ length: 25 }, () => '-')),
  numbersDrawn: List([]),
  name: 'guest',
  win: false
});

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'CREATE_BOARD_SUCCESS':
      return state.merge({
        board: action.payload
      });

    case 'GET_BOARD_SUCCESS':
      return state.merge({
        board: action.payload
      });

    case 'GET_BALL_SUCCESS':
      return state.updateIn(
        ['numbersDrawn'],
        numbers => numbers.push(action.payload));

    case 'SET_NAME':
      return state.set('name', action.payload.name);

    case 'CHECK_WIN_SUCCESS':
      return state.merge({
        win: action.payload
      });

    default: return state;
  }
}
