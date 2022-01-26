import React from "react";
import options from '../img/options.png';

export function ContextFive() {
    return (
        <div className="Main-text">
            강화는 해당 요소의 레벨을 올리는 방식으로 이루어진다.<br />
            스토리상으로는 잃어버린 오브의 힘을 점차 되찾는 것이다.<br /><br />
            각 항목의 최소 레벨은 0, 최대 레벨은 10이다. (체력 제외)<br />
            레벨 0은 튜토리얼용 레벨로 튜토리얼이 끝나고 나면<br />
            전부 레벨 1이 될 것이다. <mark>(레벨 0은 인게임에서 표시되지는 않음)</mark>
            <div className="Image">
                <img className="Image-right" src={options} alt="Options" />
            </div>
        </div>
    );
}