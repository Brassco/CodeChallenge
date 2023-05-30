import { memo } from 'react';
import SidebarMenuSC, { SideBarMenuProps } from '../ui/SidebarMenu/';

function SidebarMenu({ navigationList, ...rest }: SideBarMenuProps) {
  return (
    <SidebarMenuSC navigationList={navigationList} />
  );
}

export default memo(SidebarMenu);
