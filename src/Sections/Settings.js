import React from "react";

function Settings() {
    return (
        <div className="Main-text">
            무아르트는 트라움의 이붓형제였으나 첩의 아들인 서자였기에 어렸을 때<br />
            왕궁에서 쫓겨났고 가난한 환경에서 어머니마저 죽어 가족도 없이<br />
            쓰레기를 뒤지는 불행한 환경에서 자랐기에 이런 것들에 회의감을 느꼈다.<br /><br />
            그러던 어느 날 무아르트는 우연히 트라움이 구박만 받는 형편없는 왕자라는<br />
            사실을 깨닫고는 그를 부러워하던 감정이 전부 <mark>질투와 증오</mark>로 바뀌게 된다.<br />
            그리고는 저 자리에 자신이 있었어야 했다는 마음이 점차 커져가기 시작했다.
        </div>
    );
}

function Settings2() {
    return (
        <div className="Main-text">
            이때의 일을 계기로 그는 자신과 비슷한 신세인 동지들을 모아 왕성에 들어가<br />
            난을 펼쳤으나 이내 퓨어 오브를 든 왕에 의해 악몽으로 몰린 채 봉인당했다.<br /><br />
            트라움이 기억하고 있는 <mark>악몽을 봉인했던 그날</mark>이 바로 이때를 말하는 것.<br />
            한편 무아르트는 어둠 속에서 정신을 차린 뒤 그는 마녀사냥과도 같은 것을<br />
            당했다고 생각해 동지들과 함께 왕국을 전복할 그때를 노리기 시작했다.
        </div>
    );
}

function Settings3() {
    return (
        <>
            <div className="Image">
                <img className="Image-right-square" src={require('../img/pureOrb.png')} alt="Settings" />
            </div>
            <div className="Main-text">
                <mark>파괴</mark>와 <mark>정화</mark>의 능력을 가지고 있는 메인 오브젝트로,<br />
                퓨어 오브에 의해 파괴된 것들은 꿈을 가진 존재로 다시 태어난다.<br /><br />
                꿈의 힘이 내재되어 있으며 꿈을 실체화하는 능력이 있어<br />
                드리미아 왕국을 행복한 기억의 왕국으로 유지시킬 수 있었다.
            </div>
        </>
    );
}

function Settings4() {
    return (
        <>
            <div className="Image">
                <img className="Image-right-square" src={require('../img/darkOrb.png')} alt="Settings" />
            </div>
            <div className="Main-text">
                주민들이 악몽을 꾸지 않도록 덩어리 형태로 봉인된 오브젝트로,<br />
                저주받은 물건이기에 사람의 약한 마음을 타고 들어가 숙주로 삼는다.<br />
                퓨어 오브와 반대되는 <mark>창조</mark>와 <mark>흑화</mark>의 능력을 가지고 있다.<br /><br />
                악몽의 힘이 내재되어 있으며 설정상 모든 임팩테이블들은 다크 오브의<br />
                영향으로 주도권이 뺏기거나 새롭게 창조된 것들이다. 또한 왕이 무아르트를<br />
                봉인한 계기도, 무아르트가 본격적으로 타락한 것도 이 다크 오브 때문이다.
            </div>
        </>
    );
}

function Settings5() {
    return (
        <>
            <div className="Image">
                <img className="Image-right-square" src={require('../img/mirror.png')} alt="Settings" />
            </div>
            <div className="Main-text">
                세계와 세계를 잇는 통로와도 같은 곳. 평범한 거울이었으나<br />
                거울 속에서 다크 오브의 힘이 발현되어 <mark>타락한 형태</mark>이다.<br /><br />
                사람이나 물건이 거울 앞으로 가면 바로 거울 속에 삼켜지며,<br />
                거울 앞에 다가오게 만들기 위해 사람에게 <mark>신기루를 보여준다.</mark>
            </div>
        </>
    );
}

