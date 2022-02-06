import React from "react";
import ReactFullpage from "@fullpage/react-fullpage";
import { MainContext } from "./Sections/MainContext";
import { Section } from "./Section";
import { Gimmick, Gimmick2, Gimmick3, Gimmick4, Gimmick5, Gimmick6, Gimmick7, Gimmick8, Gimmick9, Gimmick10, Gimmick11 } from "./Sections/Gimmick";

export const anchors = ["gm01", "gm02", "gm03", "gm04", "gm05", "gm06", "gm07", "gm08", "gm09", "gm10", "gm11"];

export default function SectionsEntry() {
    return (
        <ReactFullpage
            anchors={anchors}
            navigation
            navigationTooltips={anchors}
            licenseKey='YOUR_KEY_HERE'
            render={({ state, fullpageApi }) => {
                return (
                    <div>
                        <Section>
                            <MainContext number="01" title="공통 기믹 - 안개" content={Gimmick()} />
                        </Section>

                        <Section>
                            <MainContext number="02" title="스테이지별 안개" content={Gimmick2()} />
                        </Section>

                        <Section>
                            <MainContext number="03" title="1스테이지 기믹" content={Gimmick3()} />
                        </Section>

                        <Section>
                            <MainContext number="04" title="2스테이지 기믹" content={Gimmick4()} />
                        </Section>

                        <Section>
                            <MainContext number="05" title="3스테이지 기믹" content={Gimmick5()} />
                        </Section>

                        <Section>
                            <MainContext number="06" title="X스테이지 기믹" content={Gimmick6()} />
                        </Section>

                        <Section>
                            <MainContext number="07" title="4스테이지 기믹" content={Gimmick7()} />
                        </Section>

                        <Section>
                            <MainContext number="08" title="5스테이지 기믹" content={Gimmick8()} />
                        </Section>

                        <Section>
                            <MainContext number="09" title="6스테이지 기믹" content={Gimmick9()} />
                        </Section>

                        <Section>
                            <MainContext number="10" title="7스테이지 기믹" content={Gimmick10()} />
                        </Section>

                        <Section>
                            <MainContext number="11" title="8스테이지 기믹" content={Gimmick11()} />
                        </Section>
                    </div>
                );
            }} />
    );
}