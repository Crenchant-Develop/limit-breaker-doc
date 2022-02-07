import React from "react";
import ReactFullpage from "@fullpage/react-fullpage";
import { MainContext } from "./Sections/MainContext";
import { Section } from "./Section";
import { Stage, Stage2, Stage3, Stage4, Stage5, Stage6, Stage7, Stage8, Stage9, Stage10 } from "./Sections/Stage";
import { Stage11, Stage12, Stage13, Stage14, Stage15, Stage16, Stage17, Stage18, Stage19, Stage20 } from "./Sections/Stage";
import { Stage21, Stage22, Stage23, Stage24, Stage25, Stage26, Stage27, Stage28 } from "./Sections/Stage";

export const anchors = [
    "st01", "st02", "st03", "st04", "st05", "st06", "st07", "st08", "st09", "st10",
    "st11", "st12", "st13", "st14", "st15", "st16", "st17", "st18", "st19", "st20",
    "st21", "st22", "st23", "st24", "st25", "st26", "st27", "st28"
];

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
                            <MainContext number="04" title="피버 타임" content={Stage4()} />
                        </Section>

                        <Section>
                            <MainContext number="05" title="월드맵" content={Stage5()} />
                        </Section>

                        <Section>
                            <MainContext number="06" title="1스테이지 - 토이타운" content={Stage6()} />
                        </Section>

                        <Section>
                            <MainContext number="07" title="2스테이지 - 슈가 클라우드" content={Stage7()} />
                        </Section>

                        <Section>
                            <MainContext number="08" title="주요 레퍼런스" content={Stage8()} />
                        </Section>

                        <Section>
                            <MainContext number="09" title="기타 레퍼런스" content={Stage9()} />
                        </Section>

                        <Section>
                            <MainContext number="10" title="3스테이지 - 글루카폴리스" content={Stage10()} />
                        </Section>

                        <Section>
                            <MainContext number="11" title="X스테이지 - 루시드 드림 시티" content={Stage11()} />
                        </Section>

                        <Section>
                            <MainContext number="12" title="주요 레퍼런스" content={Stage12()} />
                        </Section>

                        <Section>
                            <MainContext number="13" title="기타 레퍼런스" content={Stage13()} />
                        </Section>

                        <Section>
                            <MainContext number="14" title="4스테이지 - 푸풀루스 숲" content={Stage14()} />
                        </Section>

                        <Section>
                            <MainContext number="15" title="주요 레퍼런스" content={Stage15()} />
                        </Section>

                        <Section>
                            <MainContext number="16" title="기타 레퍼런스" content={Stage16()} />
                        </Section>

                        <Section>
                            <MainContext number="17" title="5스테이지 - 템푸스 마을" content={Stage17()} />
                        </Section>

                        <Section>
                            <MainContext number="18" title="주요 레퍼런스" content={Stage18()} />
                        </Section>

                        <Section>
                            <MainContext number="19" title="기타 레퍼런스" content={Stage19()} />
                        </Section>

                        <Section>
                            <MainContext number="20" title="6스테이지 - 체슬리프 평원" content={Stage20()} />
                        </Section>

                        <Section>
                            <MainContext number="21" title="주요 레퍼런스" content={Stage21()} />
                        </Section>

                        <Section>
                            <MainContext number="22" title="기타 레퍼런스" content={Stage22()} />
                        </Section>

                        <Section>
                            <MainContext number="23" title="7스테이지 - 백지 설원" content={Stage23()} />
                        </Section>

                        <Section>
                            <MainContext number="24" title="주요 레퍼런스" content={Stage24()} />
                        </Section>

                        <Section>
                            <MainContext number="25" title="기타 레퍼런스" content={Stage25()} />
                        </Section>

                        <Section>
                            <MainContext number="26" title="8스테이지 - 끝의 성채" content={Stage26()} />
                        </Section>

                        <Section>
                            <MainContext number="27" title="주요 레퍼런스" content={Stage27()} />
                        </Section>

                        <Section>
                            <MainContext number="28" title="기타 레퍼런스" content={Stage28()} />
                        </Section>
                    </div>
                );
            }} />
    );
}