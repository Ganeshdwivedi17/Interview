import { Container, Row, Col } from "react-bootstrap";
import Card from "./Card";
import Icons from "../icons";
import axios from "axios";
import { useEffect, useState } from "react";
import { AnswerFilter } from "../../screens/answers";
import { useAuth } from "../../hooks/useAuth";
import Notify from "../Notify";
import Loading from "../Loading/Loading";
import ShowLess from "../Loading/ShowLess";

interface Interview {
  videoLink: string;
  interviewee?: {
    _id?: string;
    name?: string;
    email?: string;
    birth_date?: string;
    location?: string;
    company_name?: string;
    createdAt?: string;
    updatedAt?: string;
    __v?: number;
  };
  favourite?: any;
  id?: any;
  createdAt?: string;
}

const MainForm = ({ setMainScreen,setJobViewContext, showScreen, setshowScreen, selectedFilter, setSelectedInterview, allInterviews, setAllInterviews, jobViewContext, watchAns }: { setMainScreen: any, showScreen: number, setshowScreen: any, selectedFilter: AnswerFilter,setJobViewContext:any, setSelectedInterview: any, allInterviews: any, setAllInterviews: any, jobViewContext: any, watchAns: any }) => {
  const [filteredInterviews, setFilteredInterviews] = useState<Array<Interview>>([])
  const [myAnswers, setMyAnswers] = useState<any>(false);
  const [loading, setLoading] = useState(true)
  const [show, setShow] = useState(true)
  const { user } = useAuth()
    const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 15; // Number of jobs per page
  const [showMore, setShowMore] = useState(false);

  const handleFilteration = (array: any) => {
    const questionsArray: Array<Interview> = array?.map((obj: any) => ({
      videoLink: obj.questions[0].video_url,
      interviewee: obj.interviewee,
      favourite: obj.favourite,
      interviewer: obj.interviewer,
      id: obj._id,
      createdAt: obj.createdAt
    }));
    setAllInterviews(questionsArray)
  }

useEffect(() => {
 
}, [myAnswers,currentPage])


  useEffect(() => {
    setLoading(true)
   GetAnswers()
  }, [myAnswers]);


  const GetAnswers = () =>{ axios.get(process.env.REACT_APP_BACKEND_URL + '/interviews',
    ).then(response => {
      setLoading(false)
      // if (watchAns) {
      //   const filtered = response?.data?.filter((obj: any) => obj.job_id == jobViewContext?._id)
      //   handleFilteration(filtered)

      // }
      // else 
      let interviewData = response.data;  
      let filterData: any = [];
      let job_id :any = [];

      // let question_id: any = [];
      // let duplicate_questionId: any = []
      
      for(let i=0; i<response.data.length; i++){
        if(!job_id.includes(interviewData[i].job_id)){
          job_id.push(interviewData[i].job_id)
          filterData.push(interviewData[i])
        }
      }

      if (myAnswers) {
        const filtered = filterData.filter((obj: any) => obj.interviewer._id == user?.id)
        handleFilteration(filtered)
      } else {
        handleFilteration(filterData)
      }
    }).catch(console.error)}

  useEffect(() => {
    if (selectedFilter && allInterviews?.length) {
      const now = new Date();
      let filteredInterviews: Array<Interview> = [];

      switch (selectedFilter) {
        case AnswerFilter.LastHour:
          filteredInterviews = allInterviews.filter((interview: Interview) => {
            if (interview?.createdAt) {
              const interviewDate = new Date(interview.createdAt);
              const timeDifference = now.getTime() - interviewDate.getTime();
              const hoursDifference = timeDifference / (1000 * 3600);
              return hoursDifference <= 1;
            }
          }).filter((i: any) => i);
          break;
        case AnswerFilter.Today:
          filteredInterviews = allInterviews.filter((interview: any) => {
            if (interview?.createdAt) {
              const interviewDate = new Date(interview.createdAt);
              return (
                interviewDate.getDate() === now.getDate() &&
                interviewDate.getMonth() === now.getMonth() &&
                interviewDate.getFullYear() === now.getFullYear()
              );
            }
          }).filter((i: any) => i);
          break;
        case AnswerFilter.ThisWeek:
          filteredInterviews = allInterviews.filter((interview: any) => {
            if (interview?.createdAt) {
              const interviewDate = new Date(interview.createdAt);
              const startOfWeek = new Date(now.getFullYear(), now.getMonth(), now.getDate() - now.getDay());
              const endOfWeek = new Date(startOfWeek);
              endOfWeek.setDate(endOfWeek.getDate() + 6);

              return interviewDate >= startOfWeek && interviewDate <= endOfWeek;
            }
          }).filter((i: any) => i);
          break;
        case AnswerFilter.ThisMonth:
          filteredInterviews = allInterviews.filter((interview: any) => {
            if (interview?.createdAt) {
              const interviewDate = new Date(interview.createdAt);
              return (
                interviewDate.getMonth() === now.getMonth() &&
                interviewDate.getFullYear() === now.getFullYear()
              );
            }
          }).filter((i: any) => i);
          break;
        case AnswerFilter.ThisYear:
          filteredInterviews = allInterviews.filter((interview: any) => {
            if (interview?.createdAt) {
              const interviewDate = new Date(interview.createdAt);
              return interviewDate.getFullYear() === now.getFullYear();
            }
          }).filter((i: any) => i);
          break;
        default:
          filteredInterviews = [...allInterviews];
          break;
      }

      setFilteredInterviews(filteredInterviews);
    }
    setShowMore(false)
    setCurrentPage(1)
  }, [selectedFilter, allInterviews]);


 const handleShowMore = () => {
    filteredInterviews?.length > (currentPage * pageSize) ? setShowMore(false) :setShowMore(true);
    setCurrentPage(currentPage +1)
  };

 const handleShowLess = ()=>{
  setCurrentPage(1)
  setShowMore(false);
 }


  
  const startIndex = 0; // Always start from the first item
  const endIndex = showMore ? filteredInterviews?.length : currentPage * pageSize;
  const currentJobs = filteredInterviews?.slice(startIndex, endIndex);


  return (
    <div className="leftSideMain">
      <div className="option-btn" style={{flexDirection: "column"}}>
        <div>
          <button className={`lamdl-anwid radiusLeft ${myAnswers ? 'active' : ''}`} onClick={() => {
            setMyAnswers(true)
          }}>
            <Icons iconNumber={50} />
            Your Answers
          </button>
          <button className={`lamdl-anwid radiusRight ${myAnswers ? '' : 'active'}`} onClick={() => setMyAnswers(false)}>
            <Icons iconNumber={32} />
            Nearby
          </button>
        </div>
      </div>

      <div className="kdhfkjjdsfo">
        <Icons iconNumber={32} />
        <h5 className="mksaldkamaw-jdwa">London, UK</h5>
      </div>

      <div className="leftSideContentAnswers">
        <div className="h-auto">

          {loading ? (<p></p>
          )
            : ( 
              filteredInterviews.length > 0 ? (
                <div>
                <Row className="row-cols-3 row-cols-sm-4 row-cols-md-3 row-cols-lg-4 row-cols-xl-5 justify-content-start mxrow-answers" style={{ gap: 10, padding: '4px 14px' }} >
                  {
                    currentJobs.map((interview, index) => (
                      <Col className="p-0 mb-0 d-inline-flex justify-content-center align-items-center" style={{ cursor: 'pointer', width:'32%', maxWidth: '120px', maxHeight: '226px' }} key={index}>
                        <Card setMainScreen={setMainScreen} showScreen={showScreen} setshowScreen={setshowScreen} interview={interview} handleFilteration={handleFilteration} setSelectedInterview={setSelectedInterview} />
                      </Col>
                    ))
                  }
                  
                </Row>
               { filteredInterviews?.length > pageSize ? (!showMore && (
                <div className="LoadingContainersdfsdf" onClick={handleShowMore}> <Loading /></div>
              )):""}
              { filteredInterviews?.length > pageSize ? (showMore && (
                <div className="LoadingContainersdfsdf" onClick={handleShowLess}> <ShowLess /></div>
              )):""}
                </div>)
                : (
                    <>
                     <div className="questionNotify">
                      <Notify type="fourOfour" show={show} handleClose={() => setShow(false)} autoHide={false} title=" No Interviews. Try to change Filter." />

                    </div>
                    </>
                   
                 


                ))}

        </div>
      </div>

    </div>
  );
}

export default MainForm;