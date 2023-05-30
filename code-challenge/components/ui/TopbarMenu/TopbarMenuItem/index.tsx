import Link from "next/link";
import { memo, MouseEvent, ReactNode, useCallback } from "react";

//Styles
import styles from "./TopbarMenuItem.module.css";

export type TopbarMenuStatuses = "active" | "disabled";

export interface TopbarMenuItemProps {
  name: string;
  href: string;
  status: TopbarMenuStatuses;
  onClick: (event: MouseEvent<HTMLElement>) => void;
}

function TopbarMenuItem({
  href,
  name,
  status = "disabled",
  onClick,
  ...rest
}: TopbarMenuItemProps) {
  const handleClick = useCallback(
    (e) => {
      if (status !== "disabled") {
        onClick && onClick(e);

        return;
      }
      e.preventDefault();
    },
    [status === "disabled", onClick]
  );

  return (
    <Link href={href} passHref>
      <div className={status === "disabled" ? styles.topbarMenuItemContainer : styles.active} >
        <a className={styles.topbarMenuItemLinkSC} onClick={handleClick} {...rest}>
          {name}
        </a>
      </div>
    </Link>
  );
}

export default memo(TopbarMenuItem);
