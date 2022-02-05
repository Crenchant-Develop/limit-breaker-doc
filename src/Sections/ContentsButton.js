import React from "react";
import store from '../index';
import { stateViewEnum, CurrentView, SetChangeViewState } from "../stateViewEnum";
 


export function ContentsButton() {
    return (
        <div className="btn-wrapper">
            <button className="btn2" onClick={()=>SetChangeViewState(stateViewEnum.system)}>시스템</button>
            <button className="btn" onClick={()=>SetChangeViewState(stateViewEnum.stage)}>스테이지</button>
            <button className="btn2" onClick={()=>SetChangeViewState(stateViewEnum.gimmick)}>기믹</button>
            <button className="btn" style={{ visibility: "hidden" }}></button>
            <br />
            <button className="btn" onClick={()=>SetChangeViewState(stateViewEnum.gui)}>GUI</button>
            <button className="btn2" onClick={()=>SetChangeViewState(stateViewEnum.art)}>아트</button>
            <button className="btn" onClick={()=>SetChangeViewState(stateViewEnum.story)}>스토리</button>
            <button className="btn2" onClick={()=>SetChangeViewState(stateViewEnum.settings)}>배경 설정</button>
        </div>
    );
}