import { default as _Link } from 'next/link';
import { memo, MouseEvent, ReactNode } from 'react';
import { LinkSC } from './styled';

export type SidebarMenuStatuses = 'default' | 'opened_task' | 'disabled';

export interface LinkProps {
  href: string;
  children: string | ReactNode;
  onClick?: (event: MouseEvent<HTMLElement>) => void;
  type?: 'text' | 'wrapper';
}

function Link({
  href,
  children,
  onClick,
  type = 'wrapper',
  ...rest
}: LinkProps) {
  return (
    <_Link href={href} passHref>
      <LinkSC $type={type} onClick={onClick} {...rest}>
        {children}
      </LinkSC>
    </_Link>
  );
}

export default memo(Link);
