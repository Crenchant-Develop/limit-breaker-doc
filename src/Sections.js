import React from "react";
import ReactFullpage from "@fullpage/react-fullpage";
import { ContentsList } from "./Sections/ContentsList";
import { ContextOne } from "./Sections/ContextOne";
import { ContextTwo } from "./Sections/ContextTwo";
import { ContextThree } from "./Sections/ContextThree";
import { ContextFour } from "./Sections/ContextFour";
import { LinkOne, LinkTwo } from "./Sections/Links";
import { MainContext } from "./Sections/MainContext";
import { MainView } from "./Sections/MainView";
import { Section } from "./Section";

export const anchors = ["main", "contents", "1", "2", "3", "4", "5", "6"];

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
                            <MainContext number="01" title="영상" content={LinkOne()} />
                        </Section>

                        <Section>
                            <MainContext number="02" title="개요" content={ContextOne()} />
                        </Section>

                        <Section>
                            <MainContext number="03" title="주요 컨셉" content={ContextTwo()} />
                        </Section>

                        <Section>
                            <MainContext number="04" title="디자인 컨셉" content={ContextThree()} />
                        </Section>

                        <Section>
                            <MainContext number="05" title="스토리 컨셉" content={LinkTwo()} />
                        </Section>

                        <Section>
                            <MainContext number="06" title="메인 화면" content={ContextFour()} />
                        </Section>
                    </div>
                );
            }} />
    );
}