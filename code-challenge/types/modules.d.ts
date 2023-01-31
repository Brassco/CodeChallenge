import 'styled-components';
import theme from '../theme';

export type MaybeArray<T> = T | T[];
export type ArrayType<A> = A extends Iterable<infer T> ? T : never;

type ThemeType = typeof theme;

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType {}
}
