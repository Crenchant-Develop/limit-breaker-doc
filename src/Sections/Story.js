import React from "react";
import StoryBoard from '../img/001.png';
import StoryBoard2 from '../img/002.png';
import StoryBoard3 from '../img/003.png';

export function Story() {
    return (
        <>
            <div className="Main-text-center">
                둥둥 떠다니는 거대한 침대 위에 있고 온통 행복한 기억들과 꿈들로<br />
                이루어진 <mark>드리미아 왕국.</mark> 그곳에는 <mark>트라움</mark>이라는 이름의 한 왕자가 있었다.
            </div>
            <div className="Image-box-wrapper">
                <div className="Image-box">
                    <img src={StoryBoard} alt="Storyboard 1" />
                </div>
                <div className="Image-box">
                    <img src={StoryBoard2} alt="Storyboard 2" />
                </div>
                <div className="Image-box">
                    <img src={StoryBoard3} alt="Storyboard 3" />
                </div>
            </div>
        </>
    );
}