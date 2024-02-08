import React, { useEffect, useState } from "react";
import JobTitle from "./JobTitle";
import axios from "axios";
import authConfig from '../../configs/auth';
import { useAuth } from "../../hooks/useAuth";
import { useFullscreen } from "../../hooks/useFullscreen";
import { useParams } from "react-router";
import Notify from "../Notify";
import Loading from "../Loading/Loading";
import ShowLess from "../Loading/ShowLess";

const QuestionForm = ({ setMainScreen, setShowScreen, setJobView, myQuestions }: { setMainScreen: any, setShowScreen: any, setJobView: any, myQuestions: any }) => {
  const [jobs, setJobs] = useState<any>(null);
  const { user, setJobViewContext } = useAuth();
  const { fullscreen } = useFullscreen();
  const [show, setShow] = useState(true);
  const params = useParams();
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 15; // Number of jobs per page
  const [showMore, setShowMore] = useState(false);

  useEffect(() => {
    getJobs();
  }, [myQuestions, currentPage]);

  const redirectToSharedJob = (_jobs: any) => {
    const { job_id } = params;
    if (_jobs?.length && job_id?.length) {
      const job = _jobs.find((j: any) => j._id === job_id);
      if (job) {
        setJobViewContext(job);
        setJobView(job);
        setShowScreen(7);
        setTimeout(() => {
          setMainScreen(3);
        }, 1000);
      }
    }
    // window.history.pushState(null, '', '/');
  };

  const getJobs = () => {
    axios
      .get(`${process.env.REACT_APP_BACKEND_URL}${authConfig.getJobsEndpPoint}`).then(async (response) => {
        if (myQuestions) {
          const filtered = response?.data?.filter((obj: any) => obj.interviewer._id === user?.id);
          setJobs(filtered);
          redirectToSharedJob(filtered);
        } else {
          response.data.reverse();
          setJobs(response.data);
          redirectToSharedJob(response.data);
        }
      })
      .catch((err) => {});
  };

  const handleShowMore = () => {
    jobs?.length > (currentPage * pageSize) ? setShowMore(false) :setShowMore(true);
setCurrentPage(currentPage +1)
  };
  
 const handleShowLess = ()=>{
  setCurrentPage(1)
  setShowMore(false);
 }

  const startIndex = 0; // Always start from the first item
  const endIndex = showMore ? jobs?.length : currentPage * pageSize;
  const currentJobs = jobs?.slice(startIndex, endIndex);


  return (
    <div className={`leftSideContent ${myQuestions ? (jobs?.length ? '' : 'no-question-prompt-div') : ''}`} style={fullscreen ? { maxWidth: 1000, marginLeft: 'auto', marginRight: 'auto' } : {}}>
  
      {myQuestions ? (
        <>
          {jobs?.length ? (
            <div className="h-auto" style={{ display: 'grid', gap: '6px' }}>
              {currentJobs?.map((data: any, index: any) => (
                <JobTitle key={index} setMainScreen={setMainScreen} setShowScreen={setShowScreen} showMessage={false} jobData={data} setJobView={setJobView} />
              ))}
               {jobs?.length > pageSize ?(!showMore && (
                <div className="LoadingContainersdfsdf" onClick={handleShowMore}> <Loading /></div>
              )):""}
                {jobs?.length > pageSize ?(showMore && (
            <div className="LoadingContainersdfsdf" onClick={handleShowLess}> <ShowLess /></div>
          )):""}
            </div>
          ) : (
            <>
              <div className="questionNotify">
                <Notify type="fourOfour" show={show} handleClose={() => setShow(false)} autoHide={false} title=" No Interviews. Try to change Filter." />
              </div>
            </>
          )}
        </>
      ) : (
        <div className="h-auto" style={{ display: 'grid', gap: '6px' }}>
          {currentJobs?.map((data: any, index: any) => (
            <JobTitle key={index} setMainScreen={setMainScreen} setShowScreen={setShowScreen} showMessage={false} jobData={data} setJobView={setJobView} />
          ))}
          {jobs?.length > pageSize ?(jobs && !showMore && (
            <div className="LoadingContainersdfsdf" onClick={handleShowMore}> <Loading /></div>
          )):""}
            {jobs?.length > pageSize ?(showMore && (
            <div className="LoadingContainersdfsdf" onClick={handleShowLess}> <ShowLess /></div>
          )):""}
         
        </div>
      )}
    </div>
  );
};

export default QuestionForm;
