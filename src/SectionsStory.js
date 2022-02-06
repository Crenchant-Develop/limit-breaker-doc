import React from "react";
import ReactFullpage from "@fullpage/react-fullpage";
import { MainContext } from "./Sections/MainContext";
import { Section } from "./Section";
import { Story } from "./Sections/Story";

export const anchors = ["story01", "story02"];

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
                            <MainContext number="01" title="목차" content={Story()} />
                        </Section>

                        <Section>
                            <MainContext number="01" title="목차" content={Story()} />
                        </Section>
                    </div>
                );
            }} />
    );
}