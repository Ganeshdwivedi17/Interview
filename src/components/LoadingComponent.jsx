import React, { useState } from 'react';
import loader from "../images/blob.gif";
import play_img from "../images/play.png";

const LoadingComponent = () => {

  return (
    <div style={{height: '100vh', width: '100%', display: "flex", justifyContent: "center", alignItems: 'center'}}>
      <div style={{position:"relative"}}>
        <img src={loader} alt="loader" className='pulsating-image' width='70px' height='70px' />
        <img src={play_img} alt="play" style={{position: "absolute", top:"20px", left: "22px", width:"30px", height:'30px'}} />
      </div>
    </div>
  )
}

export default LoadingComponent;
