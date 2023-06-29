import React, { PropsWithChildren } from 'react'
import { ThemeProvider } from 'styled-components';
import theme, { darkColors, lightColors } from '../../theme';

const themeList:{[key:string]:typeof lightColors} = {
  "Light":lightColors,
  "Dark":darkColors
};

interface ThemeContextProps{
  toggleTheme:({name}:{name:'Light' | 'Dark'}) => void;
}

const ThemeContext = React.createContext({} as ThemeContextProps );

function AppThemeContext({children}:PropsWithChildren) {

  const [appTheme,setTheme] = React.useState<typeof theme>({...theme,colors:themeList['Light']});

  const toggleTheme = ({name}:{name:'Light' | 'Dark'}) => {
    if(name)
    {
      setTheme({...appTheme,colors:themeList[name]});
    }
  }
  
  return (

    <ThemeContext.Provider value={{toggleTheme}} >
      <ThemeProvider theme={appTheme}>
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
    
  )
}

export default AppThemeContext;
