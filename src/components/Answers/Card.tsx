import Icons from "../icons"
import { getAge } from "../../utils/validate-email";
import profile_pic from "../../images/Profile Pic.svg"
import { useEffect, useState } from "react";

const Card = ({ showFav, setMainScreen, showScreen, setshowScreen, interview, handleFilteration, setSelectedInterview }: { showFav?: boolean, setMainScreen: any, showScreen: number, setshowScreen: any, interview: any, handleFilteration: any, setSelectedInterview: any }) => {

  const svgBackground = `
  <svg xmlns="http://www.w3.org/2000/svg" width="120" height="226" viewBox="0 0 120 226" fill="none">
  <path d="M10.117 0.00771888C10.115 0.0049772 10.4954 -0.00108278 10.4922 0.00787026C10.4922 0.00787026 102.95 0.00673022 109.184 0C115.418 -0.00673022 119.839 2.51446 119.748 10.2687L119.751 194.864L10.119 0.0112063L10.117 0.00771888Z" fill="#7081FF"/>
  <path d="M119.756 207.027L119.748 10.2687L119.751 194.864L10.119 0.0112063C3.23907 0.13536 0.000128159 3.72392 0 10.6229V207.264C0 214.238 3.10768 217.947 10.6 217.947H53.2868L57.8665 224.565C57.9993 224.757 58.1478 224.939 58.3172 225.099C59.5824 226.299 60.2781 226.3 61.5459 225.103C61.7149 224.943 61.8631 224.763 61.9958 224.572L66.6066 217.947H109.184C116.256 217.894 119.756 213.996 119.756 207.027Z" fill="#A4AFFF"/>
  </svg>
  `;

  const [Load,setLoad] = useState(false);

  useEffect(() => {
 
}, [Load])


  return <div onClick={() => {
    setSelectedInterview(interview);
  }} className="candidateCard" style={{ height: 226, width: 120, background: `url("data:image/svg+xml,${encodeURIComponent(svgBackground)}")` }}>
 {/* {Load &&interview.videoLink ? (
    <video onLoadedMetadata={()=> setLoad(true)} style={{ position: 'relative', borderRadius: 7, background: 'rgba(0,0,0,0.6)', marginTop: 1 }} width={116} height={214}
      src={interview.videoLink}
    />):
    ( */}
    {/* Used image instead of video */}
            <img src={require("../../images/i6.png")} style={{ position: 'relative', borderRadius: 7, width:"116", height:"214", top: '0.75%' }} />
          {/* )
         } */}
    <div className="cardInfoDiv" style={{ padding: '0px 5px 0px 7px', display:"flex", alignItems:"center", gap:"5px" }}>
      <div style={{height: '20px', width:'20px', borderRadius:'50%'}}><img src={interview?.interviewee?.profile_image?interview?.interviewee?.profile_image:profile_pic} alt="profile" style={{ borderRadius:'50%'}} height='100%' width='100%' /></div>
        <div>
        <div className="intervieweeName" >
        {/* Steven Aubrey */}
          {interview?.interviewee?.name}
        </div>
        <div className="intervieweeDetail">
          <Icons iconNumber={32} />
          <span>
          {/* 36, London, UK */}
          {getAge(interview?.interviewee?.birth_date )}, &nbsp;
          {interview?.interviewee?.location}
          </span>
        
        </div>
      </div>
    </div>
    {interview?.favourite ? (
      <div className='odjfks-amds' style={{ top: '0.5px', right: '1.59px' }}>
        <Icons iconNumber={65.5} />
      </div>
    ) : null}
  </div>
}
export default Card;