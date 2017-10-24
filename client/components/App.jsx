import React from 'react';
import { connect } from 'react-redux';

import BoardContainer from './BoardContainer/BoardContainer.jsx';

import * as actions from '../action-creators/action-creators.jsx';

const App = props =>
  <div className="layout">
    <h1>{props.name}'s Bingo</h1>
    <BoardContainer
      board={props.board}
      balls={props.balls}
      name={props.name}
      win={props.win}
      createBoard={props.createBoard}
      getBoard={props.getBoard}
      getBall={props.getBall}
      checkWin={props.checkWin}
      setName={props.setName}
    />
  </div>;

function mapStateToProps(state) {
  return {
    board: state.get('board'),
    balls: state.get('numbersDrawn'),
    name: state.get('name'),
    win: state.get('win'),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    createBoard: payload => dispatch(actions.createBoard(payload)),
    getBoard: payload => dispatch(actions.getBoard(payload)),
    getBall: payload => dispatch(actions.getBall(payload)),
    checkWin: payload => dispatch(actions.getBall(payload)),
    setName: payload => dispatch(actions.setName(payload))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
