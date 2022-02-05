import React from "react";
import ReactFullpage from "@fullpage/react-fullpage";
import { Contents } from "./Sections/Contents";
import { Main, LinkMain } from "./Sections/ContextText";
import { MainContext } from "./Sections/MainContext";
import { Section } from "./Section";
import { Story } from "./Sections/Story";
import { ContentsButton } from "./Sections/ContentsButton";

export const anchors = ["main", "01", "02", "03"];

export default function ScrollElements() {
    return (
        <ReactFullpage
            anchors={anchors}
            navigation
            navigationTooltips={anchors}
            licenseKey='YOUR_KEY_HERE'
            // onLeave={(origin, destination, direction) => {
            //     console.log("onLeave event", { origin, destination, direction });
            // }}
             render={({ state, fullpageApi }) => {
            //     console.log("render prop change", state, fullpageApi); // eslint-disable-line no-console

                return (
                    <div>

                        <Section>
                            <Contents />
                        </Section>

                        <Section>
                            <MainContext number="01" title="목차" content={ContentsButton()} />
                        </Section>

                        <Section>
                            <MainContext number="02" title="프리뷰·개요" content={LinkMain()} />
                        </Section>

                        <Section>
                            <MainContext number="03" title="프리뷰·개요" content={Main()} />
                        </Section>
                    </div>
                );
            }} />
    );
}