import React from "react";

function Stage() {
    return (
        <div className="Main-text">
            각 스테이지마다 구조는 같지만 콘셉트는 전부 다르며,<br />
            임팩테이블의 모습이 다양하게 바뀐다. 스테이지가 지날수록<br />
            임팩테이블의 종류가 많아지고 속도 또한 빨라진다.<br /><br />
            스테이지 - 서브 스테이지 - 웨이브의 구조를 취하고 있다.
            <div className="Image">
                <img className="Image-right" src={require('../img/stage.png')} alt="Reference" />
            </div>
        </div>
    );
}

function Stage2() {
    return (
        <div className="Main-text">
            각 스테이지들은 10개의 서브 스테이지로 구성되며,<br />
            외형은 전부 동일하지만 난이도는 뒤로 갈수록 올라간다.<br /><br />
            N-5와 N-10 스테이지의 3웨이브에는 보스 개체가 출현하며,<br />
            해당 스테이지들은 스토리 상 <mark>거울 세계</mark>에서 벌어지는 일이다.
            <div className="Image">
                <img className="Image-right" src={require('../img/subStage.png')} alt="Reference" />
            </div>
        </div>
    );
}

function Stage3() {
    return (
        <div className="Main-text">
            스테이지마다 <mark>총 3개의 웨이브가 존재하며</mark> 5초가 지나거나<br />
            그 전에 모든 임팩테이블이 파괴되면 다음 웨이브로 넘어간다.<br />
            대신 임팩테이블이 파괴될 때마다 <mark>남은 시간이 점차 늘어난다.</mark><br /><br />
            웨이브가 지날수록 임팩테이블이 많아지고, 속도도 빨라진다.
            <div className="Image">
                <img className="Image-right" src={require('../img/wave.png')} alt="Reference" />
            </div>
        </div>
    );
}

function Stage4() {
    return (
        <div className="Main-text">
            설정상 왕국은 <mark>꿈의 방</mark>에 있는 거대한 침대 위에 위치해 있다.<br />
            따라서 바다로 불리는 부분은 침대의 표면에 자리잡고 있으며,<br />
            바다를 제외한 나머지 지형들은 침대 위에 배치된 <mark>육지</mark>이다.<br /><br />
            각 지역들은 동심이라는 공통적인 콘셉트를 가졌지만,<br />
            지역마다 각자의 <mark>분야와 상징색</mark>이 나뉘도록 구성했다.
            <div className="Image">
                <img className="Image-right" src={require('../img/worldMap.png')} alt="World Map" />
            </div>
        </div>
    );
}

function Stage5() {
    return (
        <div className="Main-text">
            게임을 처음 시작한 플레이어를 몰입하게 만드는 것이 목표이다.<br />
            순수한 꿈을 의미하며 주요 콘셉트는 블록 장난감과 마을이다.<br /><br />
            아직까지 별다른 이상 증상은 나타나지 않는 것 같지만 이상하게<br />
            주민들의 상당수가 <mark>어딘가로 일하러 간다고 하며 없어져 있다.</mark>
        </div>
    );
}

function Stage6() {
    return (
        <div className="Main-text">
            전반적으로 구름 위를 떠다니는 것 같은 느낌을 주는 것이 목표이다.<br />
            달콤한 꿈을 의미하며 다채로운 색을 사용하여 즐거움을 줄 생각이다.<br /><br />
            평소보다 구름이 더욱 짙어져 냄새를 맡으면 환각에 빠질 것 같은<br />
            수준에 도달했다. <mark>달콤한 안개의 원재료도 사실 이곳에서 난 것.</mark>
            <div className="Image">
                <img className="Image-right" src={require('../img/stage2.png')} alt="Reference" />
            </div>
        </div>
    );
}

function Stage7() {
    return (
        <div className="Main-text-center">
            주요 콘셉트는 솜사탕과 푸딩이다.
            <div className="Image">
                <img className="Image-center" src={require('../img/refs/stage2Ref1.png')} alt="Reference" />
            </div>
        </div>
    );
}

function Stage8() {
    return (
        <div className="Main-text-center">
            주요 콘셉트는 솜사탕과 푸딩이다.
            <div className="Image">
                <img className="Image-center" src={require('../img/refs/stage2Ref2.png')} alt="Reference" />
            </div>
        </div>
    );
}

