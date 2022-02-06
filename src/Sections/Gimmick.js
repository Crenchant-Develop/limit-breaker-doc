import React from "react";

function Gimmick() {
    return (
        <>
            <div className="Main-text">
                장애물이 자연스럽게 넘어오는 느낌을 주기 위해 사방에는 <mark>옅은 안개</mark>가<br />
                깔려 있으며, 이 안개는 스테이지별로 다른 콘셉트를 들고 나타난다.<br /><br />
                안개는 주변 배경을 가릴 정도로 짙게 깔려 있지 않으며 임팩테이블을<br />
                가리고 스테이지들의 특색을 살리는 정도로만 사용할 예정이다.
            </div>
            <div className="Image">
                <img className="Image-right" src={require('../img/refs/gimmick.png')} alt="Gimmick" />
            </div>
        </>
    );
}

function Gimmick2() {
    return (
        <>
            <div className="table-container">
                <div className="table-grid">
                    2스테이지
                </div>
                <div className="table-grid">
                    솜사탕 구름
                </div>
                <div className="table-grid">
                    3스테이지
                </div>
                <div className="table-grid">
                    초콜릿 스모그
                </div>
                <div className="table-grid">
                    X스테이지
                </div>
                <div className="table-grid">
                    무지갯빛 안개
                </div>
                <div className="table-grid">
                    4스테이지
                </div>
                <div className="table-grid">
                    안개
                </div>
                <div className="table-grid">
                    7스테이지
                </div>
                <div className="table-grid">
                    눈보라
                </div>
            </div>
            <div className="Main-text-center">
                안개들은 전부 동일한 방식으로 색만 다르게 하여 구현할 예정이다.
            </div>
        </>
    );
}

function Gimmick3() {
    return (
        <>
            <div className="Main-text">
                3단계 개체가 처음으로 등장한다.<br /><br />
                임팩테이블은 <mark>언덕에서부터 서서히 넘어오며</mark> 스테이지에는<br />
                <mark>유리벽</mark>이 존재하여 벽에 닿으면 <mark>직각으로 빠르게 튕겨져 나간다.</mark><br />
                때문에 유리 벽을 잘 이용해서 장애물들을 파괴해야 한다.
            </div>
            <div className="Image">
                <img className="Image-right" src={require('../img/refs/gimmick1.png')} alt="Gimmick" />
            </div>
        </>
    );
}

function Gimmick4() {
    return (
        <>
            <div className="Main-text">
                4단계 개체가 처음으로 등장한다.<br /><br />
                스테이지에는 <mark>설탕 벽</mark>이 있어 벽에 닿으면 <mark>2초 동안 움직일 수 없다.</mark><br />
                때문에 설탕 벽에 최대한 닿지 않게끔 주의하면서 날려야 한다.
            </div>
            <div className="Image">
                <img className="Image-right" src={require('../img/refs/gimmick2.png')} alt="Gimmick" />
            </div>
        </>
    );
}

function Gimmick5() {
    return (
        <>
            <div className="Main-text">
                5단계 개체와 분열 개체가 처음으로 등장한다.<br /><br />
                스테이지에는 자석 칠판을 형상화한 <mark>자석 벽</mark>이 있어 조준점이 계속해서<br />
                벽으로 끌려가므로 최대한 끌려가지 않게 주의하면서 날려야 한다.
            </div>
            <div className="Image">
                <img className="Image-right" src={require('../img/refs/gimmick3.png')} alt="Gimmick" />
            </div>
        </>
    );
}

function Gimmick6() {
    return (
        <>
            <div className="Main-text">
                스테이지에는 핀볼을 연상케 하는 여러 오브젝트들이 배치될 예정이다.<br />
                또한 1스테이지와 마찬가지로 벽에 닿으면 <mark>직각으로 빠르게 튕겨져 나간다.</mark>
            </div>
            <div className="Image">
                <img className="Image-right" src={require('../img/refs/gimmickX.png')} alt="Gimmick" />
            </div>
        </>
    );
}

