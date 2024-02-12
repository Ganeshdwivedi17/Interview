import { useAuth } from "../../hooks/useAuth"
import { useShared } from "../../hooks/useShare"
import CheckFormBox from "../CheckBoxForm"
import Icons from "../icons"



const JobCard = ({ setShareScreen, setMainScreen, setFromShareScreen, sharedJobData,className = '' }: { setShareScreen: any, setMainScreen: any, setFromShareScreen: any, sharedJobData: any,className?:string }) => {

    // const { sharedJobData }: { sharedJobData: any } = useShared()
    const { isLoggedIn } = useAuth()

    return (
        <div className={`kjjfds-janwkea1 kjjfds-janwkea2 white-form height-none ${className}`} style={{ marginTop: "90px", marginBottom: "140px", marginLeft:0 }}>
            <div className='wave-box'>
                <div className='wave'></div>
            </div>
            <div className="kafms-kfsamfer">
                <div className="skfalk-smdsefds">
                    <div className="kdjnfakdsfm-jsamre">
                        <img src={require("../../images/i5.png")} />
                    </div>
                    <div className="kjdflkads-mdskf">
                        <h3>{sharedJobData?.job_title}</h3>
                        <h5>
                            <Icons iconNumber={16} /> {sharedJobData?.job_recruiter || sharedJobData?.interviewer.company_name}
                        </h5>
                        <h6>
                            <Icons iconNumber={17} /> {sharedJobData?.interviewer.location}
                        </h6>
                    </div>
                </div>
                <div className="njfk-amew">
                    {sharedJobData?.questions?.map((data: any, index: any) => (
                        <CheckFormBox questions={data} noAction={true} />
                    ))}
                </div>
                <div className="kdjsa-ajwnkelds afkfjnkas-edsm">
                    <div className="continueBtnDiv snasdj-sawdne startInterviewBtn">
                        <button className="btn" onClick={() => {
                            if (isLoggedIn()) {
                                setMainScreen(3)
                                setFromShareScreen(true)
                            }
                            else {
                                setShareScreen(2)
                            }
                        }}>
                            Start Interview
                            <div className="kdksa-ajwmd ">
                                <Icons iconNumber={7} />
                            </div>
                        </button>
                    </div>
                </div>
            </div>
            <div className="ldkjfal0-fdsnfe">
                <Icons iconNumber={62} />
            </div>
        </div>)
}

export default JobCard