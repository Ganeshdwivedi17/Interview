import React, { useState, useEffect, useRef } from "react";
import Icons from "../components/icons";
import RightLayout2 from "../components/rightLayout2";
import BottomMenu from "../components/bottomMenu";
import FormMessage from "../components/Answers/MessageForm";
import MainForm from "../components/Answers/MainForm";
import TopSec from "../components/Answers/TopSection";
import Back from "../components/Answers/Back";
import TestiMonials from "../components/Auth/Carousel";
import VideoForm from "../components/Home/Video";
import LinearBackground from "../components/LinearBackground";
import questions_logo from "../images/ques.svg";
import cancel_logo from "../images/close.svg";
import JobTitle from "../components/Questions/JobTitle";
import { IoBriefcaseSharp } from "react-icons/io5";
import axios from "axios";

export enum AnswerFilter {
  LastHour = 'Last hour',
  Today = 'Today',
  ThisWeek = 'This week',
  ThisMonth = 'This month',
  ThisYear = 'This year',
}

function View({ mainScreen,setJobViewContext, setMainScreen, setChatUser, jobViewContext, watchAns }: { mainScreen: number,setJobViewContext:any, setMainScreen: any, setChatUser?: any, jobViewContext: any, watchAns: any }) {
  const [showScreen, setshowScreen] = useState(0);
  const [showFilter, setShowFilter] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState<AnswerFilter>(AnswerFilter.ThisMonth);
  // const [JOBTITLE,setJOBTITLE] = useState<any>()
  const [mainAllInterviews, setMainAllInterviews] = useState<Array<any>>([]);
  const [selectedInterview, setSelectedInterview] = useState<any>(null);
  const handleFilterClose = () => setShowFilter(false);
  const handleFilterShow = () => setShowFilter(true);


  const JOBTITLE = localStorage.getItem('JobTitle') ?localStorage.getItem('JobTitle') : "";



  useEffect(() => {
    if (selectedInterview) {
      setshowScreen(1);
    }
  }, [selectedInterview,JOBTITLE]);
  

  const prevInterview = () => {
    if (mainAllInterviews?.length && selectedInterview?.id) {
      const currentIndex = mainAllInterviews.findIndex(i => i.id === selectedInterview.id);
      const prevIndex = currentIndex - 1;
      if (prevIndex == -1) {
        setSelectedInterview(mainAllInterviews[mainAllInterviews.length - 1]);
      } else {
        setSelectedInterview(mainAllInterviews[prevIndex]);
      }
    }
  };

  const nextInterview = () => {
    if (mainAllInterviews?.length && selectedInterview?.id) {
      const currentIndex = mainAllInterviews.findIndex(i => i.id === selectedInterview.id);
      const nextIndex = currentIndex + 1;
      if (nextIndex > (mainAllInterviews.length - 1)) {
        setSelectedInterview(mainAllInterviews[0]);
      } else {
        setSelectedInterview(mainAllInterviews[nextIndex]);
      }
    }
  };
     
  return (
    <LinearBackground style={{ width: '100%' }}>
      <div className="pageContainer kladsfhjn-ajwe" style={{ padding: 0, gap: 0 }}>
        <div className={showScreen == 1 ? "jkadshfkjf leftSideDiv rightSideBg pos-rel sjfdak-ajwe over-hdn bg-transparent" : "jkadshfkjf leftSideDiv rightSideBg1 pos-rel sjfdak-ajwe bg-transparent"}>
          <div className="leftSideHeader kjsf-ajmwe " style={{ top: 0, justifyContent:"start", left: "40px", padding: "18px 40px 0px 0px", width: showScreen ==1 ? "57%" : "57%" }}>
            {showScreen == 1 ? 
              <>
                <div style={{width:"auto"}}><Back selectedInterview={selectedInterview} setMainScreen={setMainScreen} setShowScreen={setshowScreen} /></div> 
             { JOBTITLE &&  !showFilter ?( <div className="questionsTab">
                <img src={questions_logo} style={{width:"15px"}}/>
                  <div style={{height: "15px", overflow: "hidden",display:"flex",alignItems:"center"}}>
                        <p>{JOBTITLE}</p>
                  </div>
                  <div className="cancel_btn"><img src={cancel_logo} alt="close" /></div>
                </div>):""}
              </>
             : 
               
                (
                  <>
                <div style={{width:"auto"}}><Back jobViewContext={jobViewContext} setMainScreen={setMainScreen} setShowScreen={setshowScreen} /></div>
              { JOBTITLE &&  !showFilter ?( <div className="questionsTab">
                   <img src={questions_logo} style={{width:"15px"}}/>
                   <div style={{height: "15px", overflow: "hidden",display:"flex",alignItems:"center"}}>
                        <p >{JOBTITLE}</p>
                  </div>
                  <div className="cancel_btn"><img src={cancel_logo} alt="close" /></div>
                </div>):""}
                </>) 
            }
          </div>
          {showScreen != 1 ? (
            <div className="leftsidediv leftsideWhithTransparentBg" style={{ height: 800 }}>
              {
                showScreen == 0 ? <MainForm setJobViewContext={setJobViewContext} setMainScreen={setMainScreen} showScreen={showScreen} setshowScreen={setshowScreen} selectedFilter={selectedFilter} setSelectedInterview={setSelectedInterview} allInterviews={mainAllInterviews} setAllInterviews={setMainAllInterviews} jobViewContext={jobViewContext} watchAns={watchAns} />
                  : <><FormMessage showScreen={showScreen} setshowScreen={setshowScreen} /></>
              }
              {
                showScreen == 0 ? <TopSec setJobViewContext={setJobViewContext} setMainScreen={setMainScreen} showScreen={showScreen} setshowScreen={setshowScreen} showFilter={showFilter} handleFilterShow={handleFilterShow} handleFilterClose={handleFilterClose} selectedFilter={selectedFilter} setSelectedFilter={setSelectedFilter} /> : <div className="sjaklsa-wmjes"><Back setMainScreen={setMainScreen} setShowScreen={setshowScreen} /></div>
              }
            </div>
            
          ) : (
            <></>
          )} 
          {showScreen == 1 ? <>
            <div className="lkljdfsl-sifkmd" style={{ width: 'auto', left: 25 }} onClick={prevInterview}>
              {/* <Icons iconNumber={66} /> */}
              <svg width="53" height="53" viewBox="0 0 53 53" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g filter="url(#filter0_b_5913_7947)">
                <rect x="52.6562" y="52.6562" width="52.6565" height="52.6565" rx="26.3283" transform="rotate(-180 52.6562 52.6562)" fill="#787FBB" fill-opacity="0.2" />
                <path d="M30.4736 32.8435L23.3886 25.5001L30.4736 19.0454C31.3167 18.227 31.3167 16.9012 30.4736 16.0828C29.6306 15.2644 28.2648 15.2644 27.4218 16.0828L18.7889 23.4474C16.5869 25.5001 16.5898 25.5645 18.7889 27.4258L27.4218 35.8061C28.2648 36.6245 29.6306 36.6245 30.4736 35.8061C31.3167 34.9877 31.3167 33.6619 30.4736 32.8435Z" fill="white" />
              </g>
              <g filter="url(#filter1_b_5913_7947)">
                <rect x="52.6562" y="52.6562" width="52.6565" height="52.6565" rx="26.3283" transform="rotate(-180 52.6562 52.6562)" fill="#787FBB" fill-opacity="0.2" />
                <path d="M30.16 32.1073L23.9276 25.9551L30.16 20.5475C30.9016 19.8619 30.9016 18.7512 30.16 18.0656C29.4184 17.3799 28.217 17.3799 27.4754 18.0656L19.8813 24.2354C17.9443 25.9551 17.9469 26.0091 19.8813 27.5684L27.4754 34.5893C28.217 35.2749 29.4184 35.2749 30.16 34.5893C30.9016 33.9037 30.9016 32.7929 30.16 32.1073Z" fill="white" />
              </g>
              <defs>
                <filter id="filter0_b_5913_7947" x="-35.1044" y="-35.1044" width="122.865" height="122.865" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feGaussianBlur in="BackgroundImageFix" stdDeviation="17.5522" />
                  <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_5913_7947" />
                  <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_5913_7947" result="shape" />
                </filter>
                <filter id="filter1_b_5913_7947" x="-35.1044" y="-35.1044" width="122.865" height="122.865" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feGaussianBlur in="BackgroundImageFix" stdDeviation="17.5522" />
                  <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_5913_7947" />
                  <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_5913_7947" result="shape" />
                </filter>
              </defs>
            </svg>
            </div>
            <TestiMonials setChatUser={setChatUser} selectedInterview={selectedInterview} setAllInterviews={setMainAllInterviews} setshowScreen={setshowScreen} setMainScreen={setMainScreen} />
            <div className="lkljdfsl-sifkmd" style={{ width: 'auto', right: 25 }} onClick={nextInterview}>
              {/* <Icons iconNumber={67} /> */}
              <svg width="54" height="53" viewBox="0 0 54 53" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g filter="url(#filter0_b_5913_7942)">
                <rect x="0.943359" width="52.6565" height="52.6565" rx="26.3283" fill="#787FBB" fill-opacity="0.2" />
                <path d="M23.126 19.8147L30.211 27.1581L23.126 33.6128C22.2829 34.4312 22.2829 35.757 23.126 36.5754C23.969 37.3938 25.3348 37.3938 26.1778 36.5754L34.8107 29.2108C37.0128 27.1581 37.0098 27.0937 34.8107 25.2324L26.1778 16.8521C25.3348 16.0337 23.969 16.0337 23.126 16.8521C22.2829 17.6705 22.2829 18.9963 23.126 19.8147Z" fill="white" />
              </g>
              <g filter="url(#filter1_b_5913_7942)">
                <rect x="0.943359" width="52.6565" height="52.6565" rx="26.3283" fill="#787FBB" fill-opacity="0.2" />
                <path d="M23.4396 20.5489L29.672 26.7011L23.4396 32.1087C22.698 32.7943 22.698 33.9051 23.4396 34.5907C24.1812 35.2763 25.3826 35.2763 26.1242 34.5907L33.7183 28.4208C35.6553 26.7011 35.6527 26.6472 33.7183 25.0878L26.1242 18.067C25.3826 17.3813 24.1812 17.3813 23.4396 18.067C22.698 18.7526 22.698 19.8633 23.4396 20.5489Z" fill="white" />
              </g>
              <defs>
                <filter id="filter0_b_5913_7942" x="-34.161" y="-35.1044" width="122.865" height="122.865" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feGaussianBlur in="BackgroundImageFix" stdDeviation="17.5522" />
                  <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_5913_7942" />
                  <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_5913_7942" result="shape" />
                </filter>
                <filter id="filter1_b_5913_7942" x="-34.161" y="-35.1044" width="122.865" height="122.865" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feGaussianBlur in="BackgroundImageFix" stdDeviation="17.5522" />
                  <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_5913_7942" />
                  <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_5913_7942" result="shape" />
                </filter>
              </defs>
            </svg>
            </div>
            <div className="dkfnmsd-awde">
              <div className="wh-100 l1">
                <VideoForm />
              </div>
              <div className="wh-100 l2">
                <VideoForm /> 
              </div>
            </div>
            <div className="ldkf-kasmdaw"></div>
          </>
            : null}
          <div className="d-flex justify-content-center kdnklms-awendwd-11">
          
            <BottomMenu setShowScreen={setshowScreen} showScreen={setshowScreen} mainScreen={mainScreen} setMainScreen={setMainScreen} />
          
          </div>
        </div>
        <RightLayout2 setJobViewContext={setJobViewContext} setMainScreen={setMainScreen} setShowScreen={setshowScreen} />
      </div>
    </LinearBackground>
  );
}

export default View;
