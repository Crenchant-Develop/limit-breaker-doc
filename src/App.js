/* eslint-disable import/no-extraneous-dependencies */
import React from "react";

import "fullpage.js/vendors/scrolloverflow"; // Optional. When using scrollOverflow:true

import MainView from "./Sections/MainView";
import SectionsEntry from "./SectionsEntry";
import SectionsStory from "./SectionsStory";
import { useSelector } from 'react-redux';

import './/css/Fade.css';
import './/css/App.css';
import './/css/Button.css';
import './/css/Main.css';
import './/css/Text.css';
import './/css/Title.css';
import './/css/Image.css';
import { stateViewEnum, NextView } from "./stateViewEnum";


//이제 스플래시 인트로 Logo 화면이 구현되었습니다.
//state 변수인 isIntro가 2초 뒤 true로 변하면서 본문이 보이게 변경했습니다.
function App() {
    const style = {
        backgroundColor: '#222A35',
        color: 'white'
    };

    const initState = function (state) {
        return state;
    }
    //currentView선언과 동시에 초기값은 stateViewEnum.intro로 설정. 0과 같은 값임.
    let currentViewState = useSelector(initState);

    
    if (!isNaN(parseInt(sessionStorage.getItem('currentPage'))))//세션스토리지에 값이 있으면
    {
        currentViewState = parseInt(sessionStorage.getItem('currentPage'));
    }

    switch (currentViewState) {
        case stateViewEnum.intro:
            console.log("인트로: " + currentViewState);
            //2초뒤에 NextView 함수를 호출함
            setTimeout(() => NextView(currentViewState), 2000);
            return (
                <div style={{ backgroundColor: '#000000' }}>
                    <MainView />
                </div>
            );

        case stateViewEnum.main:
            console.log("메인: " + currentViewState);

            return (
                <div className="FullPage" style={style}>
                    <SectionsEntry />
                </div>
            );

        case stateViewEnum.story:
            console.log("스토리: " + currentViewState);
            return (
                <div className="FullPage" style={style}>
                    <SectionsStory />
                </div>
            );

        default: return (
            <div>
                컴포넌트 범위 밖입니다. App.js의 해당하는 case문에 컴포넌트를 추가해주세요.<br />
                현재 currentViewState 값: {currentViewState}
            </div>
        );
    }
}

export default App;