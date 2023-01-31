import { MouseEvent } from 'react';
import Link from '../../Link';
import { MenuItemButtonSC } from './styled';

export interface MenuItemProps {
  href: string;
  onClick?: (event: MouseEvent<HTMLElement>) => void;
  active: boolean;
  value?: string;
  label?: string;
}

function MenuItem({
  href,
  active,
  onClick,
  value,
  label,
  ...rest
}: MenuItemProps) {
  return (
    <Link href={href} type={'wrapper'} onClick={onClick}>
      <MenuItemButtonSC
        $active={active}
        variant={'menu'}
        data-value={value}
        {...rest}>
        {label}
      </MenuItemButtonSC>
    </Link>
  );
}

export default MenuItem;
