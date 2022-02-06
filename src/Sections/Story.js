import React from "react";

function StoryContext1() {
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

function StoryContext2() {
    return (
        <div className="Main-text">
            직접적인 대사는 나오지 않고, 상황 묘사로만 전개시킬 것이다.<br />
            서브 스테이지를 클리어할 때마다 <mark>꿈을 꾸는 듯한</mark> 로딩 창이 뜨게 하고,<br />
            로딩 창 등에서 상황을 묘사하는 일러스트가 지나가게 할 것이다.
        </div>
    );
}

function Story() {
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

function Story2() {
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

function Story3() {
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

function Story4() {
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

function Story5() {
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

function Story6() {
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

function Story7() {
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

function Story8() {
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

function Story9() {
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

function Story10() {
    return (
        <>
            <div className="Main-text-center">
                왕자는 요즘 들어 퓨어 오브의 <mark>힘이 약해졌다</mark>는 것을 깨닫고 있었다.<br />
                분명 지난번에 화풀이로 벽을 부쉈을 때 <mark>힘이 소진</mark>됐기 때문이겠지만,<br />
                이번에도 <mark>적들을 향해 던진다면</mark> 그때의 힘을 발휘할지도 모를 일이었다.
            </div>
            <div className="Storyboard-wrapper">
                <div className="Storyboard">
                    <img src={require('../img/story/026.png')} alt="Storyboard" />
                </div>
                <div className="Storyboard">
                    <img src={require('../img/story/027.png')} alt="Storyboard" />
                </div>
                <div className="Storyboard">
                    <img src={require('../img/story/028.png')} alt="Storyboard" />
                </div>
            </div>
        </>
    );
}

function Story11() {
    return (
        <>
            <div className="Main-text-center">
                다행히도 상황을 마무리하고 길을 계속 따라가자 왕자는 길을 가로막는 거울을<br />
                발견했고 그것을 <mark>깨자</mark> 슈가 클라우드로 순식간에 이동했다. 임팩테이블들은<br />
                점점 더 진화하는 듯 <mark>새롭게 바뀐 길과 함께 더 거세게 몰려오기 시작했다.</mark>
            </div>
            <div className="Storyboard-wrapper">
                <div className="Storyboard">
                    <img src={require('../img/story/029.png')} alt="Storyboard" />
                </div>
                <div className="Storyboard">
                    <img src={require('../img/story/030.png')} alt="Storyboard" />
                </div>
                <div className="Storyboard">
                    <img src={require('../img/story/031.png')} alt="Storyboard" />
                </div>
            </div>
        </>
    );
}

function Story12() {
    return (
        <>
            <div className="Main-text-center">
                슈가 클라우드에서의 일도 끝낸 뒤 그는 글루카폴리스로 들어왔다.<br />
                이 일을 빨리 끝낼 수 있겠다고 생각한 왕자는 심해진 초콜릿 스모그에<br />
                파묻히며 왜 이런 일을 겪고 있는 건지에 대해 한탄하기 시작했다.
            </div>
            <div className="Storyboard-wrapper">
                <div className="Storyboard">
                    <img src={require('../img/story/032.png')} alt="Storyboard" />
                </div>
                <div className="Storyboard">
                    <img src={require('../img/story/033.png')} alt="Storyboard" />
                </div>
                <div className="Storyboard">
                    <img src={require('../img/story/034.png')} alt="Storyboard" />
                </div>
            </div>
        </>
    );
}

function Story13() {
    return (
        <>
            <div className="Main-text-center">
                그래도 퓨어 오브가 임팩테이블을 정화하면 <mark>그 지역에 있던 이변은 사라지고,<br />
                    본래의 힘도 되돌아오는 것 같았다.</mark> 왕자는 무작정 파괴만 해도 이 왕국의 혼란을<br />
                잠재울 수 있다면 마법의 길을 나아가는 보람이 있겠다고 생각했다.
            </div>
            <div className="Storyboard-wrapper">
                <div className="Storyboard">
                    <img src={require('../img/story/029.png')} alt="Storyboard" />
                </div>
                <div className="Storyboard">
                    <img src={require('../img/story/035.png')} alt="Storyboard" />
                </div>
                <div className="Storyboard">
                    <img src={require('../img/story/010.png')} alt="Storyboard" />
                </div>
            </div>
        </>
    );
}

function Story14() {
    return (
        <>
            <div className="Main-text-center">
                하지만 왕자는 각종 지역들을 지나가면서 <mark>위화감</mark>을 느꼈는데, 인형이 폭주하고<br />
                시간이 어긋나는 등의 각종 <mark>이상 현상</mark> 속에서도 사람들은 <mark>행복해 보였기</mark> 때문이다.<br />
                오늘따라 칭찬받았던 일도 과연 진짜였던 것인지 왕자는 점점 헷갈리기 시작했다.
            </div>
            <div className="Storyboard-wrapper">
                <div className="Storyboard">
                    <img src={require('../img/story/031.png')} alt="Storyboard" />
                </div>
                <div className="Storyboard">
                    <img src={require('../img/story/036.png')} alt="Storyboard" />
                </div>
                <div className="Storyboard">
                    <img src={require('../img/story/037.png')} alt="Storyboard" />
                </div>
            </div>
        </>
    );
}

function Story15() {
    return (
        <>
            <div className="Main-text-center">
                뭔가 이상하다는 것을 어렴풋이 느끼던 왕자는 <mark>마법의 길이 끊어지는 부분</mark>을<br />
                발견하고는 다시 지상으로 내려왔다. 그리고는 그곳에서 자신을 찾는<br />
                사람을 만났는데, 그는 자신의 소중한 물건을 강도에게 뺏겼다고 했다.
            </div>
            <div className="Storyboard-wrapper">
                <div className="Storyboard">
                    <img src={require('../img/story/038.png')} alt="Storyboard" />
                </div>
                <div className="Storyboard">
                    <img src={require('../img/story/018.png')} alt="Storyboard" />
                </div>
                <div className="Storyboard">
                    <img src={require('../img/story/039.png')} alt="Storyboard" />
                </div>
            </div>
        </>
    );
}

function Story16() {
    return (
        <>
            <div className="Main-text-center">
                왕자는 그에게 자신만 믿으라는 듯한 제스처를 취한 뒤 인상착의를<br />
                전해들은 대로 사람을 찾아가 그를 제대로 혼내줬다. 하지만 그는 이 일에<br />
                전혀 관련되지도 않았으며 <mark>피해자로 보이던 사람이 오히려 악의 편이었다.</mark>
            </div>
            <div className="Storyboard-wrapper">
                <div className="Storyboard">
                    <img src={require('../img/story/040.png')} alt="Storyboard" />
                </div>
                <div className="Storyboard">
                    <img src={require('../img/story/006.png')} alt="Storyboard" />
                </div>
                <div className="Storyboard">
                    <img src={require('../img/story/041.png')} alt="Storyboard" />
                </div>
            </div>
        </>
    );
}

function Story17() {
    return (
        <>
            <div className="Main-text-center">
                왕자는 그를 쫓다가 놓치고는 상공으로 다시 돌아왔다. 그리고는 자신이<br />
                하고 있는 행동이 과연 옳은 것인가에 대해 회의감을 느끼기 시작했다.<br />
                인정받기 위해 행동하다 보면 진정으로 인정받기 어렵다는 것이었을까.
            </div>
            <div className="Storyboard-wrapper">
                <div className="Storyboard">
                    <img src={require('../img/story/038.png')} alt="Storyboard" />
                </div>
                <div className="Storyboard">
                    <img src={require('../img/story/034.png')} alt="Storyboard" />
                </div>
                <div className="Storyboard">
                    <img src={require('../img/story/033.png')} alt="Storyboard" />
                </div>
            </div>
        </>
    );
}

function Story18() {
    return (
        <>
            <div className="Main-text-center">
                <mark>진정으로 구하는 법은 무엇인 걸까</mark> 고민하던 왕자는 왕국의 끝까지 도달했으며<br />
                그곳에 있는 <mark>거울을 깨고</mark> 통로를 지나자 드리미아에서도 못 봤던 아름다운 풍경과<br />
                호화로운 성이 펼쳐졌다. 그러나 그곳에서는 <mark>임팩테이블이 몰려오고 있었다.</mark>
            </div>
            <div className="Storyboard-wrapper">
                <div className="Storyboard">
                    <img src={require('../img/story/030.png')} alt="Storyboard" />
                </div>
                <div className="Storyboard">
                    <img src={require('../img/story/002.png')} alt="Storyboard" />
                </div>
                <div className="Storyboard">
                    <img src={require('../img/story/031.png')} alt="Storyboard" />
                </div>
            </div>
        </>
    );
}

function Story19() {
    return (
        <>
            <div className="Main-text-center">
                저 멀리 보이는 성이 사실 악의 소굴이라는 것을 깨달은 왕자는<br />
                임팩테이블들을 계속해서 처치하며 거짓된 낙원을 향해 계속해서 나아갔다.<br />
                그리고 계속해서 나아갈수록 <mark>여러 마법의 길들이 모이는 지점이 생겼다.</mark>
            </div>
            <div className="Storyboard-wrapper">
                <div className="Storyboard">
                    <img src={require('../img/story/042.png')} alt="Storyboard" />
                </div>
                <div className="Storyboard">
                    <img src={require('../img/story/029.png')} alt="Storyboard" />
                </div>
                <div className="Storyboard">
                    <img src={require('../img/story/043.png')} alt="Storyboard" />
                </div>
            </div>
        </>
    );
}

function Story20() {
    return (
        <>
            <div className="Main-text-center">
                왕자는 가까스로 성 앞에 다다르는 데 성공했다. 그러자 그의 앞에<br />
                모든 일의 원흉이 나타났는데, 검은색 위주인 것 빼고는 그와 똑같이<br />
                생긴 자인 <mark>무아르트</mark>였다. 그는 악몽의 구체인 다크 오브를 들고 있었다.
            </div>
            <div className="Storyboard-wrapper">
                <div className="Storyboard">
                    <img src={require('../img/story/044.png')} alt="Storyboard" />
                </div>
                <div className="Storyboard">
                    <img src={require('../img/story/045.png')} alt="Storyboard" />
                </div>
                <div className="Storyboard">
                    <img src={require('../img/story/046.png')} alt="Storyboard" />
                </div>
            </div>
        </>
    );
}

function Story21() {
    return (
        <>
            <div className="Main-text-center">
                무아르트는 봉인됐던 <mark>악몽의 세력</mark>의 우두머리이자 현재는 <mark>이빌리아 왕국</mark>의<br />
                왕자로, 봉인에서 풀려난 뒤 거짓된 행복으로 드리미아 왕국을 채우고 순식간에<br />
                어둠의 소굴로 바꿔 버릴 계획을 본인의 수하들과 같이 꾸미고 있었다.
            </div>
            <div className="Storyboard-wrapper">
                <div className="Storyboard">
                    <img src={require('../img/story/047.png')} alt="Storyboard" />
                </div>
                <div className="Storyboard">
                    <img src={require('../img/story/048.png')} alt="Storyboard" />
                </div>
                <div className="Storyboard">
                    <img src={require('../img/story/049.png')} alt="Storyboard" />
                </div>
            </div>
        </>
    );
}

export { StoryContext1, StoryContext2 };
export { Story, Story2, Story3, Story4, Story5, Story6, Story7, Story8, Story9, Story10 };
export { Story11, Story12, Story13, Story14, Story15, Story16, Story17, Story18, Story19, Story20, Story21 };