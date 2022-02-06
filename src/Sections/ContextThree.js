import React from "react";
import toyCastle from '../img/refs/toyCastle.png';

export function ContextThree() {
    return (
        <div className="Main-text">
            디자인 모티브는 장난감이며 전반적인 디자인은 이를 따른다.<br />
            블록 장난감 외에도 <mark>동심과 관련된 것들</mark>이 소재로 나올 것이다.<br /><br />
            화면 전체에 글로우를 적용하여 화사한 느낌을 더할 것이다.<br />
            상세한 컨셉 아트의 경우는 <a href="https://drive.google.com/file/d/1j4PDiv3tLgS2xJ9UEaR8zHyL1o0sIHXx/view" target="_blank">이곳</a>에 있다.
            <div className="Image">
                <img className="Image-right" src={toyCastle} alt="Toy Castle" />
            </div>
        </div>
    );
}