import styled, { css } from 'styled-components';
import { ThemeType } from '../../../types/modules';
import { LinkProps } from './index';

export interface LinkSCProps {
  $type: LinkProps['type'];
}

const getLinkStylesByType = (
  $status: LinkSCProps['$type'],
  theme: ThemeType,
) => {
  switch ($status) {
    case 'text':
      return css`
        color: ${theme.palette.themeColors.white};
        text-decoration: underline;
        cursor: pointer;
      `;
    case 'wrapper':
    default:
      return ``;
  }
};

export const LinkSC = styled.a<LinkSCProps>`
  font-family: ${({ theme }) => theme.typography.fontFamily};
  text-decoration: none;
  color: inherit;
  &:focus,
  &:hover,
  &:active {
    text-decoration: none;
  }
  ${({ $type, theme }) => getLinkStylesByType($type, theme)}
`;
