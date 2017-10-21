import { Map, List } from 'immutable';

const INITIAL_STATE = Map({});

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    default: return state;
  }
}
