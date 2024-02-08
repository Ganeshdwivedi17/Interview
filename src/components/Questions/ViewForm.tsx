import { useMediaQuery } from "react-responsive";
import RightButtons from "../RightButtons";
import Icons from "../icons";
//@ts-ignore
import { Flip } from "react-awesome-reveal"
import CheckFormBox from "../CheckBoxForm";
import { useEffect, useState } from "react";
import axios from "axios";
import { getAge } from "../../utils/validate-email";
import profile_pic from "../../images/Profile Pic.svg"

const ViewForm = ({ setMainScreen, setShowScreen, setPastScreen, jobView, setChatUser, jobViewContext, setWatchAns }: { setMainScreen: any, setShowScreen: any, setPastScreen: any, jobView: any, setChatUser: any, jobViewContext: any, setWatchAns: any }) => {
  const isMobile = useMediaQuery({ query: '(max-width: 1013px)' });
  const [_jobView, setJobView] = useState(jobView || jobViewContext);

  // console.log(_jobView)

  useEffect(() => {
    getJobDetails();
    
  }, []);


  const getJobDetails = () => {
    const _id = (jobView || jobViewContext)?._id;
    axios
      .get(`${process.env.REACT_APP_BACKEND_URL}/interviewer/${_id}`)
      .then((response: any) => {
        setJobView(response.data)
      })
      .catch(console.error)
  }

  return (
    <Flip direction="vertical">
      <div className="jkljfkld-jdskfe">
        <div className="kjjfds-janwkea1 white-form hover-anim">
          <div className="kafms-kfsamfer">
            <div className="skfalk-smdsefds">
              <div className="kdjnfakdsfm-jsamre">
                <img src={_jobView?.interviewer?.profile_image ? _jobView?.interviewer?.profile_image : profile_pic} />
              </div>
              <div className="kjdflkads-mdskf">
                <h3>{_jobView?.job_title || ''}</h3>
                <h5>
                  <Icons iconNumber={16} /> {getAge(_jobView?.interviewer?.birth_date) || '25'},&nbsp;{_jobView?.job_recruiter || _jobView?.interviewer?.company_name || ''}
                </h5>
                <h6>
                  <Icons iconNumber={17} />{_jobView?.interviewer?.location || ''}
                </h6>
              </div>
            </div>
            <div className="njfk-amew">
              {_jobView?.questions?.length ? _jobView?.questions?.map((data: any, index: any) => (
                <CheckFormBox questions={data} forcedActive={false} />
              )) : null}
            </div>
            <div className="kdjsa-ajwnkelds afkfjnkas-edsm">
              <div className="continueBtnDiv snasdj-sawdne">
                <button className="btn" onClick={() => {
                  setWatchAns(true)
                  setMainScreen(2)
                  localStorage.setItem('JobTitle',_jobView?.job_title )
                }}>
                  WATCH ANSWERS
                  <div className="kdksa-ajwmd ">
                    <Icons iconNumber={93} />
                  </div>
                </button>
              </div>
            </div>
          </div>
          <div className="ldkjfal0-fdsnfe">
            <Icons iconNumber={62} />
          </div>
        </div>
        <RightButtons style={{ right: '-70px',top:"20px"}} id={_jobView._id} setMainScreen={setMainScreen} setShowScreen={setShowScreen} setPastScreen={setPastScreen} jobView={jobView} setChatUser={setChatUser} hideMenu={isMobile ? true : false} />
      </div></Flip>
  );
};

export default ViewForm