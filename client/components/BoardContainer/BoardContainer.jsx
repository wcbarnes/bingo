import React from 'React';
import { connect } from 'react-redux';

import Board from '../Board/Board.jsx';
import BoardMenu from '../BoardMenu/BoardMenu.jsx'

const BoardContainer = props =>
  <div>
    <Board
      board={props.board}
      balls={props.balls}
    />
    <BoardMenu
      name={props.name}
      board={props.board}
      createBoard={props.createBoard}
      getBoard={props.getBoard}
      getBall={props.getBall}
      checkWin={props.checkWin}
      setName={props.setName}
    />
  </div>;

export default BoardContainer;
