import React from "react";
import ReactFullpage from "@fullpage/react-fullpage";
import { Contents } from "./Sections/Contents";
import { Main, LinkMain } from "./Sections/ContextText";
import { MainContext } from "./Sections/MainContext";
import { Section } from "./Section";
import { ContentsButton } from "./Sections/ContentsButton";

export const anchors = ["main", "01", "02", "03"];

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
                            <Contents />
                        </Section>

                        <Section>
                            <MainContext number="01" title="목차" content={ContentsButton()} />
                        </Section>

                        <Section>
                            <MainContext number="02" title="프리뷰·개요" content={LinkMain()} />
                        </Section>

                        <Section>
                            <MainContext number="03" title="프리뷰·개요" content={Main()} />
                        </Section>
                    </div>
                );
            }} />
    );
}