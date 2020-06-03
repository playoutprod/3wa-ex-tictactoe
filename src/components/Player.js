import {useRef} from 'react';

export default (playerName,symbol) => {

  const plays = useRef([]);

  const addPlay = (play) =>{

    if(play !== null){
      plays.current.push(play);
    }else{
      plays.current = [];
    }
  }
  return({
    "symbol" : symbol,
    "name" : playerName,
    "addPlay" : addPlay
  })
}
