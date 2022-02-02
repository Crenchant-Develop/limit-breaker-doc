import React from "react";
import logo from '../img/questLogo.png';

export default function MainView() {
    return (
        <div className="Main ">
            <header className="Main-header fade-out-box">
                <img src={logo} className="Main-logo" alt="logo" />
            </header>
        </div>
    );
}
