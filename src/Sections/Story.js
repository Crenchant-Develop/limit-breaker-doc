import React from "react";

export function StoryContext1() {
    return (
        <div className="Main-text">
            스테이지들의 콘셉트를 확고히 하고, 각 스테이지들이 유기적으로<br />
            연결되게 하며 게임성에 대한 개연성을 확보하는 것을 목적으로 한다.<br />
            또한 <mark>겉으로는 밝지만 속으로는 어두운 스토리</mark>를 쓰는 것이 목적이다.<br /><br />
            주인공인 왕자의 성장담을 다루고 있으며, 주인공이 명예욕으로 영웅이<br />
            되고 싶어했지만 결국 필요한 것은 진정한 희생이었다는 것이 주제이다.
        </div>
    );
}

export function StoryContext2() {
    return (
        <div className="Main-text">
            직접적인 대사는 나오지 않고, 상황 묘사로만 전개시킬 것이다.<br />
            서브 스테이지를 클리어할 때마다 <mark>꿈을 꾸는 듯한</mark> 로딩 창이 뜨게 하고,<br />
            로딩 창 등에서 상황을 묘사하는 일러스트가 지나가게 할 것이다.
        </div>
    );
}

export function Story() {
    return (
        <>
            <div className="Main-text-center">
                둥둥 떠다니는 거대한 침대 위에 있고 온통 행복한 기억들과 꿈들로<br />
                이루어진 <mark>드리미아 왕국.</mark> 그곳에는 <mark>트라움</mark>이라는 이름의 한 왕자가 있었다.
            </div>
            <div className="Storyboard-wrapper">
                <div className="Storyboard">
                    <img src={require('../img/story/001.png')} alt="Storyboard" />
                </div>
                <div className="Storyboard">
                    <img src={require('../img/story/002.png')} alt="Storyboard" />
                </div>
                <div className="Storyboard">
                    <img src={require('../img/story/003.png')} alt="Storyboard" />
                </div>
            </div>
        </>
    );
}

export function Story2() {
    return (
        <>
            <div className="Main-text-center">
                그는 호전적인 성향이라 구박을 많이 받았었다. 왕가의 보물인 <mark>퓨어 오브</mark>를<br />
                가지고 나가 곤란한 사람을 도와주겠다며 근처 아무 사람이나 붙잡은 다음 자신의<br />
                도움을 받으라며 협박을 했고, 도움이 되기는 커녕 결국 역효과를 냈기 때문이다.
            </div>
            <div className="Storyboard-wrapper">
                <div className="Storyboard">
                    <img src={require('../img/story/004.png')} alt="Storyboard" />
                </div>
                <div className="Storyboard">
                    <img src={require('../img/story/005.png')} alt="Storyboard" />
                </div>
                <div className="Storyboard">
                    <img src={require('../img/story/006.png')} alt="Storyboard" />
                </div>
            </div>
        </>
    );
}

export function Story3() {
    return (
        <>
            <div className="Main-text-center">
                이유를 설명하자면 왕자는 홧김에 오브를 던졌고 그 탓에 주민들이 살던 마을이<br />
                무너진 것이다. 왕가 대대로 전해져 내려오는 퓨어 오브. <mark>순수한 마력</mark>을 가진 자만이<br />
                퓨어 오브를 사용해 악몽을 예견하고 잠재울 수 있다고 전해져 내려왔다.
            </div>
            <div className="Storyboard-wrapper">
                <div className="Storyboard">
                    <img src={require('../img/story/007.png')} alt="Storyboard" />
                </div>
                <div className="Storyboard">
                    <img src={require('../img/story/008.png')} alt="Storyboard" />
                </div>
                <div className="Storyboard">
                    <img src={require('../img/story/009.png')} alt="Storyboard" />
                </div>
            </div>
        </>
    );
}

export function Story4() {
    return (
        <>
            <div className="Main-text-center">
                백성을 위한 희생 없이 명예만 추구하다 사고치는 왕자. 그는 순수한<br />
                마력을 가졌다고 볼 수 없었다. 왕 또한 왕자를 탐탁치 않게 여겼다.
            </div>
            <div className="Storyboard-wrapper">
                <div className="Storyboard">
                    <img src={require('../img/story/010.png')} alt="Storyboard" />
                </div>
                <div className="Storyboard">
                    <img src={require('../img/story/011.png')} alt="Storyboard" />
                </div>
                <div className="Storyboard">
                    <img src={require('../img/story/012.png')} alt="Storyboard" />
                </div>
            </div>
        </>
    );
}

