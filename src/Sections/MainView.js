import React from "react";
import logo from '../questLogo.png';

export function MainView() {
    return (
        <div className="Main">
            <header className="Main-header">
                <img src={logo} className="Main-logo" alt="logo" />
                <p>
                    Limit Breaker 기획서
                </p>
            </header>
        </div>
    );
}
