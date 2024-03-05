import { ThemeContext } from 'utils/ThemeContext/themeContext.tsx'
import { Theme, ThemeContextType } from 'utils/ThemeContext/theme.types.ts'
import { ChangeEvent, FC, ReactNode, useContext } from 'react'

const ThemeWrapper: FC<{ children: ReactNode }> = ({ children }) => {
  const { theme, changeTheme } = useContext(ThemeContext) as ThemeContextType
  const handleThemeChange = (event: ChangeEvent<HTMLSelectElement>) => {
    changeTheme(event.target.value as Theme)
  }

  return (
    <div data-theme={theme}>
      //TODO надо переделать
      <select name="toggleTheme" onChange={handleThemeChange}>
        <option value="light">Light</option>
        <option value="dark">Dark</option>
      </select>
      {children}
    </div>
  )
}
export default ThemeWrapper
