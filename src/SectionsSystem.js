import React from "react";
import ReactFullpage from "@fullpage/react-fullpage";
import { MainContext } from "./Sections/MainContext";
import { Section } from "./Section";
import { System, System2, System3, System4, System5, System6, System7, System8, System9, System10 } from "./Sections/System";
import { System11, System12, System13, System14, System15, System16, System17 } from "./Sections/System";

export const anchors = [
    "sy01", "sy02", "sy03", "sy04", "sy05", "sy06", "sy07", "sy08", "sy09", "sy10",
    "sy11", "sy12", "sy13", "sy14", "sy15", "sy16", "sy17"
];

export default function SectionsStory() {
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
                            <MainContext number="01" title="슈가코인" content={System()} />
                        </Section>

                        <Section>
                            <MainContext number="02" title="드림포인트" content={System2()} />
                        </Section>

                        <Section>
                            <MainContext number="03" title="스킬 슬롯" content={System3()} />
                        </Section>

                        <Section>
                            <MainContext number="04" title="스킬 강화" content={System4()} />
                        </Section>

                        <Section>
                            <MainContext number="05" title="패시브 스킬" content={System5()} />
                        </Section>

                        <Section>
                            <MainContext number="06" title="액티브 스킬" content={System6()} />
                        </Section>

                        <Section>
                            <MainContext number="07" title="퓨어 오브 - 게이지" content={System7()} />
                        </Section>

                        <Section>
                            <MainContext number="08" title="퓨어 오브 - 게이지 공식" content={System8()} />
                        </Section>

                        <Section>
                            <MainContext number="09" title="퓨어 오브 - 하트" content={System9()} />
                        </Section>

                        <Section>
                            <MainContext number="10" title="임팩테이블" content={System10()} />
                        </Section>

                        <Section>
                            <MainContext number="11" title="임팩테이블 - 스탯" content={System11()} />
                        </Section>

                        <Section>
                            <MainContext number="12" title="임팩테이블 - 충격량" content={System12()} />
                        </Section>

                        <Section>
                            <MainContext number="13" title="임팩테이블 - 분류" content={System13()} />
                        </Section>

                        <Section>
                            <MainContext number="14" title="임팩테이블의 종류" content={System14()} />
                        </Section>

                        <Section>
                            <MainContext number="15" title="임팩테이블의 종류" content={System15()} />
                        </Section>

                        <Section>
                            <MainContext number="16" title="임팩테이블의 종류" content={System16()} />
                        </Section>

                        <Section>
                            <MainContext number="17" title="경험치" content={System17()} />
                        </Section>
                    </div>
                );
            }} />
    );
}