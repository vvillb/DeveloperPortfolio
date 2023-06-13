import { ThemeProvider } from '@emotion/react'
import { CssBaseline } from '@mui/material'
import { VirTheme } from './VirTheme'


const AppTheme = ({children}) => {
  return (
    <ThemeProvider theme={VirTheme}>
        <CssBaseline/>
        {children}
    </ThemeProvider>
  )
}

export default AppTheme