function Stage9() {
    return (
        <div className="Main-text">
            이전과는 다르게 부드러움이 아닌 딱딱함을 내세운 곳이다.<br />
            예지몽을 의미하며 주요 콘셉트는 초콜릿과 도시이다.<br />
            이름의 뜻은 그리스어로 <mark>글루카 (단맛의) + 폴리스 (도시).</mark><br /><br />
            본래 글루카폴리스는 컨셉만 초콜릿으로 꾸며진 도시였지만<br />
            <mark>달콤한 안개</mark>에 갇힌 이후로는 무고한 주민들이 희생되기 시작했다.
            <div className="Image">
                <img className="Image-right" src={require('../img/stage3.png')} alt="Reference" />
            </div>
        </div>
    );
}

function Stage10() {
    return (
        <div className="Main-text">
            이른바 미래지향적인 게임 도시. 몽중몽과 자각몽을 의미한다.<br />
            티켓이 있으면 글루카폴리스에서 열차를 타고 갈 수 있다.<br /><br />
            열차에서 자고 일어나야 갈 수 있는 곳이기 때문에 항상<br />
            자각몽을 꾸면서 다니는 왕자는 다른 방법을 써서 가야 한다.
            <div className="Image">
                <img className="Image-right" src={require('../img/stageX.png')} alt="Reference" />
            </div>
        </div>
    );
}

function Stage11() {
    return (
        <div className="Main-text-center">
            주요 콘셉트는 자각몽과 게임이다.
            <div className="Image">
                <img className="Image-center" src={require('../img/refs/stageXRef1.png')} alt="Reference" />
            </div>
        </div>
    );
}

function Stage12() {
    return (
        <div className="Main-text-center">
            주요 콘셉트는 자각몽과 게임이다.
            <div className="Image">
                <img className="Image-center" src={require('../img/refs/stageXRef2.png')} alt="Reference" />
            </div>
        </div>
    );
}

function Stage13() {
    return (
        <div className="Main-text">
            으스스하면서 몽환적인 숲 속의 어떤 마을. 되살아난 꿈을 의미하며<br />
            잊혀진 것들이 신비한 힘으로 다시 새 생명을 얻고 활동하는 곳이다.<br />
            스테이지 이름에서 푸풀루스는 <mark>라틴어로 인형, 꼭두각시</mark>를 뜻한다.<br /><br />
            최근 인형들이 폭주하고 갑자기 숲이 어두워졌다 밝아졌다 하는<br />
            <mark>이상 현상</mark>이 보고되어 사람들이 잘 드나들지 않게 된 숲이다.
            <div className="Image">
                <img className="Image-right" src={require('../img/stage4.png')} alt="Reference" />
            </div>
        </div>
    );
}

function Stage14() {
    return (
        <div className="Main-text-center">
            주요 콘셉트는 인형과 숲이다.
            <div className="Image">
                <img className="Image-center" src={require('../img/refs/stage4Ref1.png')} alt="Reference" />
            </div>
        </div>
    );
}

function Stage15() {
    return (
        <div className="Main-text-center">
            주요 콘셉트는 인형과 숲이다.
            <div className="Image">
                <img className="Image-center" src={require('../img/refs/stage4Ref2.png')} alt="Reference" />
            </div>
        </div>
    );
}

function Stage16() {
    return (
        <div className="Main-text">
            마을 한가운데에 시계탑이 위치해 있는 추억을 관리하는 마을.<br />
            회상하는 꿈을 의미하며 템푸스는 라틴어로 시간을 뜻한다.<br /><br />
            최근 <mark>왕국의 시간이 조금씩 어긋나기 시작했지만</mark> 주민들은<br />
            <mark>달콤한 안개</mark>의 효과에 빠져 해결책을 찾을 생각을 안 하고 있다.
            <div className="Image">
                <img className="Image-right" src={require('../img/stage5.png')} alt="Reference" />
            </div>
        </div>
    );
}

function Stage17() {
    return (
        <div className="Main-text-center">
            주요 콘셉트는 톱니바퀴와 추억이다.
            <div className="Image">
                <img className="Image-center" src={require('../img/refs/stage5Ref1.png')} alt="Reference" />
            </div>
        </div>
    );
}