export function Story5() {
    return (
        <>
            <div className="Main-text-center">
                하지만 오늘따라 왕과 신하들은 그에게 칭찬도 하고 그를 인정해 주었고 그는<br />
                <mark>뭔가 이상하다는 낌새는 느꼈어도</mark> 아무러면 어떻겠냐는 식으로 넘어갔다.<br />
                원래라면 명예만을 추구한다는 이유로 구박을 받았겠지만 그에게는 <mark>인정이 전부</mark>였다.
            </div>
            <div className="Storyboard-wrapper">
                <div className="Storyboard">
                    <img src={require('../img/story/013.png')} alt="Storyboard" />
                </div>
                <div className="Storyboard">
                    <img src={require('../img/story/014.png')} alt="Storyboard" />
                </div>
                <div className="Storyboard">
                    <img src={require('../img/story/015.png')} alt="Storyboard" />
                </div>
            </div>
        </>
    );
}

export function Story6() {
    return (
        <>
            <div className="Main-text-center">
                그로부터 얼마 뒤 성밑 마을인 토이타운에 불이 났다는 소식이 성에 전해졌다.<br />
                왕자는 칭찬받은 김에 더 인정받기 위해 이번에야말로 <mark>퓨어 오브를 제대로<br />
                써보겠다며</mark> 성 밖으로 뛰어갔으며 역시나 마을은 불길에 휩싸여 있었다.
            </div>
            <div className="Storyboard-wrapper">
                <div className="Storyboard">
                    <img src={require('../img/story/016.png')} alt="Storyboard" />
                </div>
                <div className="Storyboard">
                    <img src={require('../img/story/005.png')} alt="Storyboard" />
                </div>
                <div className="Storyboard">
                    <img src={require('../img/story/017.png')} alt="Storyboard" />
                </div>
            </div>
        </>
    );
}

export function Story7() {
    return (
        <>
            <div className="Main-text-center">
                왕자가 마을에 난 불길을 향해 다가가려는 순간 불의 형상을 한 <mark>신기루</mark>는<br />
                순식간에 사라졌고, 왕자는 갑자기 무슨 일인가 싶어 마을 안으로 들어가 보았다.<br />
                그러자 마을 안에는 별 일이 없었지만 하늘 위를 쳐다보니 <mark>수상한 그림자</mark>가 있었다.
            </div>
            <div className="Storyboard-wrapper">
                <div className="Storyboard">
                    <img src={require('../img/story/018.png')} alt="Storyboard" />
                </div>
                <div className="Storyboard">
                    <img src={require('../img/story/019.png')} alt="Storyboard" />
                </div>
                <div className="Storyboard">
                    <img src={require('../img/story/020.png')} alt="Storyboard" />
                </div>
            </div>
        </>
    );
}

export function Story8() {
    return (
        <>
            <div className="Main-text-center">
                왕자는 24시간 내내 <mark>자각몽</mark>을 꾸고 있으며 꿈 속에서 날아다니는 것이 현실에도<br />
                적용되어 토이타운의 상공에 도달할 수 있었다. 이게 어떻게 된 일인지 확인하려는<br />
                순간 왕자는 <mark>이상한 길</mark>을 발견했고, 그곳에서는 왠지 <mark>강한 마력</mark>이 느껴졌다.
            </div>
            <div className="Storyboard-wrapper">
                <div className="Storyboard">
                    <img src={require('../img/story/021.png')} alt="Storyboard" />
                </div>
                <div className="Storyboard">
                    <img src={require('../img/story/022.png')} alt="Storyboard" />
                </div>
                <div className="Storyboard">
                    <img src={require('../img/story/023.png')} alt="Storyboard" />
                </div>
            </div>
        </>
    );
}

export function Story9() {
    return (
        <>
            <div className="Main-text-center">
                그곳에서는 토이타운에서 볼 수 있었던 각종 물체들이 마법의 길을 타고<br />
                이쪽으로 몰려오고 있었고, 왕자는 뭔지는 모르겠지만 저 앞에 보이는 것들을<br />
                물리치고 <mark>사람들에게 인정받기 위해서라도</mark> 퓨어 오브를 쓰기로 결심했다.
            </div>
            <div className="Storyboard-wrapper">
                <div className="Storyboard">
                    <img src={require('../img/story/024.png')} alt="Storyboard" />
                </div>
                <div className="Storyboard">
                    <img src={require('../img/story/011.png')} alt="Storyboard" />
                </div>
                <div className="Storyboard">
                    <img src={require('../img/story/025.png')} alt="Storyboard" />
                </div>
            </div>
        </>
    );
}