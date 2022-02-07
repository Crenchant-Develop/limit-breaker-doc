import React from "react";

function Art() {
    return (
        <>
            <div className="Image">
                <img className="Image-right" src={require('../img/arts/toyCastle.png')} alt="Toy Castle" />
            </div>
            <div className="Main-text">
                디자인 모티브는 장난감이며 전반적인 디자인은 이를 따른다.<br />
                블록 장난감 외에도 <mark>동심과 관련된 것들</mark>이 소재로 나올 것이다.<br /><br />
                화면 전체에 글로우를 적용하여 화사한 느낌을 더할 것이다.<br />
            </div>
        </>
    );
}

function Art2() {
    return (
        <>
            <div className="Image">
                <img className="Image-right" src={require('../img/arts/01.png')} alt="Art" />
            </div>
            <div className="Main-text">
                트라움과 무아르트의 디자인은 <mark>색반전</mark>을 콘셉트로 하고 있다.<br />
                또한 한쪽은 안대를 끼고, 다른 한쪽은 안대가 없다는 점에서<br />
                두 왕자의 <mark>처지</mark>와 <mark>사상의 대립</mark>을 알 수 있게끔 디자인됐다.
            </div>
        </>
    );
}

function Art3() {
    return (
        <>
            <div className="Image">
                <img className="Image-right" src={require('../img/arts/02.png')} alt="Art" />
            </div>
            <div className="Main-text">
                왕국 전역에 사는 몸이 솜뭉치로 된 종족이자 주민.<br />
                드리미아 왕국에서 가장 흔하게 볼 수 있는 주민이기도 하다.<br /><br />
                이름의 유래는 Cotton.
            </div>
        </>
    );
}

function Art4() {
    return (
        <>
            <div className="Image">
                <img className="Image-right" src={require('../img/arts/03.png')} alt="Art" />
            </div>
            <div className="Main-text">
                필로<br />
                왕국 전역에 사는 몸이 베개로 된 종족이자 주민.<br />
                몸에서 빠져나간 솜들은 어느새 모여 코토가 된다.<br />
                이름의 유래는 Pillow.<br /><br />
                마시<br />
                왕국 전역에 사는 몸이 마시멜로로 된 종족이자 주민.<br />
                이름의 유래는 Marshmallow.
            </div>
        </>
    );
}

function Art5() {
    return (
        <>
            <div className="Image">
                <img className="Image-right" src={require('../img/arts/04.png')} alt="Art" />
            </div>
            <div className="Main-text">
                슈가타운에 사는 몸이 솜사탕으로 된 종족이자 주민.<br />
                몸에서 소다향이 나며, 다른 사람들은 그것을 좋아한다.<br /><br />
                이름의 유래는 Cloud.
            </div>
        </>
    );
}

function Art6() {
    return (
        <>
            <div className="Image">
                <img className="Image-right" src={require('../img/arts/05.png')} alt="Art" />
            </div>
            <div className="Main-text">
                슈가타운에 사는 몸이 푸딩으로 된 종족이자 주민.<br />
                자신을 먹으려는 사람을 극도로 싫어하며, 과거에는<br />
                슬라임의 일종이었으나 점차 이렇게 변했다고 한다.<br /><br />
                이름의 유래는 Pudding.
            </div>
        </>
    );
}

function Art7() {
    return (
        <>
            <div className="Image">
                <img className="Image-right" src={require('../img/arts/06.png')} alt="Art" />
            </div>
            <div className="Main-text">
                캔들러<br />
                슈가타운에 사는 몸이 막대사탕으로 된 종족이자 주민.<br />
                돈을 밝히며, 의외로 그만큼 경영 감각도 뛰어나다.<br /><br />
                사탕의 요정<br />
                슈가 클라우드를 떠다니고는 하는 작은 생명체. 아무 생각이<br />
                없는 것 같지만, 자신을 먹으려고 하는 자들의 공격은 잘만 피한다.
            </div>
        </>
    );
}

function Art8() {
    return (
        <>
            <div className="Image">
                <img className="Image-right" src={require('../img/arts/07.png')} alt="Art" />
            </div>
            <div className="Main-text">
                글루카폴리스에 사는 몸이 초콜릿으로 된 종족이자 주민.<br />
                마치 인간처럼 몸 색깔이 흰색에서 갈색까지 굉장히 다양하다.<br />
                또한 지성이 높아 왕국에서도 손꼽히는 기술력을 보여준다.<br /><br />
                이름의 유래는 Choco Bar.
            </div>
        </>
    );
}

function Art9() {
    return (
        <>
            <div className="Image">
                <img className="Image-right" src={require('../img/arts/08.png')} alt="Art" />
            </div>
            <div className="Main-text">
                낡은 인형들이 꿈의 힘을 받고 뭉쳐져 다시 태어난 존재.<br />
                리베어들은 자연스럽게 모여 그들만의 문명인 푸풀루스 숲을 만들었다.<br />
                또한 겉으로는 무섭게 생겼지만 속마음은 굉장히 착하다.<br /><br />
                리베어가 입고 있는 옷이나 눈 색깔은 굉장히 다양하다.<br />
                때문에 똑같이 생긴 리베어를 만나는 것은 사실상 불가능하다.<br /><br />
                이름의 유래는 Rebirth + Bear.
            </div>
        </>
    );
}

export { Art, Art2, Art3, Art4, Art5, Art6, Art7, Art8, Art9 };