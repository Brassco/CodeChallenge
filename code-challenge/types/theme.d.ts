import { Theme, ThemeOptions } from '@mui/material/styles';
import { customTheme } from '../theme';

export type CustomTheme = typeof customTheme & Theme;

declare module '@mui/material/styles' {
  interface CustomThemeOptions extends ThemeOptions {}
  export function createTheme(options?: CustomThemeOptions): CustomTheme;
}

export interface MuiVariantOverrides {
  primary: true;
  secondary: true;
  menu: true;
}

declare module '@mui/material/Button/Button' {
  interface ButtonPropsVariantOverrides extends MuiVariantOverrides {}
}
