import React,{useContext} from 'react';
import Board from './Board';
import ThemeContext from '../config/themes.js';

export default (props) => {
  const theme = useContext(ThemeContext);
  return (
    <div className="game" style={{backgroundColor:theme.color2}}>
      <div className="game-board">
        <Board />
      </div>
    </div>
  );
}
