import styled from 'styled-components';
import { ThemeType } from '../../../types/modules';
import { ReactComponent as InProgress } from '../../svg/in-progress.svg';
import { ReactComponent as Warning } from '../../svg/warning.svg';
import { SidebarMenuItemProps } from './index';

export interface SidebarMenuItemLinkSCProps {
  $status: SidebarMenuItemProps['status'];
}

const getSidebarMenuItemStatus = (
  $status: SidebarMenuItemLinkSCProps['$status'],
  theme: ThemeType,
) => {
  switch ($status) {
    case 'opened_task':
      return '';
    case 'disabled':
      return `
        color: ${theme.palette.text.disabled} !important;
        cursor: default;
      `;
    default:
      return '';
  }
};

export const SidebarMenuItemLinkSC = styled.a<SidebarMenuItemLinkSCProps>`
  display: flex;
  align-items: center;
  font-family: ${({ theme }) => theme.typography.fontFamily};
  color: ${({ theme }) => theme.palette.themeColors.lighterGray};
  text-decoration: none;
  font-weight: 500;
  font-size: ${({ theme }) => theme.typography.h3.fontSize}px;
  letter-spacing: 0.32px;
  line-height: 3.13;
  ${({ $status, theme }) => getSidebarMenuItemStatus($status, theme)}
  &:hover {
    color: ${({ theme }) => theme.palette.themeColors.white};
  }
`;

export const InProgressSC = styled(InProgress)`
  fill: ${({ theme }) => theme.palette.themeColors.grayLight};
  margin-left: 9px;
  height: 22px;
  width: 22px;
`;

export const WarningSC = styled(Warning)`
  fill: ${({ theme }) => theme.palette.themeColors.purple};
  margin-left: 9px;
  height: 22px;
  width: 24px;
`;
