import Icons from "../icons"

const Back = ({ setMainScreen,jobViewContext,selectedInterview, setShowScreen, handleFilterClose }: { setMainScreen: any,selectedInterview?:any, setShowScreen: any, handleFilterClose?:any,jobViewContext?:any }) => {
  return   <div onClick={() => {
      if(selectedInterview){
     setShowScreen(0);
      }else{
        setMainScreen(1);
      }
    //  console.log(jobViewContext)
        if(typeof handleFilterClose === 'function') {
          handleFilterClose();
        }
      }} className="backButtonDiv backdrop-filter">
      <button className="hkjndankad-dnsd">
        <Icons iconNumber={29} />
      </button>
      <h5 className="mksaldkamaw-jdwa">Back</h5>
    </div>
  //   {/* <div className="headerTitleDiv">
  //     <div><Icons iconNumber={31} /></div>
  //     <h5 className="mksaldkamaw-jdwa">Cleaner Job in Central</h5>
  //   </div> */}
  // </div>
}

export default Back;