function Stage18() {
    return (
        <div className="Main-text-center">
            주요 콘셉트는 톱니바퀴와 추억이다.
            <div className="Image">
                <img className="Image-center" src={require('../img/refs/stage5Ref2.png')} alt="Reference" />
            </div>
        </div>
    );
}

function Stage19() {
    return (
        <div className="Main-text">
            체스 보드가 위치한 평원으로 드넓은 꿈을 의미하며<br />
            퓨어 오브가 <mark>흰 체스말</mark>, 임팩테이블이 <mark>검은 체스말</mark>이 되어<br />
            서로 체스 경기를 하는 것이 스테이지의 주된 컨셉이다.<br /><br />
            스테이지 이름에서 체슬리프는 체스와 슬리프의 합성어이다.
            <div className="Image">
                <img className="Image-right" src={require('../img/stage6.png')} alt="Reference" />
            </div>
        </div>
    );
}

function Stage20() {
    return (
        <div className="Main-text-center">
            주요 콘셉트는 체스와 평원이다.
            <div className="Image">
                <img className="Image-center" src={require('../img/refs/stage6Ref1.png')} alt="Reference" />
            </div>
        </div>
    );
}

function Stage21() {
    return (
        <div className="Main-text-center">
            주요 콘셉트는 체스와 평원이다.
            <div className="Image">
                <img className="Image-center" src={require('../img/refs/stage6Ref2.png')} alt="Reference" />
            </div>
        </div>
    );
}

function Stage22() {
    return (
        <div className="Main-text">
            아무것도 없지만 이야기가 처음으로 시작되는 곳을 이미지했다.<br />
            꿈의 시작을 의미하며 7-10에서는 신비한 통로가 배경이 된다.<br /><br />
            그동안은 설원이기는 했어도 눈보라는 거의 일어나지 않았지만<br />
            최근 들어 눈보라가 심해져 <mark>새로운 이야기가 생겨나지 못하고 있다.</mark>
            <div className="Image">
                <img className="Image-right" src={require('../img/stage7.png')} alt="Reference" />
            </div>
        </div>
    );
}

function Stage23() {
    return (
        <div className="Main-text-center">
            주요 콘셉트는 백지와 종이접기이다.
            <div className="Image">
                <img className="Image-center" src={require('../img/refs/stage7Ref1.png')} alt="Reference" />
            </div>
        </div>
    );
}

function Stage24() {
    return (
        <div className="Main-text-center">
            주요 콘셉트는 백지와 종이접기이다.
            <div className="Image">
                <img className="Image-center" src={require('../img/refs/stage7Ref2.png')} alt="Reference" />
            </div>
        </div>
    );
}

function Stage25() {
    return (
        <div className="Main-text">
            7스테이지에서 신비한 통로를 타고 온 직후를 배경으로 하고<br />
            공유몽을 의미하며 <mark>그동안 나왔던 오브젝트가 총집합하여</mark> 등장한다.<br /><br />
            최종장이기 때문에 서브 스테이지가 5까지만 있으며<br />
            <mark>성채를 향해 앞으로 나아가는 것</mark>이 스테이지의 주된 컨셉이다.
            <div className="Image">
                <img className="Image-right" src={require('../img/stage8.png')} alt="Reference" />
            </div>
        </div>
    );
}

function Stage26() {
    return (
        <div className="Main-text-center">
            주요 콘셉트는 미끄럼틀과 장난감 공장이다.
            <div className="Image">
                <img className="Image-center" src={require('../img/refs/stage8Ref1.png')} alt="Reference" />
            </div>
        </div>
    );
}

function Stage27() {
    return (
        <div className="Main-text-center">
            주요 콘셉트는 미끄럼틀과 장난감 공장이다.
            <div className="Image">
                <img className="Image-center" src={require('../img/refs/stage8Ref2.png')} alt="Reference" />
            </div>
        </div>
    );
}

export { Stage, Stage2, Stage3, Stage4, Stage5, Stage6, Stage7, Stage8, Stage9, Stage10 };
export { Stage11, Stage12, Stage13, Stage14, Stage15, Stage16, Stage17, Stage18, Stage19, Stage20 };
export { Stage21, Stage22, Stage23, Stage24, Stage25, Stage26, Stage27 };