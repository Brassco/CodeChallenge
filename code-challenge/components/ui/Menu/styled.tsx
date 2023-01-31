import styled from 'styled-components';
import { MenuItemButtonSC } from './MenuItem/styled';

export interface MenuSCProps {}

export const MenuSC = styled.div<MenuSCProps>`
  display: flex;
  ${MenuItemButtonSC} {
    margin-right: 16px;
  }
`;
