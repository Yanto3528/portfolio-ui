import { Root, TabsProps } from "@radix-ui/react-tabs";

import { TabsContent, TabsList, TabsTrigger } from "./components";

function Tabs(props: TabsProps) {
  return <Root {...props} />;
}

Tabs.List = TabsList;
Tabs.Trigger = TabsTrigger;
Tabs.Content = TabsContent;

export default Tabs;
