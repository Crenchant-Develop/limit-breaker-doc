import React from "react";
import ReactFullpage from "@fullpage/react-fullpage";
import { Contents } from "./Sections/Contents";
import { MainOne, MainTwo } from "./Sections/ContextText";
import { LinkMain, LinkSystem, LinkStage, LinkGUI, LinkArt, LinkStory, LinkSettings } from "./Sections/Links";
import { MainContext } from "./Sections/MainContext";
import { Section } from "./Section";
import { Story } from "./Sections/Story";

export const anchors = ["main", "01", "02", "03", "04", "05", "06", "07", "08", "09"];

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
                            <Contents />
                        </Section>

                        <Section>
                            <MainContext number="01" title="영상" content={LinkMain()} />
                        </Section>

                        <Section>
                            <MainContext number="02" title="개요" content={MainOne()} />
                        </Section>

                        <Section>
                            <MainContext number="03" title="주요 컨셉" content={MainTwo()} />
                        </Section>

                        <Section>
                            <MainContext number="04" title="시스템 컨셉" content={LinkSystem()} />
                        </Section>

                        <Section>
                            <MainContext number="05" title="스테이지 컨셉" content={LinkStage()} />
                        </Section>

                        <Section>
                            <MainContext number="06" title="GUI 컨셉" content={LinkGUI()} />
                        </Section>

                        <Section>
                            <MainContext number="07" title="아트 컨셉" content={LinkArt()} />
                        </Section>

                        <Section>
                            <MainContext number="08" title="스토리 컨셉" content={LinkStory()} />
                        </Section>

                        <Section>
                            <MainContext number="09" title="배경 설정 컨셉" content={LinkSettings()} />
                        </Section>
                    </div>
                );
            }} />
    );
}