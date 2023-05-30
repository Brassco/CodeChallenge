import React, {memo} from "react";

//UI Components
import SidebarMenuItem, { SidebarMenuStatuses } from './SidebarMenuItem/';

//Styles
import styles from './SidebarMenu.module.css';

export type SidebarNavigationList = Array<{
    id: string;
    name: string;
    status?: SidebarMenuStatuses;
    href: string;
  }>;
  
export interface SideBarMenuProps {
    navigationList: SidebarNavigationList;
  }

const SidebarMenu = ({ navigationList, ...rest }: SideBarMenuProps) => {
return (
    <div className={styles.container}>
        {navigationList.map((item) => (
        <SidebarMenuItem
          active={item.status}
          href={item.href}
          key={item.id}
          label={item.name}
        />
      ))}
    </div>
)
}

export default memo(SidebarMenu);