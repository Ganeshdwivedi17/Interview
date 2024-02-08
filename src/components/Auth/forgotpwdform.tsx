import { useMediaQuery } from "react-responsive";

import Icons from "../../components/icons";
import icon from "../../images/reset_password.svg";
import { useState } from "react";
import axios from "axios";

const ForgotPwdForm = ({ setshowScreen,setErrorMessage, className = '' }: { setshowScreen: any, className?: string,setErrorMessage:any }) => {
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 768px)' })
  const [email,setEmail] = useState<any>("");
 const [hasError, setHasError] = useState('');
  const showError = (key: any) => {
    return hasError === key;
  };

    const getEmail = async() => {
const response = await axios.post(`http://localhost:4000/users/forget-password`,{email})
console.log(response);
  }

  return (
    <div className={`${isTabletOrMobile ? "kjjfds-janwkea" : "kjjfds-janwkea1 kjjfds-janwkea2"} white-form ${className}`}>
      <div className='wave-box'>
        <div className='wave'></div>
      </div>
      <div className={`jhjij-sanwe ${isTabletOrMobile ? "klhdlfj-ajee2" : ""}`} style={{ height: '100%', justifyContent: 'space-between', marginTop: 0, paddingTop:117 }}>
        <div style={{ flex: 1, width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <img src={icon} className="mb-4 mx-auto" style={{ width: 90, height: 90 }} />
          <h3 className={`${isTabletOrMobile ? "" : "hkjsda-jesa"}`} style={{ fontFamily: 'Roboto', fontSize: '16px', fontWeight: 600, lineHeight: '19px', letterSpacing: '0.6000000238418579px', textAlign: 'center' }}>Forgot Password?</h3>
          <h4 style={{ fontFamily: 'HK Grotesk', fontSize: 12, fontWeight: 500, lineHeight: '28px', letterSpacing: 0, textAlign: 'center' }}>Enter your Email address to receive a code to reset your password</h4>

          <div className={`${isTabletOrMobile ? "w-100" : "kdjsa-ajwnkelds"}`}>
            <div className={`${isTabletOrMobile ? "hjk-ajwednw" : ""} emailRowDiv sadhasdn-we`}>
              <div className={`jksd-kosaeknae ${showError('password') ? 'error-border' : ''}`} style={{ cursor: 'text' }} onClick={(e) => {
                const _node: HTMLInputElement | null = e?.currentTarget?.querySelector('input[name="email"]');
                if (_node) {
                  _node.focus();
                }
              }}>
                <Icons iconNumber={90} />
                <input value={email} onChange={(e)=>{setEmail(e.target.value)}} placeholder="Email" name="email" autoComplete="off" style={{ flex: 1 }} />
              </div>
            </div>
          </div>
        </div>

        <div className={`${isTabletOrMobile ? "jjlkajsd-awje-msakm3e" : ""} continueBtnDiv snasdj-sawdne`} style={{ marginBottom: 17 }}>
          <button onClick={() => {
           const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
           const isValidEmail = emailRegex.test(email);
           if(isValidEmail){ 
           setshowScreen(6)
           getEmail()
           }else{
             setHasError('email');
        setTimeout(() => {
          setHasError('');
        }, 2000);
        setErrorMessage('Invalid email address');
           }
          }} className={`btn`}>
            SEND CODE
            <div className="kdksa-ajwmd">
              <Icons iconNumber={7} />
            </div>
          </button>
        </div>
      </div>
      <div className="ldkjfal0-fdsnfe">
        <Icons iconNumber={isTabletOrMobile ? 64 : 62} />
      </div>
    </div>
  );
};

export default ForgotPwdForm;