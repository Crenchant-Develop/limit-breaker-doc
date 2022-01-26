import React from "react";
import sugarCoin from '../img/sugarCoin.png';

export function ContextTen() {
    return (
        <div className="Main-text">
            화폐는 슈가코인이라고 불리우며, 게임 내에서 화폐의 역할을 한다.<br /><br />
            <mark>계급성</mark><br />크기가 큰 장애물을 파괴할수록 슈가코인이 많이 들어온다.<br /><br />
            <mark>초과성</mark><br />한계 충격량을 초과해서 파괴할수록 슈가코인이 많이 들어온다.<br /><br />
            <mark>연속성</mark><br />장애물을 한 번에 많이 파괴할수록 슈가코인이 많이 들어온다.
            <div className="Image">
                <img className="Image-right" src={sugarCoin} alt="Sugar Coin" />
                슈가코인은 사탕처럼 표시된다.
            </div>
        </div>
    );
}