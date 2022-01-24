import React from "react";
import numberCircle from '../numberCircle.svg';
import LayoutView from "./LayoutView";


export function MainContext(props) {
    const title = () => {
        return (
            <div>
                <div class="Title-flex-container">
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
