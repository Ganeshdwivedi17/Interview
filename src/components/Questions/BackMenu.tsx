import { useEffect, useState } from "react";
import { useFullscreen } from "../../hooks/useFullscreen";
import SearchFilter from "../Modals/SearchFilter";
import Icons from "../icons";
import { useMediaQuery } from 'react-responsive'

const BackMenu = ({
  showScreen,
  setShowScreen,
  showRightMenu,
  setShowRightMenu,
  setJobViewContext,
}: {
  showScreen: number;
  setJobViewContext:any;
  setShowScreen: any;
  showRightMenu?: any;
  setShowRightMenu?: any;
}) => {
  const isTabletOrMobile = useMediaQuery({ query: '(min-width: 20px)' })
  const isMobile = useMediaQuery({ query: '(max-width: 425px)' });
  const [ fullscreen, setFullscreen ] = useState<boolean>(false);

  const handleClick = () => {
    setShowRightMenu(!showRightMenu);
    setFullscreen(!fullscreen);
  }

  useEffect(()=>{
    
  },[fullscreen])

  return (
    <div className={`leftSideHeader ${showScreen == 5 && isMobile ? "jdafk-aewkmw" : ""}`} style={{ position: 'absolute', top: 0, width: '100%' }}>
      <div className="d-flex justify-content-between">
        {/* {true ? (
          <button className="njkljmdasp-dawm" onClick={() => {
            setFullscreen(!fullscreen);
          }}>
            <span style={{ fontSize: fullscreen ? 30 : 20, fontWeight: 400, marginRight: 5 }}>{fullscreen ? '-' : '+'}</span>
            Full Screen
          </button>
        ) : ( 
          <></>
        )} */} 
        {
         showScreen == 6 ?
            <button
              onClick={handleClick}
              className={`kjlma0o-dwa ${fullscreen ? "sdsds" : ""}`}
              style={{background:fullscreen? "white":"blue", color: fullscreen?"blue":"white"}}
            >
              <Icons iconNumber={61} />
              Options{" "}
            </button>
            : <button
              onClick={() => {
                setShowScreen(1);
                setJobViewContext(null)
              }}
              className="kjlma0o-dwa" style={{ width: '150', marginLeft: 10 }}
            > 
              <Icons iconNumber={30} /> 
              <span className="jksdalfj-jasidm" id="jksdalfj-jasidm">Create Interview</span>
            </button>
        }
      </div>
      <SearchFilter show={false} handleClose={''} selectedFilter={''} setSelectedFilter={''} />
    </div>
  );
}; 
export default BackMenu;