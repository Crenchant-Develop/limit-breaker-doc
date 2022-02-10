import React from "react";

function System() {
    return (
        <>
            <div className="Image">
                <img className="Image-right-square" src={require('../img/sugarCoin.png')} alt="Sugar Coin" />
            </div>
            <div className="Main-text">
                화폐는 슈가코인이라고 불리우며, 게임 내에서 재화의 역할을 한다.<br />
                슈가코인은 사탕처럼 표시되며 드림포인트로 교환이 가능하다.<br /><br />
                <mark>계급성</mark><br />크기가 큰 장애물을 파괴할수록 슈가코인이 많이 들어온다.<br /><br />
                <mark>초과성</mark><br />한계 충격량을 초과해서 파괴할수록 슈가코인이 많이 들어온다.<br /><br />
                <mark>연속성</mark><br />장애물을 한 번에 많이 파괴할수록 슈가코인이 많이 들어온다.
            </div>
        </>
    );
}

function System2() {
    return (
        <>
            <div className="Image">
                <img className="Image-right-square" src={require('../img/dreamPoint.png')} alt="Dream Point" />
            </div>
            <div className="Main-text">
                드림포인트는 <mark>스킬 강화</mark> 및 <mark>스킬 슬롯 확장용</mark>으로 지불이 가능하며<br />
                강화에 필요한 드림포인트는 레벨에 따라 이차함수적으로 증가한다.<br /><br />
                적용 공식
                <div className="code-box">
                    필요드림포인트 = Math.Pow(level, 2);
                </div><br />
                또한 1스테이지를 뺀 나머지 스테이지로 이동하기 위해서도 지불이 필요하다.
            </div>
        </>
    );
}

function System3() {
    return (
        <>
            <div className="Image">
                <img className="Image-right" src={require('../img/options.png')} alt="Options" />
            </div>
            <div className="Main-text">
                스킬 강화는 해당 요소의 레벨을 올리는 방식으로 이루어지며<br />
                스토리상으로는 잃어버린 오브의 힘을 점차 되찾는 것이다.<br /><br />
                각 항목의 최소 레벨은 0이고 체력을 제외한 최대 레벨은 10이다.<br />
                튜토리얼 한정으로 레벨 0으로 진행되며 인게임에 표시되지 않는다.
            </div>
        </>
    );
}

function System4() {
    return (
        <div className="Main-text">
            스킬들은 마치 장비처럼 스킬 슬롯에 장착이 가능하다.<br />
            처음에는 액티브 3칸 / 패시브 3칸으로 시작하여 <mark>드림포인트를<br />
            지불</mark>하는 것으로 스킬 슬롯의 칸을 늘리는 것이 가능하다.
        </div>
    );
}

function System5() {
    return (
        <>
            <div className="Image">
                <img className="Image-right" src={require('../img/options.png')} alt="Options" />
            </div>
            <div className="Main-text">
                패시브 스킬은 초록색으로 표시되며, 각각이 지니는 효과는 다음과 같다.<br /><br />
                공격력: 레벨 상승시마다 <mark>고정 피해 (damage)</mark>가 하단의 공식을 따른다.<br />
                <div className="code-box">
                    <mark>//int damage0은 레벨 0 기준 고정 피해</mark><br />
                    (hp - damage0) * (1 + (level * 0.2));
                </div>
                화력: 레벨 상승시마다 <mark>퓨어 오브의 화력 (force)이 증가</mark>한다.<br />
                체력: 레벨 상승시마다 <mark>HP가 1씩 증가</mark>한다. (유일하게 최대 레벨이 5이다.)<br />
                쾌속: 레벨 상승시마다 <mark>게이지가 차오르는 속도가 증가</mark>한다.<br />
                성장: 레벨 상승시마다 <mark>퓨어 오브의 크기 (scale)와 범위가 증가</mark>한다.<br />
                약체화: 레벨 상승시마다 <mark>임팩테이블의 최소 충격량 값 (limit)이 감소</mark>한다.
            </div>
        </>
    );
}

function System6() {
    return (
        <>
            <div className="Image">
                <img className="Image-right" src={require('../img/options.png')} alt="Options" />
            </div>
            <div className="Main-text">
                액티브 스킬은 초록색으로 표시되며, 각각이 지니는 효과는 다음과 같다.<br /><br />
                에임슛: 레벨 상승시마다 퓨어 오브가 공중에서 대상을<br />
                <mark>재조준 (리에임)하여 날릴 수 있는 횟수가 증가</mark>한다.<br />
                게이지가 2단계 이상 차 있지 않으면 사용이 불가능하다.
            </div>
        </>
    );
}

function System7() {
    return (
        <>
            <div className="Image">
                <img className="Image-right" src={require('../img/gaugeUI.png')} alt="Gauge" />
            </div>
            <div className="Main-text">
                게이지가 많이 차 있을수록 오브의 화력이 증가하며 마디선에 따라<br />
                총 3단계로 나뉘고 단계에 따라 퓨어 오브의 이펙트가 달라진다.<br /><br />
                게이지가 완충됐는데도 날려지지 않을 경우 자동으로 날려지며,<br />
                땅에 떨어진 퓨어 오브는 몇 초 뒤 사라지고 다시 활성화된다.
            </div>
        </>
    );
}

function System8() {
    return (
        <>
            <div className="Image">
                <img className="Image-right" src={require('../img/gaugeUI.png')} alt="Gauge" />
            </div>
            <div className="Main-text">
                화력(force)에 비율을 적용하며, 게이지는 선형적으로 차오른다.<br />
                적용 공식
                <div className="code-box">
                    <mark>//int maxPer는 게이지가 100%일 때 화력 배율, int minPer는 게이지가 0%일 때 화력 배율, float gaugePercent는 현재 게이지 퍼센트, int level은 현재 화력 강화 레벨</mark><br />
                    ((maxPer-minPer) * 0.01) * gaugePercent + minPer;<br />
                    minPer = 50 + level * 5;<br />
                    maxPer = 200 + level * 20;
                </div>
            </div>
        </>
    );
}

