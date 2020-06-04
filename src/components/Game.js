import React,{useState} from 'react';
import Board from './Board';
import ThemeContext from '../config/themes.js';
import Switch from './Switch'


export default (props) => {

  const [theme,setTheme] = useState(0)

  const changeTheme = (value)=>{
    setTheme(value === true ? 1 : 0);
  }

  return (
    <ThemeContext.Provider value={ThemeContext._currentValue[theme]}>
    <div className="game" style={{backgroundColor:ThemeContext._currentValue[theme].color2}}>
      <div className="game-board">
        <Board />
        <Switch onChange={changeTheme}/>
      </div>
    </div>
    </ThemeContext.Provider>
  );
}
