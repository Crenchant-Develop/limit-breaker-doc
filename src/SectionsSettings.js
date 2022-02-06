import React from "react";
import ReactFullpage from "@fullpage/react-fullpage";
import { MainContext } from "./Sections/MainContext";
import { Section } from "./Section";
import { Settings, Settings2, Settings3, Settings4, Settings5, Settings6, Settings7, Settings8, Settings9, Settings10, Settings11 } from "./Sections/Settings";

export const anchors = ["se01", "se02", "se03", "se04", "se05", "se06", "se07", "se08", "se09", "se10", "se11"];

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
                            <MainContext number="01" title="무아르트의 과거" content={Settings()} />
                        </Section>

                        <Section>
                            <MainContext number="02" title="무아르트의 과거" content={Settings2()} />
                        </Section>

                        <Section>
                            <MainContext number="03" title="퓨어 오브" content={Settings3()} />
                        </Section>

                        <Section>
                            <MainContext number="04" title="다크 오브" content={Settings4()} />
                        </Section>

                        <Section>
                            <MainContext number="05" title="현혹의 거울" content={Settings5()} />
                        </Section>

                        <Section>
                            <MainContext number="06" title="달콤한 안개" content={Settings6()} />
                        </Section>

                        <Section>
                            <MainContext number="07" title="거울 세계" content={Settings7()} />
                        </Section>

                        <Section>
                            <MainContext number="08" title="임팩테이블" content={Settings8()} />
                        </Section>

                        <Section>
                            <MainContext number="09" title="임팩테이블의 단계" content={Settings9()} />
                        </Section>

                        <Section>
                            <MainContext number="10" title="어떤 코바의 이야기" content={Settings10()} />
                        </Section>

                        <Section>
                            <MainContext number="11" title="어떤 코바의 이야기" content={Settings11()} />
                        </Section>
                    </div>
                );
            }} />
    );
}