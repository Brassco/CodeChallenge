import Link from 'next/link';
import { memo, MouseEvent, ReactNode, useCallback } from 'react';
import { InProgressSC, SidebarMenuItemLinkSC, WarningSC } from './styled';

export type SidebarMenuStatuses = 'default' | 'opened_task' | 'disabled'

export interface SidebarMenuItemProps {
  name: ReactNode;
  href: string;
  status?: SidebarMenuStatuses;
  onClick?: (event: MouseEvent<HTMLElement>) => void;
}

function SidebarMenuItem({
  href,
  name,
  status = 'default',
  onClick,
  ...rest
}: SidebarMenuItemProps) {
  const handleClick = useCallback(
    (e) => {
      if (status !== 'disabled') {
        onClick && onClick(e);

        return;
      }
      e.preventDefault();
    },
    [status === 'disabled', onClick],
  );

  return (
    <Link href={href} passHref>
      <SidebarMenuItemLinkSC $status={status} onClick={handleClick} {...rest}>
        {name}
        {status === 'disabled' ? (
          <InProgressSC />
        ) : status === 'opened_task' ? (
          <WarningSC />
        ) : null}
      </SidebarMenuItemLinkSC>
    </Link>
  );
}

export default memo(SidebarMenuItem);
