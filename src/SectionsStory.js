import React from "react";
import ReactFullpage from "@fullpage/react-fullpage";
import { MainContext } from "./Sections/MainContext";
import { Section } from "./Section";
import { StoryContext, StoryContext2 } from "./Sections/Story";
import { Story, Story2, Story3, Story4, Story5, Story6, Story7, Story8, Story9, Story10 } from "./Sections/Story";
import { Story11, Story12, Story13, Story14, Story15, Story16, Story17, Story18, Story19, Story20 } from "./Sections/Story";
import { Story21, Story22, Story23, Story24, Story25, Story26 } from "./Sections/Story";

export const anchors = [
    "sc01", "sc02",
    "s01", "s02", "s03", "s04", "s05", "s06", "s07", "s08", "s09", "s10",
    "s11", "s12", "s13", "s14", "s15", "s16", "s17", "s18", "s19", "s20",
    "s21", "s22", "s23", "s24", "s25", "s26"
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
                            <MainContext number="01" title="스토리 목표" content={StoryContext()} />
                        </Section>

                        <Section>
                            <MainContext number="02" title="스토리 목표" content={StoryContext2()} />
                        </Section>

                        <Section>
                            <MainContext number="03" title="드리미아 왕국에는" content={Story()} />
                        </Section>

                        <Section>
                            <MainContext number="04" title="호전적이고" content={Story2()} />
                        </Section>

                        <Section>
                            <MainContext number="05" title="골칫덩이에다가" content={Story3()} />
                        </Section>

                        <Section>
                            <MainContext number="06" title="명예만 추구하던" content={Story4()} />
                        </Section>

                        <Section>
                            <MainContext number="07" title="한 왕자가 있었다" content={Story5()} />
                        </Section>

                        <Section>
                            <MainContext number="08" title="그러던 어느 날" content={Story6()} />
                        </Section>

                        <Section>
                            <MainContext number="09" title="그림자가 드리웠고" content={Story7()} />
                        </Section>

                        <Section>
                            <MainContext number="10" title="왕자는 하늘을 날아" content={Story8()} />
                        </Section>

                        <Section>
                            <MainContext number="11" title="파괴를 결심했다" content={Story9()} />
                        </Section>

                        <Section>
                            <MainContext number="12" title="비록 힘은 약해졌지만" content={Story10()} />
                        </Section>

                        <Section>
                            <MainContext number="13" title="앞으로 나아갔다" content={Story11()} />
                        </Section>

                        <Section>
                            <MainContext number="14" title="그러면서 한탄도 하고" content={Story12()} />
                        </Section>

                        <Section>
                            <MainContext number="15" title="위안도 하면서" content={Story13()} />
                        </Section>

                        <Section>
                            <MainContext number="16" title="이상한 점을 깨닫다가" content={Story14()} />
                        </Section>

                        <Section>
                            <MainContext number="17" title="템푸스 마을로 내려가" content={Story15()} />
                        </Section>

                        <Section>
                            <MainContext number="18" title="혼란스러움을 겪고" content={Story16()} />
                        </Section>

                        <Section>
                            <MainContext number="19" title="정의를 고민하게 됐다" content={Story17()} />
                        </Section>

                        <Section>
                            <MainContext number="20" title="거울 세계를 지나" content={Story18()} />
                        </Section>

                        <Section>
                            <MainContext number="21" title="거짓된 낙원으로" content={Story19()} />
                        </Section>

                        <Section>
                            <MainContext number="22" title="향하던 중 가로막은 자" content={Story20()} />
                        </Section>

                        <Section>
                            <MainContext number="23" title="그는 어둠의 왕자였다" content={Story21()} />
                        </Section>

                        <Section>
                            <MainContext number="24" title="최후의 결전에서" content={Story22()} />
                        </Section>

                        <Section>
                            <MainContext number="25" title="악몽은 패배하고" content={Story23()} />
                        </Section>

                        <Section>
                            <MainContext number="26" title="그에게 용서를 구했다" content={Story24()} />
                        </Section>

                        <Section>
                            <MainContext number="27" title="그렇게 평화가 찾아왔다" content={Story25()} />
                        </Section>

                        <Section>
                            <MainContext number="28" title="그리고 인정받았다" content={Story26()} />
                        </Section>
                    </div>
                );
            }} />
    );
}