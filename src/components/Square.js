import React,{useContext} from 'react';

import ThemeContext from '../config/themes.js';

import PropTypes from 'prop-types';

const Square = (props) => {

  const theme = useContext(ThemeContext);

  const handleClick = (e)=>{
    if(props.symbol === '-'){
      props.handleClick(e.target.getAttribute('id'))
    }
  }

  return (
    <div id={props.id} className="square" onClick={handleClick} style={{backgroundColor:theme.color1,color:theme.color3}}>
      {props.symbol}
    </div>
  );
}



Square.propTypes = {
  symbol: PropTypes.string,
  id : PropTypes.number
};

// Same approach for defaultProps too
Square.defaultProps = {
  symbol: '-'
};


export default Square;
