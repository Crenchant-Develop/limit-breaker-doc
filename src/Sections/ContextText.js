import React from "react";

export function Main() {
    return (
        <div className="Main-text">
            이 게임은 벽부수기 게임 요소를 3D로 구현하여<br />
            부수는 것에 대한 재미와 게임성을 잡는 것을 목표로 한다.<br />
            게임 엔진은 Unity이며, 3D 모바일 게임으로 개발되고 있다.<br /><br />
            퓨어 오브를 조준한 뒤 날려 임팩테이블을 화려하게 파괴하는 것이 목표이다.<br />
            점점 다가오는 임팩테이블이 빨간 선에 닿지 않게끔 효율적인 플레이를 요구한다.
        </div>
    );
}

export function LinkMain() {
    return (
        <div className="Video-source">
            <iframe src="https://www.youtube.com/embed/_BgVdRTHxcQ" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
    );
}