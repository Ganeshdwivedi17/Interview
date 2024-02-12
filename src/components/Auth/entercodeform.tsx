import { useEffect, useRef, useState } from "react";
import Icons from "../icons";
import icon from "../../images/mail_circle.svg";
import axios from "axios";

const EnterCodeForm = ({ setshowScreen, className = '' }: { setshowScreen: any, className?: string }) => {
  const [isAgree, setisAgree] = useState(false);
  const [otp, setOtp] = useState(['', '', '', '', '']);
  const inputRefs = useRef<Array<HTMLInputElement | null>>([]);
  const handleChange = (index: number, value: string) => {
    if (value === '' || /^[^\s]+$/.test(value)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      // Move to the next input
      if (value !== '' && index < 4) {
        inputRefs.current[index + 1]?.focus();
      }
    }
  };
   const email = window.localStorage.getItem('UserEmail');
   const getEmail = async() => {
  const response = await axios.post(`${process.env.REACT_APP_PASSWORD_URL}users/verfiyOtp`,{email,otp:otp.join('')})
  console.log(response);
  if(response.data.message == "OTP Verified Successfully"){
    setshowScreen(2)
  } 
 }

useEffect(() => {
    // Focus on the first input when the component mounts
    inputRefs.current[0]?.focus();
  }, []);

  return (
    <div className={`kjjfds-janwkea ${className}`}>
      {/* <video className="bg-video" src={"/assets/blue_bg.mp4"} autoPlay loop muted></video> */}
      <div className='wave-box'>
        <div className='wave'></div>
      </div>
      <div className="jhjij-sanwe jhjij-sanwe6">
        <img src={icon} className="mb-4" />
        <h3>Enter Code</h3>
        <h4 className="ksajdsd-sjad mt-2 px-5 lh-base">
          Please check the email address associated with your account for your Verfication code.
        </h4>

        <div className="njskakd-kawmed">
          <div className="emailRowDiv sadhasdn-we d-inline-flex flex-row">
           {otp.map((digit, index) => (
            <div className="jknu-kosaember" key={index}>
              <input
                type="text"
                maxLength={1}
                value={digit}
                onChange={(e) => handleChange(index, e.target.value)}
                ref={(el) => (inputRefs.current[index] = el)}
              />
            </div>
          ))}
          </div>
          <div className="jdaskfjnas-ajaied mt-2 px-4">
            <div onClick={() => {
              setisAgree(!isAgree)
            }} className={` sandka-jwe ansks-adn ${isAgree == true ? "asfajea0dwnmd" : ""}`}>
              <h5>Didn't Receive a code?</h5>
            </div>
            <div className="ansks-adn">
              <button className="no-shadow">Resend Email</button>
            </div>
          </div>
          <div className="continueBtnDiv snasdj-sawdne">
            <button
              onClick={() => {
                getEmail()
              }} className="btn kjlsjadm-kdmsd-2">
              RESET PASSWORD
              <Icons iconNumber={77} />
            </button>
          </div>
        </div>
      </div>
      <div className="ldkjfal0-fdsnfe">
        <Icons iconNumber={64} />
      </div>
    </div>
  );
};

export default EnterCodeForm;
