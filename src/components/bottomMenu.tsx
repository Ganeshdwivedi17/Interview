import React from 'react'; 
import Icons from './icons';
import { useAuth } from '../hooks/useAuth';

const BottomMenu = ({ mainScreen, setMainScreen, setShowScreen, showScreen }: { mainScreen: number, setMainScreen: any, setShowScreen:any, showScreen:any}) => {

    const { setJobViewContext } = useAuth();
    
    return <div className='kdnklms-awendwd'>
        <div onClick={() => {
            localStorage.removeItem('JobTitle')
            if(setShowScreen){setShowScreen(0)}      
            setMainScreen(1)
            setJobViewContext({});
        }} className={`khjn0-jandw ${mainScreen == 1 ? 'active' : ''}`}>
            <Icons iconNumber={53} />
            <h5>Questions</h5>
        </div>
        <div onClick={() => {
            localStorage.removeItem('JobTitle');
            if(setShowScreen){setShowScreen(0)}
            setMainScreen(2)
        }} className={`khjn0-jandw ${mainScreen == 2 ? 'active' : ''}`}>
            <Icons iconNumber={54} />
            <h5 className=''>Answers</h5>
        </div>
        <div
            onClick={() => {
                setMainScreen(4)
            }} className={`khjn0-jandw ${mainScreen == 4 ? 'active' : ''}`}>
            <Icons iconNumber={55} />
            <h5>Messages</h5>
        </div>
    </div>
}

export default BottomMenu;