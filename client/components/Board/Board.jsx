import React from 'React';
import { connect } from 'react-redux';

import Tile from '../Tile/Tile.jsx';

const Board = props =>
  <div>
    {props.board.map((val) => <Tile val={val} />)}
  </div>;

export default Board
