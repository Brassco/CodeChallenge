import { useRouter } from 'next/router';
import MenuItem from './MenuItem';
import { MenuSC } from './styled';

export type PageType = {
  href: string;
  value?: string;
  label?: string;
};

export interface MenuProps {
  pages: Array<PageType>;
}

function Menu({ pages }: MenuProps) {
  const router = useRouter();

  return (
    <MenuSC>
      {pages.map((item) => {
        return (
          <MenuItem
            href={item.href}
            label={item.label}
            active={router?.pathname == item.href}
            key={item.value}
          />
        );
      })}
    </MenuSC>
  );
}

export default Menu;