function Settings6() {
    return (
        <div className="Main-text">
            현혹의 거울들이 왕국 곳곳에 퍼뜨린 일종의 <mark>환각 물질</mark>. 이것에 노출되면<br />
            <mark>행복한 기분</mark>이 들지만 어떤 이상한 일이 생겨도 눈치채지 못하고 그만큼<br />
            다크 오브에 노출되기 쉬워진다. <mark>퓨어 오브를 든 존재에게는 통하지 않는다.</mark><br /><br />
            슈가 클라우드에 위치한 안개를 베이스로 농도를 아주 진하게 하여<br />
            탄생한 것이다. 익숙한 향기를 매개로 하여 서서히 중독되게 하는 것이다.
        </div>
    );
}

function Settings7() {
    return (
        <>
            <div className="Image">
                <img className="Image-right" src={require('../img/refs/mirrorWorld.png')} alt="Settings" />
            </div>
            <div className="Main-text">
                현혹의 거울 속에 자리잡은 세계로 이빌리아 왕국의 잔해와도 같은 곳.<br />
                기본적으로는 무한 거울의 방과도 같은 모습을 하고 있으나 특정 상황에서는<br />
                마치 진짜로 하늘을 날고 있는 것처럼 <mark>상공의 모습을 비출 수 있다.</mark><br /><br />
                <mark>퓨어 오브를 갖고 있지 않은 사람</mark>이나 물건이 거울 세계 안으로 들어오면<br />
                임팩테이블이라는 존재로 변하여 다크 오브에 의해 철저히 조종당한다.
            </div>
        </>
    );
}

function Settings8() {
    return (
        <div className="Main-text">
            충격을 줄 수 있는 존재라는 뜻으로 트라움이 멋대로 붙인 이름.<br /><br />
            종류는 굉장히 다양하며 보통의 블록부터 타락했거나 불쌍하게 죽은<br />
            주민들의 시체로 만든 언데드나 키메라, 현혹된 사람들의 혼이 들어간<br />
            표정이 있는 장애물들, 원래부터 무아르트의 수하였던 자들 등이 있다.
        </div>
    );
}

function Settings9() {
    return (
        <div className="Main-text">
            임팩테이블도 여러 가지 단계들이 있다. 갓 삼켜진 것들은 대개 원래부터 있던<br />
            임팩테이블에 의해 잡아먹히며 더 많이 잡아먹을수록 진화하면서 <mark>상위종</mark>이 된다.<br />
            상위종이 될 때에는 잡아먹힌 주민 혹은 <mark>악행</mark>과 연계된 형태로 변한다.<br /><br />
            무생물의 경우에는 거울 속에 오래 있을수록 혼이 빙의되어 살아 움직일 확률이<br />
            커지며 이들은 대개 미녀와 야수의 티세트들처럼 눈과 입이 달린 형태가 된다.
        </div>
    );
}

function Settings10() {
    return (
        <div className="Main-text">
            글루카폴리스에서는 조각 일부가 떨어진 코바를 발견할 수 있고<br />
            다른 지역에서도 이따금씩 코바의 일부분을 먹는 모습을 볼 수 있다.<br /><br />
            상세한 사유를 설명하자면 이렇다. 그 코바의 부모님은 무아르트의<br />
            부하들에게 살해당하고 형제자매들은 <mark>끝의 성채</mark>에 노예로 팔렸으며<br />
            본인은 그것을 막으려고 하다가 펫 괴물에게 잡아먹힐 뻔한 것이다.
        </div>
    );
}

function Settings11() {
    return (
        <div className="Main-text">
            다행히도 일부만 먹히고 가까스로 도망치는 데에는 성공했지만 그에게는<br />
            돈이 한 푼도 없었다. 그렇기에 자신의 몸 일부를 떼어내어 생활비를 번 것이다.<br /><br />
            종족 특성상 몸이 딱히 재생되지는 않기에 자신의 몸 일부를 포기해야 하지만<br />
            이변이 발생한 이후로 아까 말한 코바 이외에도 다른 코바들도 종종 돈을 이유로<br />
            자신의 몸 일부를 떼서 다른 사람들에게 과자로 파는 일이 생겨나고 있다.
        </div>
    );
}

export { Settings, Settings2, Settings3, Settings4, Settings5, Settings6, Settings7, Settings8, Settings9, Settings10, Settings11 };