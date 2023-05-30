import React, { MouseEvent } from "react";

//Styles
import styles from "./SidebarMenuItem.module.css";


export type MenuItemStatuses = 'active' | 'disabled';

export interface MenuItemProps {
  href: string;
  onClick?: (event: MouseEvent<HTMLElement>) => void;
  active: boolean;
  label?: string;
}

function MenuItem({
  href,
  active,
  onClick,
  label,
  ...rest
}: MenuItemProps) {
  return (
    <a href={href} onClick={onClick}>
      <div
      className={styles.container}
        // $active={active}
        // variant={'menu'}
        // data-value={value}
        {...rest}
      >
        <span>{label}</span>
      </div>
    </a>
  );
}

export default MenuItem;
