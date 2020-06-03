import React from 'react'
export default ({winner,playsLeft})=>{

  if(winner !== null){
    return(<div className="message">Congratulations ! <br/>{winner}<br/>you've won !!</div>)
  }else if(playsLeft === 0){
    return(<div className="message">
    Sometimes, nobody wins ! It's the participating that counts<br/>
    <div className="quoted">Pierre de Coubertin<br/>
    8 February 1977</div>
    </div>)
  }else{
    return(<div></div>)
  }
}
