/* eslint-disable import/no-extraneous-dependencies */
import React from "react";
import { useState } from 'react';

import "fullpage.js/vendors/scrolloverflow"; // Optional. When using scrollOverflow:true

import { Section } from "./Section";
import MainView from "./Sections/MainView";
import Sections from "./Sections";

import './Fade.css';
import './App.css';
import './Main.css';
import './Title.css';
import './Image.css';


//이제 스플레쉬 인트로 Logo화면이 구현되었습니다.
//state 변수인 isIntro가 3초뒤 true로 변하면서 본문이 보이게 변경했습니다.
function App() {
    const style = {
        backgroundColor: '#222A35',
        color: 'white'
    };

    const [isIntro, setIntro] = useState(true);

    const viewSctions = function () {
        setIntro(false);
    }

    if (isIntro) {
        setTimeout(viewSctions, 3000);
        style.backgroundColor = '#000000';
        return (
            <div style={style}>
                <MainView style={style} />
            </div>
        );
    }

    return (
        <div className="FullPage" style={style}>
            <Sections />
        </div>
    );
}

export default App;