import React from "react";
import ReactFullpage from "@fullpage/react-fullpage";
import { ContentsList } from "./Sections/ContentsList";
import { Intro } from "./Sections/Intro";
import { MainView } from "./Sections/MainView";
import { Section } from "./Section";
import { MainContext } from "./Sections/MainContext";

export const anchors = ["main", "contents", "firstPage", "secondPage", "thirdPage"];

export default function Sections() {
    return (
        <ReactFullpage
            anchors={anchors}
            navigation
            navigationTooltips={anchors}
            onLeave={(origin, destination, direction) => {
                console.log("onLeave event", { origin, destination, direction });
            }}
            render={({ state, fullpageApi }) => {
                console.log("render prop change", state, fullpageApi); // eslint-disable-line no-console

                return (
                    <div>
                        <Section>
                            <MainView />
                        </Section>

                        <Section>
                            <ContentsList />
                        </Section>

                        <Section>
                            <MainContext number="01" title="영상" content="test" />
                        </Section>

                        <Section>
                            <MainContext number="02" title="개요" content={Intro()} />
                        </Section>

                        <Section>
                            <MainContext number="03" title="주요 컨셉" content="tes" />
                        </Section>
                    </div>
                );
            }} />
    );
}
