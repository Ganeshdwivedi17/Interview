import React, { useEffect, useState } from "react";
import Icons from "../icons";
import Loading from "../Loading/Loading";

const Question = ({ setselected,jobViewContext, selected, questions, questionIds, setQuestionIds, mainStyle = {}, timerStyle = {}, showDelete = false, onDeleteClick = null }: { setselected: any, selected: number, questions: any, questionIds: any, setQuestionIds: any, mainStyle?: any, timerStyle?: any, showDelete?: boolean,jobViewContext:any, onDeleteClick?: any }) => {
  const [isHoverOrActive, setisHoverOrActive] = React.useState(false);

  useEffect(() => {
   if(jobViewContext == undefined){
     const isSelected = questionIds.find((qId: any) => qId === questions._id);
     setselected(questionIds.length)
    if (isSelected) {
      setisHoverOrActive(true);
    } else {
      setisHoverOrActive(false);
    }
   }else if(jobViewContext != undefined && questionIds.length > 0) {
    const isSelected = questionIds.find((qId: any) => qId === questions._id);
    setselected(questionIds?.length)
    if (isSelected) {
      setisHoverOrActive(true);
    } else {
      setisHoverOrActive(false);
    }
   }else if(jobViewContext !== undefined){
     const isSelected = jobViewContext.find((qId: any) => qId?._id === questions._id);
    const data = jobViewContext?.map((item:any)=>item._id)
     setQuestionIds(data)
    if (isSelected) {
      setisHoverOrActive(true);
    } else {
      setisHoverOrActive(false);
    }
    setselected(jobViewContext.length)
   }
  }, [questionIds,selected])


  const handleClick = () => {
    if (isHoverOrActive == true) {
      const questionData: any = [...questionIds]
      const index = questionData.indexOf(questions._id)
      questionData.splice(index, 1)
      setQuestionIds(questionData)
      setselected(--selected)
      setisHoverOrActive(!isHoverOrActive)
    } else {
      if (questionIds?.length < 3) {
        const questionData: any = [...questionIds]
        questionData.push(questions._id)
        setQuestionIds(questionData)
        setselected(++selected)
        setisHoverOrActive(!isHoverOrActive)
      }
    }
  }

  return (
    <div
      key={questions._id}
      className={`jsfkms-akmdwa ${isHoverOrActive ? "ksajdklsa" : "hasdkjashd-d"}`}
      onClick={handleClick}
      style={mainStyle}
    >
      <div className="d-flex align-items-center">
        <div className="questionIcon"><Icons iconNumber={isHoverOrActive ? 40 : 39} /></div>
        <div className="questionText"><h5>{questions.question}</h5></div>
      </div>
      <div style={timerStyle}>
        {showDelete ? (
          <div className="question-delete-hover" onClick={onDeleteClick}>
            <Icons iconNumber={111} />
          </div>
        ) : (
          <div>
            <Icons iconNumber={26} />
            <h6>{`${questions.time_duration}s`}</h6>
          </div>
        )}
      </div>
    </div>
  );
};
export default Question
