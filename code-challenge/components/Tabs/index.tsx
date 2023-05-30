import { memo, MouseEvent } from "react";

//UI
import TabsSC from "../ui/Tabs";

//Tabs Statuses
import { TabsStatuses } from "../ui/Tabs/TabItem";

export type TabsLinks = Array<{
  id: string;
  name: string;
  status: TabsStatuses;
  href: string;
}>;

export interface TabsProps {
  tabsLinks: TabsLinks;
  onClick: (event: MouseEvent<HTMLElement>) => void;
}

function Tabs({ tabsLinks, onClick, ...rest }: TabsProps) {
  const handleClick = (e: MouseEvent<HTMLElement>) => {
    onClick(e);
  };

  return <TabsSC tabsLinks={tabsLinks} onClick={handleClick} />;
}

export default memo(Tabs);
