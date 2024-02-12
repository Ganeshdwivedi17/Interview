import React from 'react'
import play from '../../images/play.png'
import GreenTick from '../../images/Green Tick.png'
import Group from '../../images/Group.svg'
import ThreeLines from '../../images/Group 70.svg'
import ThreeLinesBottom from '../../images/Group 71.svg'

const PaymentCard = () => {

    const cardButton = document.querySelector('#PAYMENT_CARDsfasdfg');
  return (
    <div style={{width:'479px',height:'668px',borderRadius:"23px",background: "linear-gradient(180deg, #00108A 0%, #020E64 100%)",display:"flex",flexDirection:"column",alignItems:"center",textAlign:'center',color:"white",gap:"20px",position:"relative"}}>

        <img style={{position:"absolute",right:"0px"}} src={ThreeLines} alt=''/>
        <img style={{position:"absolute",left:"0px",bottom:"0"}} src={ThreeLinesBottom} alt=''/>

<div style={{background:" rgba(217, 217, 217, 0.1)",width:"100%",height:"191px"}}>

 <p style={{color:"white",paddingTop:"110px",fontWeight:"500",fontSize:"18px"}}>Video<span style={{color:"rgba(174, 184, 255, 1)"}}>Interviews</span>.io</p>

 <div style={{display:"flex",flexDirection:"row",justifyContent:"center",height:"30px",marginTop:"0px"}}>
    <button style={{cursor:"pointer",background: "rgba(37, 49, 144, 1)",fontWeight:"500",fontSize:"12px",borderTopLeftRadius:"18px",padding:"0px 20px",borderBottomLeftRadius:"18px",color:"rgba(255, 255, 255, 1)",border:"none",display:"flex",flexDirection:"row",alignItems:"center",gap:"5px"
}}><img style={{width:"11px", marginRight:"3px"}} src={play} alt='play'/>Basic</button>
    <button style={{cursor:"pointer",background: "rgba(0, 217, 205, 1)",width:"120px",fontWeight:"500",fontSize:"12px",borderTopRightRadius:"18px",borderBottomRightRadius:"18px",color:"rgba(255, 255, 255, 1)",border:"none",
    display:"flex",flexDirection:"row",alignItems:"center",gap:"5px",padding:"0 10px"
}}><img style={{width:"11px", marginRight:"3px"}} src={Group} alt='play'/>Professional</button>
 </div>
</div>
<div>
<h3 style={{fontSize:"40px",fontWeight:"600",marginBottom:"0px"}}>£18.99</h3>
<p style={{fontSize:"10px",fontWeight:"300",marginTop:"-5px"}}>14 days Money Back Guarantee</p>
</div>
<ul style={{display:"flex",flexDirection:"column",justifyContent:"center",textAlign:'left',gap:"14px",marginLeft:"-50px"}}>
    <li style={{listStyle:"none",display:"flex",flexDirection:"row",alignItems:"center",gap:"10px",fontSize:"12px",fontWeight:"400"}}><img src={GreenTick} alt='tick'/> Unlimited Video Interviews</li>
    <li style={{listStyle:"none",display:"flex",flexDirection:"row",alignItems:"center",gap:"10px",fontSize:"12px",fontWeight:"400"}}><img src={GreenTick} alt='tick'/> Unlimited Messaging</li>
    <li style={{listStyle:"none",display:"flex",flexDirection:"row",alignItems:"center",gap:"10px",fontSize:"12px",fontWeight:"400"}}><img src={GreenTick} alt='tick'/> Team collaboration</li>
    <li style={{listStyle:"none",display:"flex",flexDirection:"row",alignItems:"center",gap:"10px",fontSize:"12px",fontWeight:"400"}}><img src={GreenTick} alt='tick'/> Private Interviews</li>
</ul>
   
   <button id='PAYMENT_CARDsfasdfg' style={{cursor:"pointer",boxShadow: "0px 10px 25px 0px rgba(84, 104, 255, 0.3)"
,border:"none",width:"284px",height:"58px",background:"rgba(84, 104, 255, 1)",color:"white",borderRadius:"8px",fontSize:"14px",fontWeight:"600"}}>Upgrade Plan</button>
    </div>
  )
}

export default PaymentCard