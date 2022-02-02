/* eslint-disable import/no-extraneous-dependencies */
import React from "react";
import { useState } from 'react';

import "fullpage.js/vendors/scrolloverflow"; // Optional. When using scrollOverflow:true

import { Section } from "./Section";
import MainView from "./Sections/MainView";

import './Fade.css';
import './App.css';
import './Main.css';
import './Title.css';
import './Image.css';
import Sections from "./Sections";


//이제 스플레쉬 인트로 Logo화면이 구현되었습니다.
//state 변수인 isIntro가 3초뒤 true로 변하면서 본문이 보이게 변경했습니다.
function App() {
    const [isIntro, setIntro] = useState(true);
    if (isIntro) {
        setTimeout(() => {
            setIntro(false);
        },
            3000
        )

        return (
            <MainView />
        );
    }
    return <Sections />
}

export default App;