/* eslint-disable import/no-extraneous-dependencies */
import React from "react";
import "fullpage.js/vendors/scrolloverflow"; // Optional. When using scrollOverflow:true
import ReactFullpage from "@fullpage/react-fullpage";

import logo from './questLogo.png';
import circle from './circle.svg';
import numberCircle from './numberCircle.svg';
import LayoutView from "./LayoutView";

import './App.css';

const anchors = ["firstPage", "secondPage", "thirdPage", "fourthPage"];

function MySection(props) {
    return (
        <div className="section">
            <h3>{props.children}</h3>
        </div>
    );
}

const Sections = () => (
    <ReactFullpage
        anchors={anchors}
        navigation
        navigationTooltips={anchors}
        onLeave={(origin, destination, direction) => {
            console.log("onLeave event", { origin, destination, direction });
        }}
        render={({ state, fullpageApi }) => {
            console.log("render prop change", state, fullpageApi); // eslint-disable-line no-console

            return (
                <div>
                    <MySection>
                        <MainView />
                    </MySection>

                    <MySection>
                        <MainIntro />
                    </MySection>

                    <MySection>
                        <MianContext number="1" />
                    </MySection>

                    <MySection>
                        <LayoutView title="fourthPage" content="내용4" />
                    </MySection>
                </div>
            );
        }}
    />
);

function MainIntro() {
    return (
        <div className="Main">
            <header className="Main-header">
                <img src={circle} className="Main-circle" alt="circle" />
                <div className="Center-text">목차</div>
            </header>
        </div>
    );
}

function MianContext(props) {

    const titleImage = () => {
        return (
            <div>
                <div class="flex-container">
                    <div className="Number" >
                        <div className="Number-circle" alt="numberCircle"
                            style = {{
                                backgroundImage: `url( ${numberCircle} )`
                            }}
                        >
                            <div className="Number-text">
                                {props.number}
                            </div>
                        </div>
                    </div>

                    <div className="Bar"/>
                </div>
            </div>
        );
    }

    const title = (image) => {
        return (
            <>
                {titleImage()}
                제목
            </>
        );
    }

    const contentText = () => {
        return (
            <>
                테스트
            </>
        );
    }


    return (
        <>
            <LayoutView title={title()} content={contentText()} />
        </>
    );
}

function MainView() {
    return (
        <div className="Main">
            <header className="Main-header">
                <img src={logo} className="Main-logo" alt="logo" />
                <p>
                    Limit Breaker 기획서
                </p>
            </header>
        </div>
    );
}

function App() {
    return (<Sections />);
}

export default App;
