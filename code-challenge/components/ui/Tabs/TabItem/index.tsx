import Link from 'next/link';
import { memo, MouseEvent, ReactNode, useCallback } from 'react';
import classNames from 'classNames';

//Styles
import styles from './TabItem.module.css'

export type TabsStatuses = 'active' | 'disabled'

export interface TabItemProps {
  name: string;
  href: string;
  status?: TabsStatuses;
  onClick?: (event: MouseEvent<HTMLElement>) => void;
}

function TabItem({
  href,
  name,
  status = 'disabled',
  onClick,
  ...rest
}: TabItemProps) {
  const handleClick = useCallback(
    (e) => {
        onClick && onClick(e);
    },
    [status === 'disabled', onClick],
  );

  const linkClasses = classNames(
    styles.tabItem,
    status == "active" && styles.tabItemActive
  )

  
  return (
    <Link href={href} passHref>
      <div className={linkClasses} onClick={handleClick} {...rest}>
        {name}
      </div>
    </Link>
  );
}

export default memo(TabItem);
