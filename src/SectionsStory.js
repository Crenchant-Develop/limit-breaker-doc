import React from "react";
import ReactFullpage from "@fullpage/react-fullpage";
import { MainContext } from "./Sections/MainContext";
import { Section } from "./Section";
import { StoryContext1, StoryContext2 } from "./Sections/Story";
import { Story, Story2, Story3, Story4, Story5, Story6, Story7, Story8, Story9 } from "./Sections/Story";

export const anchors = ["s01", "s02", "s03", "s04", "s05", "s06", "s07", "s08", "s09", "s10", "s11"];

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
                            <MainContext number="01" title="스토리 목표" content={StoryContext1()} />
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
                    </div>
                );
            }} />
    );
}