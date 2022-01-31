import React from "react";
import { Link, Route } from 'react-router-dom';
import { Story } from './Story';

export function LinkMain() {
    return (
        <div className="Link-text">
            <a href="https://streamable.com/13csr7" target="_blank">Limit Breaker Demo</a>
        </div>
    );
}

export function LinkSystem() {
    return (
        <div className="Link-text">
            <a href="https://drive.google.com/file/d/1o_ojIi9-_O11OPSI4iiDv8JNoA0Q_ioc/view" target="_blank">시스템 기획서</a>
        </div>
    );
}

export function LinkStage() {
    return (
        <div className="Link-text">
            <a href="https://drive.google.com/file/d/1vzDRf8j-ZTqiW9PFUX40VPQu8L22S8vb/view" target="_blank">스테이지 기획서</a>
        </div>
    );
}

export function LinkGUI() {
    return (
        <div className="Link-text">
            <a href="https://drive.google.com/file/d/1M2A5GXP_tqQScn_sKRGP2Trhp2I-tIux/view" target="_blank">GUI 기획서</a>
        </div>
    );
}

export function LinkArt() {
    return (
        <div className="Link-text">
            <a href="https://drive.google.com/file/d/1j4PDiv3tLgS2xJ9UEaR8zHyL1o0sIHXx/view" target="_blank">아트 기획서</a>
        </div>
    );
}

export function LinkStory() {
    return (
        <div>
            <div className="Link-text">
                <Link to="/story">스토리 기획서</Link>
            </div>
            <Route path="/story" component={Story} />
        </div>
    );
}

export function LinkSettings() {
    return (
        <div className="Link-text">
            <a href="https://drive.google.com/file/d/1rkNaJafy8DYaxJPLKdcu2y5a5YyjdgWc/view" target="_blank">배경 설정 기획서</a>
        </div>
    );
}