import React from "react";
import ReactFullpage from "@fullpage/react-fullpage";
import { MainContext } from "./Sections/MainContext";
import { Section } from "./Section";
import { GUI, GUI2, GUI3, GUI4, GUI5, GUI6 } from "./Sections/GUI";

export const anchors = ["g01", "g02", "g03", "g04", "g05", "g06"];

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
                            <MainContext number="01" title="메인 화면" content={GUI()} />
                        </Section>

                        <Section>
                            <MainContext number="02" title="스테이지 선택 화면" content={GUI2()} />
                        </Section>

                        <Section>
                            <MainContext number="03" title="오브 강화 화면" content={GUI3()} />
                        </Section>

                        <Section>
                            <MainContext number="04" title="게이지 UI" content={GUI4()} />
                        </Section>

                        <Section>
                            <MainContext number="05" title="하트 UI" content={GUI5()} />
                        </Section>

                        <Section>
                            <MainContext number="06" title="보스 체력바 UI" content={GUI6()} />
                        </Section>
                    </div>
                );
            }} />
    );
}