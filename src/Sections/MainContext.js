import React from "react";
import numberCircle from '../img/numberCircle.svg';
import home from '../img/home.svg';
import LayoutView from "./LayoutView";
import { stateViewEnum, SetChangeViewState } from "../stateViewEnum";

export function MainContext(props) {
    const title = () => {
        return (
            <div>
                <div className="Title-flex-container">
                    <div className="Number">
                        <div className="Number-circle" alt="numberCircle"
                            style={{
                                backgroundImage: `url( ${numberCircle} )`
                            }}
                        >
                            <div className="Number-text">
                                {props.number}
                            </div>
                        </div>
                    </div>
                    <div className="Title-bar">
                        <div className="Title-text">
                            {props.title}
                        </div>
                        <div className="btn-image-container">
                            <button className="btn-image" onClick={() => SetChangeViewState(stateViewEnum.main)}>
                                <img src={home} />
                            </button>
                        </div>
                    </div>
                    <div className="quarter-circle">
                        <div className="quarter-circle-small">
                        </div>
                    </div>
                </div>
            </div>
        );
    };

    const contentText = () => {
        return (
            <div>
                <div className="Content-text">
                    {props.content}
                </div>
            </div>
        );
    };

    return (
        <>
            <LayoutView title={title()} content={contentText()} />
        </>
    );
}
