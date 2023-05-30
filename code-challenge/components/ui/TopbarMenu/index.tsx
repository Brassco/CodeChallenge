import Link from 'next/link';
import { memo, MouseEvent, ReactNode, useCallback } from 'react';

//Styled
import styles from './TopbarMenu.module.css';

//Statuses
import TopbarMenuItem, {TopbarMenuStatuses} from './TopbarMenuItem';

export type NavigationList = Array<{
  id: string;
  name: string;
  status: TopbarMenuStatuses;
  href: string;
}>;

export interface TopBarMenuProps {
  navigationList: NavigationList;
  onClick: (event: MouseEvent<HTMLElement>) => void;
}


function TopbarMenu({
  navigationList,
  onClick,
  ...rest
}: TopBarMenuProps) {

  return (
    <div className={styles.topbarMenuContainer} >
        {navigationList.map((item) => (
        <TopbarMenuItem
          status={item.status}
          href={item.href}
          key={item.id}
          name={item.name}
          onClick={onClick}
        />
      ))}
    </div>
  );
}

export default memo(TopbarMenu);
