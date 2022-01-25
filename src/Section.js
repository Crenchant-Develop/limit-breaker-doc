import React from "react";

export function Section(props) {
    return (
        <div className="section">
            <h3>{props.children}</h3>
        </div>
    );
}
