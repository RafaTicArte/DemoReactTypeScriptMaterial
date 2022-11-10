import React from 'react'
import Container from '@mui/material/Container'
import { Button, Typography } from '@mui/material'
import { UserLogin } from '../types/Types'

interface RegisteredProps {
  data: UserLogin
  onRegisteredBack: Function
}

const Registered = ({ data, onRegisteredBack }: RegisteredProps): JSX.Element => {
  return (
    <Container component="main" maxWidth="xs">
      <Typography component="h1" variant="h5" align="center">
        Registered
      </Typography>
      <Typography component="p" variant="body1" align="center">
        {data.email}
      </Typography>
      <Typography component="p" variant="body1" align="center">
        {data.password}
      </Typography>
      <Button
        type="submit"
        fullWidth
        variant="contained"
        sx={{ mt: 3, mb: 2 }}
        onClick={() => onRegisteredBack()}
      >
        Back
      </Button>
    </Container>
  )
}

export default Registered
