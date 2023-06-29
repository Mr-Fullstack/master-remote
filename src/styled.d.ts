import {} from 'styled-components';// Import type from above file
import theme from '../theme';

type ThemeType = typeof theme;
declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType {} // extends the global DefaultTheme with our ThemeType.
}
