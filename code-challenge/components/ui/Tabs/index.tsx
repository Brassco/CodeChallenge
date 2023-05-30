import Link from "next/link";
import { memo, MouseEvent, ReactNode, useCallback } from "react";

//Styles
import styles from "./Tabs.module.css";

//Tab Statuses
import { TabsStatuses, TabItemProps } from "./TabItem";

//UI
import TabItem from "./TabItem";

interface TabsProps {
  tabsLinks: Array<TabItemProps>;
  onClick: (event: MouseEvent<HTMLElement>) => void;
}

function Tabs({ tabsLinks, onClick, ...rest }: TabsProps) {
  return (
    <div className={styles.tabsContainer}>
      {tabsLinks.map((tab) => (
        <TabItem href={tab.href} name={tab.name} status={tab.status} onClick={onClick} />
      ))}
    </div>
  );
}

export default memo(Tabs);
