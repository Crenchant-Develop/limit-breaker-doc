import React from "react";
import mainPage from '../img/mainPage.png';
import mainPage2 from '../img/mainPage2.png';

export function ContextFour() {
    return (
        <>
            <div className="Main-text-center">
                게임이 시작하기 전에 들르게 되는 화면이다.<br />
                스테이지들을 선택할 수 있고, 그동안 얻은 보상으로 오브를 강화할 수 있다.
            </div>
            <div className="Image-box-wrapper">
                <div className="Image-box">
                    <img src={mainPage} alt="Main Page 1" />
                </div>
                <div className="Image-box">
                    <img src={mainPage2} alt="Main Page 2" />
                </div>
            </div>
        </>
    );
}