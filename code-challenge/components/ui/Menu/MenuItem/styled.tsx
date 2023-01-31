import { Button } from '@mui/material';
import styled, { css } from 'styled-components';

export interface MenuItemButtonSCProps {
  $active: boolean;
}

export const MenuItemButtonSC = styled(Button)<MenuItemButtonSCProps>`
  ${({ theme, $active }) =>
    $active
      ? css`
          background-color: ${theme.palette.themeColors.greenDark} !important;
          color: ${theme.palette.themeColors.black} !important;
          border: 2px solid ${theme.palette.themeColors.black} !important;
        `
      : ''}
`;