function Gimmick7() {
    return (
        <>
            <div className="Main-text">
                숲은 때때로 일정 간격으로 몹시 어두워지거나 눈부실 정도로<br />
                밝아져 시야가 <mark>손전등</mark>에 의존하는 것처럼 거의 가려지는 상태가 된다.<br /><br />
                이때 <mark>맵 곳곳에 있는 종을 치면</mark> 빠르게 다시 원래대로 돌아온다.<br />
                시야가 가려질 때에는 종이 있는 위치도 가려지며 어두워지고<br />
                밝아지는 데에는 <mark>약간의 시간</mark>이 걸리므로 미리 위치를 기억해 두자.
            </div>
            <div className="Image">
                <img className="Image-right" src={require('../img/refs/gimmick4.png')} alt="Gimmick" />
            </div>
        </>
    );
}

function Gimmick8() {
    return (
        <>
            <div className="Main-text">
                임팩테이블은 톱니바퀴 모양의 구멍을 통해 떨어지면서 나타나며<br />
                기본적으로 개체들의 속도가 굉장히 빠르나 맵 곳곳에 있는<br />
                기어들에 충격을 줘 임팩테이블의 <mark>시간을 5초 동안 멈출 수 있다.</mark><br /><br />
                시간이 멈춘 임팩테이블은 <mark>2번 반짝인 뒤</mark> 다시 움직이게 된다.
            </div>
        </>
    );
}

function Gimmick9() {
    return (
        <>
            <div className="Main-text">
                임팩테이블은 길 아래에서 발판을 통해 서서히 올라오며<br />
                개체들의 HP가 전반적으로 높은 대신 <mark>킹 모양의 개체를 파괴</mark>하면<br />
                자신을 포함한 <mark>모든 임팩테이블에 광역 대미지</mark>가 들어간다.<br /><br />
                또한 나이트 모양의 임팩테이블은 일정 시간마다 점프를 하면서<br />
                빠르게 빨간 선으로 다가오니 나이트를 적극적으로 공략하자.
            </div>
            <div className="Image">
                <img className="Image-right" src={require('../img/refs/gimmick6.png')} alt="Gimmick" />
            </div>
        </>
    );
}

function Gimmick10() {
    return (
        <>
            <div className="Main-text">
                임팩테이블은 눈보라 속에서 나타나며 눈보라는 시간에 따라 세기<br />
                (불투명도)가 계속 바뀌어 플레이어의 시야를 계속해서 방해한다.<br /><br />
                눈보라를 잠재우기 위해서는 <mark>맵 곳곳에 있는 버튼을 눌러야 한다.</mark><br />
                누른 버튼은 일정 시간이 지나면 <mark>딸깍 소리</mark>와 함께 다시 누를 수 있게 된다.
            </div>
        </>
    );
}

function Gimmick11() {
    return (
        <>
            <div className="Main-text">
                임팩테이블은 성채에 딸린 미끄럼틀을 타고 컨베이어 벨트에<br />
                내려오며 악한 자들에 의해 개체들이 중간에 <mark>기습적으로 추가</mark>되므로<br />
                중간중간 <mark>구름이 피어오르는 지점</mark>을 맞춰 추가되지 못하게 하자.<br /><br />
                8-5에서는 <mark>웨이브가 없이 10분 동안 계속해서 버텨야</mark> 하고,<br />
                버티는 것에 성공하면 곧바로 스테이지 클리어 처리가 된다.
            </div>
            <div className="Image">
                <img className="Image-right" src={require('../img/refs/gimmick8.png')} alt="Gimmick" />
            </div>
        </>
    );
}

export { Gimmick, Gimmick2, Gimmick3, Gimmick4, Gimmick5, Gimmick6, Gimmick7, Gimmick8, Gimmick9, Gimmick10, Gimmick11 };