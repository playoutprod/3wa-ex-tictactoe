import React from 'react';
import ReactDOM from 'react-dom';
import './css/game.css';
import Game from './components/Game';
import ThemeContext from './config/themes.js';

ReactDOM.render(
    <ThemeContext.Provider value={ThemeContext._currentValue.by}>
    <Game/>
    </ThemeContext.Provider>,
  document.getElementById('root')
);