function System9() {
    return (
        <>
            <div className="Image">
                <img className="Image-right" src={require('../img/heartUI.png')} alt="Heart" />
            </div>
            <div className="Main-text">
                임팩테이블이 빨간 선을 넘어갈 때마다 퓨어 오브의 하트가<br />
                1씩 감소하고 임팩테이블은 빨간 선의 뒤쪽으로 순간이동된다.<br /><br />
                오브의 기본 하트는 2개이며, HP가 0이 되면 <mark>게임 오버</mark>된 뒤<br />
                게임 오버 화면이 뜨고 스테이지 선택 화면으로 돌아간다.<br />
                또한 서브 스테이지를 깰 때마다 하트가 전부 회복된다.
            </div>
        </>
    );
}

function System10() {
    return (
        <>
            <div className="Image">
                <img className="Image-right" src={require('../img/impactable.png')} alt="Impactable" />
            </div>
            <div className="Main-text">
                서서히 밀려오는 개체들의 집합체. 적의 역할을 한다.<br />
                1x1 개체를 1단계 개체, 2x2 개체를 2단계 개체라고 칭한다.<br /><br />
                다양한 크기가 있으며 배치도 제각각에 전부 중력의 영향을 받는다.<br />
                파괴될 시에는 파편이 흩어지며 사라질 때에는 빛에 휩싸인다.
            </div>
        </>
    );
}

function System11() {
    return (
        <>
            <div className="Image">
                <img className="Image-right" src={require('../img/impactable.png')} alt="Impactable" />
            </div>
            <div className="Main-text">
                임팩테이블에는 최소 충격량과 고정 피해, HP가 존재한다.<br /><br />
                고정 피해 (damage)<br />
                최소 충격량을 넘어선 값만큼 충격을 가하면 가해지는 대미지.<br /><br />
                HP<br />
                고정 피해를 버틸 수 있는 정도. HP가 0 미만이 되면 파괴된다.
            </div>
        </>
    );
}

function System12() {
    return (
        <>
            <div className="Image">
                <img className="Image-right" src={require('../img/impactable.png')} alt="Impactable" />
            </div>
            <div className="Main-text">
                임팩테이블이 얼마나 충격을 입었는지를 나타낸 수치로 충격량이<br />
                최소 충격량 (limit)을 뛰어넘으면 개체에게 고정 피해가 들어간다.<br />
                (최소 충격량: <mark>고정 피해를 주기 위해 줘야 하는 최소 충격량</mark>)<br /><br />
                가해지는 충격량이 커질수록 화면이 흔들리는 정도가 커진다.<br />
                또한 임팩테이블의 경우 5 단위로 이펙트의 크기가 달라질 예정이다.
            </div>
        </>
    );
}

function System13() {
    return (
        <>
            <div className="Main-text">
                임팩테이블은 크게 <mark>지상형, 반공중형, 공중형</mark>으로 나뉜다.<br />
                지상형은 땅에 붙어 다니며 공중형은 공중을 떠다니고,<br />
                반공중형은 공중을 떠다니기는 하나 높이 뜨지는 않는 종류이다.
            </div>
        </>
    );
}

function System14() {
    return (
        <>
            <div className="Image">
                <img className="Image-impactable" src={require('../img/impactable1.png')} alt="Impactable" />
            </div>
            <div className="Main-text">
                일반 개체<br />
                일반적인 임팩테이블. 쉽게 부서지며 별다른 부가 효과가 없다.<br /><br />
                분열 개체<br />
                테두리가 이중으로 있는 임팩테이블. 파괴될 시<br />
                자신보다 한 단계 낮은 4개의 일반 블록으로 나뉜다.
            </div>
        </>
    );
}

function System15() {
    return (
        <>
            <div className="Image">
                <img className="Image-impactable" src={require('../img/impactable2.png')} alt="Impactable" />
            </div>
            <div className="Main-text">
                방패 개체<br />
                앞면에 방패가 그려진 임팩테이블. 충격받아도 뒤로 밀려나지 않는다.<br /><br />
                발사 개체<br />
                앞면에 원이 그려진 임팩테이블. 수시로 1단계 개체를 발사한다.
            </div>
        </>
    );
}

function System16() {
    return (
        <>
            <div className="Image">
                <img className="Image-right" src={require('../img/impactable3.png')} alt="Impactable" />
            </div>
            <div className="Main-text">
                보스 개체<br />
                맵 한가운데를 채울 정도로 큰 크기의 임팩테이블. 유일하게<br />
                체력 바가 존재하며 파괴할 시 바로 스테이지 클리어 처리된다.<br /><br />
                HP 적용 공식
                <div className="code-box">
                    <mark>//int stage는 스테이지, int subStage는 서브 스테이지</mark><br />
                    bossBlockHP = stage * subStage * 100;
                </div>
            </div>
        </>
    );
}

function System17() {
    return (
        <div className="Main-text">
            스테이지를 클리어할 때마다 경험치가 조금씩 차오른다.<br /><br />
            보스 스테이지 (N-10 스테이지), 중보스 스테이지 (N-5 스테이지),<br />
            일반 스테이지 (그 외 스테이지) 순으로 받는 경험치가 늘어난다.<br /><br />
            5의 배수 레벨이 될 때마다 오브의 HP가 영구적으로 1 상승한다.
        </div>
    );
}

export { System, System2, System3, System4, System5, System6, System7, System8, System9, System10 };
export { System11, System12, System13, System14, System15, System16, System17 };