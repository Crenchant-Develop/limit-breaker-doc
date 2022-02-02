import React from "react";
import circle from '../img/circle.svg';


export function ContentsList() {
    return (
        <div className="Main">
            <header className="Main-header">
                <img src={circle} className="Main-circle" alt="circle" />
                <div className="Center-text">목차</div>
            </header>
        </div>
    );
}