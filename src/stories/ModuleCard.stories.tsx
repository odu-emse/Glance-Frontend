import * as React from "react";
import { ModuleCard, ModuleProps } from "../components/ModuleCard";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
    title: "Atoms/ModuleCard", //providing path
    component: ModuleCard,
    argTypes: {}
} as ComponentMeta<typeof ModuleCard>;

const Template: ComponentStory<typeof ModuleCard> = (args: ModuleProps) => (
    <ModuleCard {...args} />
);

export const Primary = Template.bind({});
Primary.storyName = "first module card";
Primary.args = {
    completion: false,
    module: {
        courseName: "ENMA 601",
        moduleIdentifiers: "178P",
        moduleName: "Ethnics and Philosophy in Engineering Applications",
        percentage: 50,
        duration: 38,
        currentTopic: "Ethical Behavior and leadership",
        returnIdPage: "178P",
        treeView: "178P/treeview"
    }
};
