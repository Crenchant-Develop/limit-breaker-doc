import React from "react";
import circle from '../img/circle.svg';


export function Contents() {
    return (
        <div className="Main">
            <header className="Main-header">
                <img src={circle} className="Main-circle" alt="circle" />
                <div className="Text-box">
                    {`　　Limit Breaker　　`}
                </div>
                <div className="Text-box-small">
                    2022-02-03
                </div>
            </header>
        </div>
    );
}