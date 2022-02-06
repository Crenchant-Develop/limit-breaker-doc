import React from "react";

function GUI() {
    return (
        <>
            <div className="Main-text">
                본 게임이 시작하기 전에 들르게 되는 화면이다.<br />
                스테이지 선택, 오브 강화 등 다양한 것들을 선택할 수 있다.
            </div>
            <div className="Image">
                <img className="Image-right" src={require('../img/mainPage.png')} alt="GUI" />
            </div>
        </>
    );
}

function GUI2() {
    return (
        <>
            <div className="Main-text">
                메인 화면에서 <mark>스테이지 선택</mark>에 들어갔을 때 보게 되는 화면이다.<br />
                스테이지의 이름과 상징물을 내세움으로써 컨셉을 강조하는 것이 목적이다.
            </div>
            <div className="Image">
                <img className="Image-right" src={require('../img/mainPage2.png')} alt="GUI" />
            </div>
        </>
    );
}

function GUI3() {
    return (
        <>
            <div className="Main-text">
                메인 화면에서 <mark>오브 강화</mark>에 들어갔을 때 보게 되는 화면이다.<br />
                다양한 강화 요소들과 해당 요소를 직관적으로 보여주는 아이콘들,<br />
                그리고 그 아래쪽에 있는 현재 레벨 등으로 편한 강화가 가능하게 한다.
            </div>
            <div className="Image">
                <img className="Image-right" src={require('../img/options.png')} alt="GUI" />
            </div>
        </>
    );
}

function GUI4() {
    return (
        <>
            <div className="Main-text">
                클릭을 유지한 시간에 비례하여 게이지가 왼쪽에서부터 차오르며<br />
                화면 아래쪽에 길쭉하게 배치함으로써 눈에 잘 들어오게 한다.<br /><br />
                차오를수록 초록색에서 점차 빨간색으로 변하게 하여 충전된다는 것을<br />
                직관적으로 보여주면서 완충될 시 자동으로 날려진다는 것을 강조한다.
            </div>
            <div className="Image">
                <img className="Image-right" src={require('../img/gaugeUI.png')} alt="GUI" />
            </div>
        </>
    );
}

function GUI5() {
    return (
        <>
            <div className="Main-text">
                퓨어 오브의 HP는 좌측 상단에 있는 하트로 표시하며 하트가 깎이면<br />
                짙은 회색으로 보이게 해 비어 있는 체력이라는 것을 각인시킨다.
            </div>
            <div className="Image">
                <img className="Image-right" src={require('../img/heartUI.png')} alt="GUI" />
            </div>
        </>
    );
}

function GUI6() {
    return (
        <>
            <div className="Main-text">
                보스 개체의 체력 바는 화면 위쪽에 고정하여 표시한다. 이를 통해<br />
                보스가 나타났다는 것을 효율적으로 각인시키고 가시성도 높인다.
            </div>
            <div className="Image">
                <img className="Image-right" src={require('../img/bossHealthUI.png')} alt="GUI" />
            </div>
        </>
    );
}

export { GUI, GUI2, GUI3, GUI4, GUI5, GUI6 };