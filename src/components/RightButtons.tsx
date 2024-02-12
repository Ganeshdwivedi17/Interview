import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import Icons from "./icons"
import TinyModal from "./Modals/tiny_modal";
import { isDisabled } from "@testing-library/user-event/dist/utils";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import { json } from "stream/consumers";

const RightButtons = ({ setMainScreen, setShowScreen, setPastScreen, hideMenu, jobView, setChatUser, id,style = {}}: { setMainScreen: any, setShowScreen: any, setPastScreen: any, hideMenu: boolean, jobView: any, setChatUser: any,id?:any, style?: any}) => {
  const isTab = useMediaQuery({ query: '(max-width: 1013px)' });
  const [showDelInterview, setShowDelInterview] = useState(false);
  const editable = localStorage.getItem("editable");
  const LocalStorageJobView = localStorage.getItem('JobView');
  const [ID,setID] = useState()
 
const navigate = useNavigate();

useEffect(() => {
 if(LocalStorageJobView !== (undefined || null)){
  const {_id} = JSON.parse(LocalStorageJobView)
  setID(_id || id)
  }
}, [])


  return <div className={`kljadjfkl-jaem ${hideMenu ? "jkdslfsae" : isTab ? "lkhdfjksj-ajenw" : ""}`} style={style} >
      <Link to={`${process.env.REACT_APP_FRONTEND_URL}/preview/${ID}`} target="_blank">
          <button className="no-shadow circleButtons" onClick={() => {
        }
      }>
      <Icons iconNumber={45} />
      Preview
    </button>
    </Link>
    <button className={`no-shadow ${editable && editable === "edit" ? "circleButtons" : "disabled"}`} onClick={() => {
      setShowScreen(1);
      setPastScreen(7);
    }}
    disabled={editable && editable === "edit" ? false: true}
    >
      <Icons iconNumber={46} />
      Edit
    </button>
  
    <button className="no-shadow circleButtons" onClick={() => setShowScreen(8)}>
      <Icons iconNumber={47} />
      Share
    </button>
    <button className={`no-shadow ${editable && editable === "edit" ? "circleButtons" : "disabled"}`} onClick={() => {
      setMainScreen(4)
      setChatUser(jobView)
    }}
    disabled={editable && editable === "edit" ? false: true}
    >
      <Icons iconNumber={48} />
      Messages
    </button>
    <button className={`no-shadow ${editable && editable === "edit" ? "circleButtons" : "disabled"}`} onClick={() => setShowDelInterview(true)}
      disabled={editable && editable === "edit" ? false: true}
    >
      <Icons iconNumber={49} />
      Delete
    </button>
    <TinyModal show={showDelInterview} handleClose={() => setShowDelInterview(false)} type="delete_interview" setMainScreen={setMainScreen} setshowScreen={setShowScreen} jobView={jobView} />
  </div>
}

export default RightButtons
