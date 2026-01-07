import { Tabs, Tab } from "./tabs.react";

export function TabsExample() {
    return <Tabs defaultTab="Tab 1">
        <Tab name="Tab 1">Content 1</Tab>
        <Tab name="Tab 2">Content 2</Tab>
        <Tab name="Tab 3">Content 3</Tab>
    </Tabs>
}
