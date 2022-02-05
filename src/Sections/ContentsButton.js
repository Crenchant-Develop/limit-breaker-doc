import React from "react";
import store from '../index';
import { stateViewEnum, CurrentView, SetChangeViewState } from "../stateViewEnum";
 
function LinkSystem(e) {
    SetChangeViewState(stateViewEnum.system);
    //window.location.href = "https://drive.google.com/file/d/1o_ojIi9-_O11OPSI4iiDv8JNoA0Q_ioc/view";
}

function LinkStage(e) {
    //window.location.href = "https://drive.google.com/file/d/1vzDRf8j-ZTqiW9PFUX40VPQu8L22S8vb/view";
}

function LinkGimmick(e) {
    //window.location.href = "https://drive.google.com/file/d/1NZCicidAcOkM4gvw9BXMtmCvYHwrAUC7/view";
}

function LinkGUI(e) {
    //window.location.href = "https://drive.google.com/file/d/1M2A5GXP_tqQScn_sKRGP2Trhp2I-tIux/view";
}

function LinkArt(e) {
    //window.location.href = "https://drive.google.com/file/d/1j4PDiv3tLgS2xJ9UEaR8zHyL1o0sIHXx/view";
}

function LinkStory(e) {
    //window.location.href = "https://drive.google.com/file/d/1j4PDiv3tLgS2xJ9UEaR8zHyL1o0sIHXx/view";
}

function LinkSettings(e) {
    //window.location.href = "https://drive.google.com/file/d/1rkNaJafy8DYaxJPLKdcu2y5a5YyjdgWc/view";
}

export function ContentsButton() {
    return (
        <div className="btn-wrapper">
            <button className="btn2" onClick={LinkSystem.bind(this)}>시스템</button>
            <button className="btn" onClick={LinkStage}>스테이지</button>
            <button className="btn2" onClick={LinkGimmick}>기믹</button>
            <button className="btn" style={{ visibility: "hidden" }}></button>
            <br />
            <button className="btn" onClick={LinkGUI}>GUI</button>
            <button className="btn2" onClick={LinkArt}>아트</button>
            <button className="btn" onClick={LinkStory}>스토리</button>
            <button className="btn2" onClick={LinkSettings}>배경 설정</button>
        </div>
    );
}