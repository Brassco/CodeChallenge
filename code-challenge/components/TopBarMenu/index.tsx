import { memo, MouseEvent } from 'react';

//UI
import TopbarMenuSC from '../ui/TopbarMenu';
import {TopbarMenuStatuses} from '../ui/TopbarMenu/TopbarMenuItem';

export type NavigationList = Array<{
  id: string;
  name: string;
  status: TopbarMenuStatuses;
  href: string;
}>;

export interface SideBarMenuProps {
  navigationList: NavigationList;
  onClick: (event: MouseEvent<HTMLElement>) => void;
}

function TopbarMenu({ navigationList, onClick, ...rest }: SideBarMenuProps) {

  const handleClick = (e: MouseEvent<HTMLElement>) => {
    onClick(e)
  }

  return (
    <TopbarMenuSC navigationList={navigationList} onClick={handleClick}/>
  );
}

export default memo(TopbarMenu);
