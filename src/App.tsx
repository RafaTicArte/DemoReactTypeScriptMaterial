import React, { useState } from 'react'
import Form from './components/Form'
import Registered from './components/Registered'
import Typography from '@mui/material/Typography'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { UserLogin } from './types/Types'
import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'
import './App.css'

const theme = createTheme()

const App = (): JSX.Element => {
  const [registered, setRegistered] = useState<Boolean>(false)
  const [user, setUSer] = useState<UserLogin>({ email: '', password: '' })

  return (
    <ThemeProvider theme={theme}>
      <Typography component="h1" variant="h3" align="center" color="text.primary" gutterBottom>
        Demo React with TypeScript and Material UI
      </Typography>
      {registered === true
        ? (
        <Registered data={user} onRegisteredBack={() => setRegistered(false)} />
          )
        : (
        <Form
          onFormSubmit={(data: UserLogin) => {
            setRegistered(true)
            setUSer(data)
          }}
        />
          )}
    </ThemeProvider>
  )
}

export default App
