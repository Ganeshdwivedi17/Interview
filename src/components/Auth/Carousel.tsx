import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
//@ts-ignore
import Icons from '../icons';
import VideoForm from '../Home/Video';
import { useMediaQuery } from 'react-responsive';
import axios from 'axios';
import { useState } from 'react';
import TinyModal from '../Modals/tiny_modal';
import { useAuth } from '../../hooks/useAuth';

const RightButtons = ({ hideMenu, setChatUser, selectedInterview, setAllInterviews, favourite = false, setFavourite, setMainScreen, setshowScreen }: { hideMenu: boolean, selectedInterview?: any, setAllInterviews?: any, setFavourite?: any, favourite?: boolean, setMainScreen?: any, setshowScreen?: any, setChatUser?: any }) => {
  const isTab = useMediaQuery({ query: '(max-width: 1180px)' });
  const [showDelInterview, setShowDelInterview] = useState(false);
  const { setJobViewContext, user } = useAuth();



  const role = user?.chat?.user?.users[user.id].role;


  return <div className={`kljadjfkl-jaem kjdlamkdl-asdj ${isTab ? "adaslkhdfjksj-ajenw" : ""}`}>
    <button className='no-shadow circleButtons' onClick={() => {
      if (selectedInterview?.id && typeof setAllInterviews === 'function' && typeof setFavourite === 'function') {
        const update = !favourite;
        axios.patch(process.env.REACT_APP_BACKEND_URL + '/interviews/' + selectedInterview.id, {
          favourite: update
        }).then((res: any) => {
          setFavourite(update);
          setAllInterviews(res.data);
        }).catch(() => { })
      }
    }}>

      {/* {favourite ? 'Un-Favourite' : 'Favourite'} */}
      <Icons iconNumber={119} />Favourite
      {/* {favourite ? (
          <>
            <Icons iconNumber={118} />
            Favourite
          </>
        ) : (
          <>
            <Icons iconNumber={isTab ? 70 : 68} /> Favourite
          </>
        )} */}
    </button>
    <button className='no-shadow circleButtons d-none'>
      <Icons iconNumber={isTab ? 71 : 69} />
      Edit
    </button>

    <button className='no-shadow circleButtons' onClick={() => {
      axios.get(process.env.REACT_APP_BACKEND_URL + '/interviews/' + selectedInterview.id).then((res: any) => {
        if (typeof setChatUser === 'function') {
          setChatUser(res.data)
          setMainScreen(4)
        }
      }).catch(() => { })
    }}>
      <Icons iconNumber={isTab ? 72 : 48} />
      Messages
    </button>
    {(role === 'admin' || user?.id == selectedInterview?.interviewee?._id) ? <button className='no-shadow circleButtons' onClick={() => setShowDelInterview(true)}>
      <Icons iconNumber={isTab ? 73 : 49} />
      Delete
    </button> : null}
    <TinyModal show={showDelInterview} setshowScreen={setshowScreen} handleClose={() => setShowDelInterview(false)} type="delete_interview_video" setMainScreen={setMainScreen} jobView={selectedInterview} />
  </div>
}
 
const TestiMonials = ({ AnswerfilteredInterviews,setChatUser, selectedInterview, setAllInterviews, setMainScreen, setshowScreen }: { selectedInterview?: any, setAllInterviews?: any, setMainScreen?: any, setshowScreen?: any, setChatUser?: any,AnswerfilteredInterviews?:any }) => {
  const [favourite, setFavourite] = useState(selectedInterview?.favourite || false);
  const [paginate, setPaginate] = useState<any>(1)

    // const getJobDetails = (_id: any) => {
  //   axios
  //     .get(`${process.env.REACT_APP_BACKEND_URL}/interviews/${_id}`)
  //     .then(async response => {
  //       setSetJob(response.data)
  //     })
  //     .catch(console.error)
  // }

  return (
    <div className='wh-100 kjsdfl-asjdm'>
      <VideoForm AnswerfilteredInterviews={AnswerfilteredInterviews} selectedInterview={selectedInterview} favourite={favourite} />
      <RightButtons setChatUser={setChatUser} hideMenu={false} selectedInterview={selectedInterview} setshowScreen={setshowScreen} setMainScreen={setMainScreen} setAllInterviews={setAllInterviews} favourite={favourite} setFavourite={setFavourite} />
    </div>
  )
};

export default TestiMonials;