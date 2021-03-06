import React from 'React';
import { connect } from 'react-redux';

const BoardMenu = props =>
  <div>
    <input type="text" placeholder="Your Game Name" onKeyUp={e => props.setName({ name: e.target.value })} />
    <button type="button" onClick={() => props.createBoard({ name: props.name })}>Create a new board!</button>
    <button type="button" onClick={() => props.getBoard({ name: props.name })}>Load your last board</button>
    <button type="button" onClick={() => props.getBall({ name: props.name })}>Get Your Next Ball</button>
    <button type="button" onClick={() => props.checkWin({ name: props.name, board: props.board })}>Check if you won!</button>
  </div>;

export default BoardMenu
