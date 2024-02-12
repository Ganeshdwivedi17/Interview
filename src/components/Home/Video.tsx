import { useEffect, useState, useRef, useCallback } from "react";
import { getAge } from "../../utils/validate-email";
import profile_pic from "../../images/Profile Pic.svg";
import { useAuth } from "../../hooks/useAuth";
import Icons from "../icons";
import axios from "axios";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import PaymentForm from "../Modals/PaymentForm";
import { onGetInvoices, onGetSubscriptionDetails } from "../../utils/stripe";


const stripePromise: any = loadStripe(
  'pk_test_51MgVdpIwSlV98qeBn0Y381DODqMPtMUpkj2sZw94M4bspKoZFZPDqv9SqHUNn4R5ikNLe5jrKeLAnk6o4yjnjFKM00NQikS8rT'
);

const VideoForm = ({
  selectedInterview,
  AnswerfilteredInterviews,
  favourite,
}: {
  selectedInterview?: any;
  favourite?: any;
  AnswerfilteredInterviews?: any;
}) => {
  const [job, setSetJob] = useState<any>(null);
  const [playing, setPlaying] = useState(false);
  const [hoverShow, setHoverShow] = useState(false);
  const [showSlide, setShowSlide] = useState<number>(0);
  const [userVideo, setUserVideo] = useState<any>();
  const [playPromise, setPlayPromise] = useState<any>(undefined);
  const subscribed = localStorage.getItem("subscribed");
  const [duration, setDuration] = useState<any>();
  const { user,setUser } = useAuth();
  const videoRef = useRef<any>(null); 
  const [showPayment, setShowPayment] = useState(false);
   const [invoices, setInvoices] = useState<Record<string, any>[]>([]);
  const [subscription, setSubscription] = useState<
    Record<string, any>[] | null
  >(null);
  const [VideoLoaded, setVideoLoaded] = useState(false)

  const role = user?.chat?.user?.users[user.id].role;   
  const FREEVIDEOS = AnswerfilteredInterviews?.slice(0, 4);

  
 useEffect(() => {
    $('.overlay.btn-close').hide();
    $('.overlay.btn-close').click(function () {
      // @ts-ignore
      $(this).hide();
    });

    $('.btn-show').click(function () {
      $('.overlay.btn-close').show();
    });

    $(window).click(function () {

      if ($('.overlay.show').length === 0) {
        $('.overlay.btn-close').hide();
      }
    });
  }, [showPayment]);

  const getStripeInfo = useCallback(async (sId?: string, cId?: string) => {
    (cId || user?.customerId) &&
      setInvoices(await onGetInvoices(cId ?? user?.customerId!));
    (sId || user?.subId) &&
      setSubscription(await onGetSubscriptionDetails(sId ?? user?.subId!));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const updateUser = (customerId: string, subId: string) => {
    axios
      .patch(`${process.env.REACT_APP_BACKEND_URL}/users/${user?.id}`, {
        customerId,
        subId
      })
      .then(res => {
        user && setUser({ ...user, customerId, subId });
      });
  };

  useEffect(() => {
    getStripeInfo();
  }, [getStripeInfo]);


const handlePaymentClose = () => {setShowPayment(false);}  

  useEffect(() => {
    if (selectedInterview?.id) {
      setPlaying(false);
      setHoverShow(false);
      getJobDetails(selectedInterview.id);
    }
  }, [selectedInterview]);


  useEffect(() => {
    if(VideoLoaded){
    if (videoRef?.current) {
      if (playing) {
         setPlayPromise(videoRef?.current?.play());
        if (subscribed === "false" && role === "user") {
         if(FREEVIDEOS[0]?.id == selectedInterview?.id || FREEVIDEOS[1]?.id == selectedInterview?.id || FREEVIDEOS[2]?.id == selectedInterview?.id){
          let videoSrc = videoRef?.current?.currentSrc
          if(FREEVIDEOS[2]?.id == selectedInterview?.id){
            if(videoSrc == userVideo[2].questions[0].video_url){    
               videoRef?.current?.pause();
               setPlayPromise(undefined);
               setPlaying(false);
               $('.overlay').hide();
               setShowPayment(true);
            }
          }
         }else{
              $('.overlay').hide();
               setShowPayment(true);
            videoRef?.current?.pause();
           setPlayPromise(undefined);
           setPlaying(false);
         }
        }else{
           setPlayPromise(videoRef?.current?.play());
        }
      } else {
        if (playPromise != undefined) {
          playPromise
            .then((_: any) => {
              videoRef?.current?.pause();
            })
            .catch(() => {})
            .finally(() => {
              setPlayPromise(undefined);
            });
        } else {
          videoRef.current.pause();
          setPlayPromise(undefined);
        }
      }
    }
    }else{
      setPlayPromise(videoRef?.current?.pause())
    }
  }, [playing, showSlide, userVideo, ]);

  const getJobDetails = (_id: any) => {
    axios
      .get(`${process.env.REACT_APP_BACKEND_URL}/interviews/${_id}`)
      .then(async (response) => {
        setSetJob(response.data);
        getAllQuestions(response.data);
      })
      .catch(console.error);
  };

  const getAllQuestions = (job: any) => {
    let question_id: any = [];
    axios
      .get(process.env.REACT_APP_BACKEND_URL + "/interviews")
      .then((response: any) => {
        let data = response.data;
        let filterData = data.filter((item: any) => {
          if (
            job.interviewee._id === item.interviewee._id &&
            job.job_id === item.job_id
          ) {
            if (!question_id.includes(item.questions[0].question_id?._id)) {
              question_id.push(item.questions[0].question_id?._id);
              return item;
            }
          }
        });
        setUserVideo(filterData);
        setShowSlide(0)
      });
  };

  const handleSlider = (x: number) => {
    // React.MouseEventHandler<HTMLSpanElement>
    const video = videoRef.current;
    setShowSlide(x);
    videoRef.current?.load();
    console.log(userVideo[showSlide].questions[0].video_url)
    videoRef.current.pause();
    setPlayPromise(undefined);
    setPlaying(false);
  };

  const handleTime = () => {
    let time = videoRef.current?.duration;
    if (!isNaN(time) || isFinite(time)) {
      setDuration(time);
    }
  };

  const handleVideoEnd = () => {
    if (showSlide == 2) {
      setShowSlide(0);
    } else {
      setShowSlide((x) => x + 1);
    }
    videoRef.current.pause();
    setPlayPromise(undefined);
    setPlaying(false);
  };


  useEffect(() => {videoRef.current?.load();}, [job, userVideo, showSlide]);

  const _showHover = () => {
    setHoverShow(true);
  };

  const _hideHover = () => {
    setHoverShow(false);
  };

  return (
    <div className="kjjfds-janwkea4">
      {/* <img src={require("../../images/i6.png")} /> */}
      <div
        className={`jljdskaflsd ${
          hoverShow ? `d-flex` : `d-${playing ? "none" : "flex"}`
        }`}
      >
         <Elements stripe={stripePromise}>
         {showPayment && (
          <PaymentForm
              handleClose={handlePaymentClose}
            successHandle={(sId, cId) => {
              updateUser(cId ?? '', sId);
              getStripeInfo(sId, cId);
            }}
          />
        )}
        </Elements>
        <div className="kldfjads">
          <div style={{ width: "47px", height: "47px", borderRadius: "50%" }}>
            <img
              src={
                selectedInterview?.interviewee?.profile_image
                  ? selectedInterview?.interviewee?.profile_image
                  : profile_pic
              }
              alt="profile"
              height="100%"
              width="100%"
            />
          </div>
          <div>
            <h5>
              {selectedInterview?.interviewee?.name || "Sarah Pillman-Murphy"}
            </h5>
            <h6>
              <Icons iconNumber={17} />
              {getAge(selectedInterview?.interviewee?.birth_date)}, &nbsp;
              {selectedInterview?.interviewee?.location || "-"}
            </h6>
          </div>
        </div>
        {favourite ? (
          <div className="odjfks-amds">
            {/* <Icons iconNumber={65} /> */}

            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="61"
              height="60"
              viewBox="0 0 61 60"
              fill="none"
            >
              <path
                d="M44.6734 16.7575L42.1474 10.7527C42.096 10.6333 42.0006 10.5289 41.8684 10.4767C41.6041 10.3648 41.303 10.4841 41.1929 10.7527L38.6669 16.7649L32.5087 17.3258L32.2787 17.3468C32.2431 17.3488 32.2075 17.354 32.1726 17.3628C32.0775 17.3866 31.9867 17.4365 31.9115 17.5183C31.728 17.7347 31.75 18.0703 31.9629 18.2568L36.8092 22.5534L35.3773 28.9237C35.348 29.0506 35.3627 29.1923 35.4361 29.3116C35.583 29.5578 35.8987 29.6398 36.141 29.4907L41.6628 26.1339L47.1699 29.4757C47.28 29.5503 47.4269 29.5802 47.5664 29.5503C47.8454 29.4832 48.0217 29.2072 47.9556 28.9237L46.5237 22.5534L48.9255 20.4241L50.5034 19.0251L51.37 18.2568C51.4728 18.1673 51.5315 18.048 51.5462 17.9062C51.5683 17.6153 51.3627 17.3617 51.0763 17.3393L44.6734 16.7575Z"
                fill="white"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M61 25.3012V60L15.703 15.4458C16.3698 15.5154 17.1806 15.5947 18.1116 15.6858C21.6175 16.0289 26.8314 16.539 32.5087 17.3258L32.2787 17.3468C32.2431 17.3488 32.2075 17.354 32.1726 17.3628C32.0775 17.3866 31.9867 17.4365 31.9115 17.5183C31.728 17.7347 31.75 18.0703 31.9629 18.2568L36.8092 22.5534L35.3773 28.9237C35.348 29.0506 35.3627 29.1923 35.4361 29.3116C35.583 29.5578 35.8987 29.6398 36.141 29.4907L41.6628 26.1339L47.1699 29.4757C47.28 29.5503 47.4269 29.5802 47.5664 29.5503C47.8454 29.4832 48.0217 29.2072 47.9556 28.9237L46.5237 22.5534L48.9255 20.4241C53.8574 21.7081 58.1931 23.3064 61 25.3012Z"
                fill="#FFB800"
              />
              <path
                d="M0 0L15.703 15.4458C16.3698 15.5154 17.1806 15.5947 18.1116 15.6858C21.6175 16.0289 26.8314 16.539 32.5087 17.3258L38.6669 16.7649L41.1929 10.7527C41.303 10.4841 41.6041 10.3648 41.8684 10.4767C42.0006 10.5289 42.096 10.6333 42.1474 10.7527L44.6734 16.7575L51.0763 17.3393C51.3627 17.3617 51.5683 17.6153 51.5462 17.9062C51.5315 18.048 51.4728 18.1673 51.37 18.2568L50.5034 19.0251L48.9255 20.4241C53.8574 21.7081 58.1931 23.3064 61 25.3012V22C61 9.84974 51.1503 0 39 0H0Z"
                fill="#FFC700"
              />
            </svg>
          </div>
        ) : null}
      </div>
      <div
        className="kjdflmas-sdmfe kamnask-asnw kljdnas-jdnwd"
        onMouseOver={_showHover}
        onMouseOut={_hideHover}
      >
        {selectedInterview?.videoLink && selectedInterview?.id && userVideo ? (
          <video
            key={userVideo[showSlide].questions[0].video_url}
            ref={videoRef}
            onLoadedMetadata={()=>{setVideoLoaded(true)}}
            style={{
              position: "relative",
              borderRadius: 25,
              width: "99%",
              background: "black",
            }}
            onTimeUpdate={handleTime}
            onEnded={handleVideoEnd}
          >
            <source
              src={userVideo[showSlide].questions[0].video_url}
              type="video/mp4"
            />
            Couldn't load video.
          </video>
        ) : null}

        <div
          style={{ position: "absolute", width: "100%", height: "100%" }}
          className={`${
            hoverShow ? `d-flex` : `d-${playing ? "none" : "flex"}`
          }`}
        >
          <div className="d-flex justify-content-between skdjand-wkemd ksljfsa-asjd">
            <div className="circleButtons">
              <h5></h5>
            </div>
            <div
              className="circleButtons"
              onClick={() => {
                setPlaying(!playing);
              }}
            >
              <Icons iconNumber={playing ? 20.1 : 20} />
              <h5>{playing ? "Pause" : "Watch"}</h5>
            </div>
            <div className="circleButtons">
              <h5></h5>
            </div>
          </div>
        </div>
        <div
          className={`klasdjf-jdsifm d-${playing ? "none" : "flex"}`}
          style={{ width: "99%", left: 1 }}
        ></div>

        <div className="kdjasldk-ajsdmkd">
          {/* <img src={require('../../images/i8.png')} /> */}
          <div className="slider-dots">
            <span
              style={{ background: showSlide === 0 ? "#1fdacd" : "grey" }}
              onClick={() => handleSlider(0)}
            ></span>
            <span
              style={{ background: showSlide === 1 ? "#1fdacd" : "grey" }}
              onClick={() => handleSlider(1)}
            ></span>
            <span
              style={{ background: showSlide === 2 ? "#1fdacd" : "grey" }}
              onClick={() => handleSlider(2)}
            ></span>
          </div>
        </div>
        <div
          className={`kjfds-jandsa ${
            hoverShow ? `d-flex` : `d-${playing ? "none" : "flex"}`
          }`}
        ></div>
        <div
          className={`kjjsad-awek ${
            hoverShow ? `d-flex` : `d-${playing ? "none" : "flex"}`
          }`}
          style={{
            width: "93%",
            borderRadius: 12,
          }}
        ></div>
        <div
          className={`kjdsia-ajdwnkd ${
            hoverShow ? `d-flex` : `d-${playing ? "none" : "flex"}`
          }`}
        >
          <Icons iconNumber={25} />
          <h5>
            {userVideo
              ? userVideo[showSlide]?.questions[0]?.question_id?.question
              : "What are your strengths and weaknesses?"}
          </h5>
          <div className="kjda-ejmnwae">
            <Icons iconNumber={26} />
            <h6>{duration ? `${duration}s` : "30s"}</h6>
          </div>
        </div>
      </div>
      <div className="ldkjfal0-fdsnfe1">
        <Icons iconNumber={63} />
      </div>
    </div>
  );
};

export default VideoForm;