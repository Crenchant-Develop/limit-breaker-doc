import React from "react";
import ReactFullpage from "@fullpage/react-fullpage";
import { MainContext } from "./Sections/MainContext";
import { Section } from "./Section";
import { Stage, Stage2, Stage3, Stage4, Stage5, Stage6, Stage7, Stage8, Stage9, Stage10, Stage11, Stage12, Stage13, Stage14, Stage15 } from "./Sections/Stage";

export const anchors = ["st01", "st02", "st03", "st04", "st05", "st06", "st07", "st08", "st09", "st10", "st11", "st12", "st13", "st14", "st15"];

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
                            <MainContext number="01" title="스테이지" content={Stage()} />
                        </Section>

                        <Section>
                            <MainContext number="02" title="서브 스테이지" content={Stage2()} />
                        </Section>

                        <Section>
                            <MainContext number="03" title="웨이브" content={Stage3()} />
                        </Section>

                        <Section>
                            <MainContext number="04" title="월드맵" content={Stage4()} />
                        </Section>

                        <Section>
                            <MainContext number="05" title="1스테이지 - 토이타운" content={Stage5()} />
                        </Section>

                        <Section>
                            <MainContext number="06" title="2스테이지 - 슈가 클라우드" content={Stage6()} />
                        </Section>

                        <Section>
                            <MainContext number="07" title="주요 레퍼런스" content={Stage7()} />
                        </Section>

                        <Section>
                            <MainContext number="08" title="기타 레퍼런스" content={Stage8()} />
                        </Section>

                        <Section>
                            <MainContext number="09" title="3스테이지 - 글루카폴리스" content={Stage9()} />
                        </Section>

                        <Section>
                            <MainContext number="10" title="X스테이지 - 루시드 드림 시티" content={Stage10()} />
                        </Section>

                        <Section>
                            <MainContext number="11" title="주요 레퍼런스" content={Stage11()} />
                        </Section>

                        <Section>
                            <MainContext number="12" title="기타 레퍼런스" content={Stage12()} />
                        </Section>

                        <Section>
                            <MainContext number="13" title="4스테이지 - 푸풀루스 숲" content={Stage13()} />
                        </Section>

                        <Section>
                            <MainContext number="14" title="주요 레퍼런스" content={Stage14()} />
                        </Section>

                        <Section>
                            <MainContext number="15" title="기타 레퍼런스" content={Stage15()} />
                        </Section>
                    </div>
                );
            }} />
    );
}