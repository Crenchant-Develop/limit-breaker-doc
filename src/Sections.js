import React from "react";
import ReactFullpage from "@fullpage/react-fullpage";
import { ContentsList } from "./Sections/ContentsList";
import { ContextOne } from "./Sections/ContextOne";
import { ContextTwo } from "./Sections/ContextTwo";
import { ContextThree } from "./Sections/ContextThree";
import { ContextFour } from "./Sections/ContextFour";
import { ContextFive } from "./Sections/ContextFive";
import { ContextNine } from "./Sections/ContextNine";
import { ContextTen } from "./Sections/ContextTen";
import { LinkOne, LinkTwo, LinkThree, LinkFour } from "./Sections/Links";
import { MainContext } from "./Sections/MainContext";
import { MainView } from "./Sections/MainView";
import { Section } from "./Section";

export const anchors = ["main", "contents", "01", "02", "03", "04", "05", "06", "07", "10", "11", "12", "13"];

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

                        <Section>
                            <MainContext number="07" title="강화" content={ContextFive()} />
                        </Section>

                        <Section>
                            <MainContext number="10" title="스테이지" content={LinkThree()} />
                        </Section>

                        <Section>
                            <MainContext number="11" title="오브젝트" content={LinkFour()} />
                        </Section>

                        <Section>
                            <MainContext number="12" title="경험치" content={ContextNine()} />
                        </Section>

                        <Section>
                            <MainContext number="13" title="슈가코인" content={ContextTen()} />
                        </Section>
                    </div>
                );
            }} />
    );
}