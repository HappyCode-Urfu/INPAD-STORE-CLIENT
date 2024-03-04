import { createContext, FC, ReactNode, useState } from 'react'
import { Theme, ThemeContextType } from 'utils/ThemeContext/theme.types.ts'

export const ThemeContext = createContext<ThemeContextType | null>(null)

const ThemeProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [themeMode, setThemeMode] = useState<Theme>('light')
  return (
    <ThemeContext.Provider value={{ theme: themeMode, changeTheme: setThemeMode }}>
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeProvider
