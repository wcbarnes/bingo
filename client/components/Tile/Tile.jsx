import React from 'React';
import { connect } from 'react-redux';

const Tile = props =>
  <div>
    <p> {props.val} </p>
  </div>;

export default Tile;
