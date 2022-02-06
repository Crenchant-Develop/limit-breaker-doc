import React from "react";
import ReactFullpage from "@fullpage/react-fullpage";
import { MainContext } from "./Sections/MainContext";
import { Section } from "./Section";
import { Art, Art2, Art3, Art4, Art5, Art6, Art7, Art8, Art9 } from "./Sections/Art";

export const anchors = ["a01", "a02", "a03", "a04", "a05", "a06", "a07", "a08", "a09"];

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
                            <MainContext number="01" title="디자인 컨셉" content={Art()} />
                        </Section>

                        <Section>
                            <MainContext number="02" title="컨셉 아트 - 왕자" content={Art2()} />
                        </Section>

                        <Section>
                            <MainContext number="03" title="컨셉 아트 - 코토" content={Art3()} />
                        </Section>

                        <Section>
                            <MainContext number="04" title="컨셉 아트 - 필로 & 마시" content={Art4()} />
                        </Section>

                        <Section>
                            <MainContext number="05" title="컨셉 아트 - 클로" content={Art5()} />
                        </Section>

                        <Section>
                            <MainContext number="06" title="컨셉 아트 - 딩딩" content={Art6()} />
                        </Section>

                        <Section>
                            <MainContext number="07" title="컨셉 아트 - 캔들러 & 사탕의 요정" content={Art7()} />
                        </Section>

                        <Section>
                            <MainContext number="08" title="컨셉 아트 - 코바" content={Art8()} />
                        </Section>

                        <Section>
                            <MainContext number="09" title="컨셉 아트 - 리베어" content={Art9()} />
                        </Section>
                    </div>
                );
            }} />
    );
}