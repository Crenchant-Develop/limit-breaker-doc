/* eslint-disable import/no-extraneous-dependencies */
import React from "react";
import { useState } from 'react';

import "fullpage.js/vendors/scrolloverflow"; // Optional. When using scrollOverflow:true

import { Section } from "./Section";
import MainView from "./Sections/MainView";
import ScrollElements from "./ScrollElements";
import { useDispatch, useSelector } from 'react-redux';

import './/css/Fade.css';
import './/css/App.css';
import './/css/Button.css';
import './/css/Main.css';
import './/css/Text.css';
import './/css/Title.css';
import './/css/Image.css';
import { stateViewEnum, CurrentView, OnChangeView, NextView } from "./stateViewEnum";

const style = {
    backgroundColor: '#222A35',
    color: 'white'
};

//이제 스플래시 인트로 Logo 화면이 구현되었습니다.
//state 변수인 isIntro가 2초 뒤 true로 변하면서 본문이 보이게 변경했습니다.
function App() {

    const initState = function(state)
    {
        return state;
    }

    //currentView선언과 동시에 초기값은 stateViewEnum.intro로 설정. 0과 같은 값임.
    let currentView = useSelector(initState);
    const dispatch = useDispatch();

    switch(currentView)
    {
        case stateViewEnum.intro:
            //2초뒤에 NextView 함수를 호출함
            setTimeout(()=>NextView(dispatch), 2000);
            style.backgroundColor = '#222A35';
            return (
                <div style={style}>
                    <MainView style={style} />
                </div>
            );
        
        case stateViewEnum.system:
            return (
                <div className="FullPage" style={style}>
                    <ScrollElements />
                </div>
            );
    }
}

export default App;