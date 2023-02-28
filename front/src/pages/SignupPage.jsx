import { Box, Button, PasswordInput, Text, TextInput } from '@mantine/core'
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'

const SignupPage = () => {
  // Add some states to control your inputs
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const handleSubmit = async event => {
    event.preventDefault()
    try {
      const response = await axios.post('http://localhost:5005/auth/signup', {
        username,
        password,
      })
      console.log(response.data)

      if (response.status === 201) {
        navigate('/login')
      }
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <Box
      sx={{
        margin: '0 auto',
        maxWidth: '400px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        height: 'calc(100vh - 100px)',
      }}
    >
      <Text align='center' size='xl' weight='bold'>
        Signup
      </Text>
      <Box
        component='form'
        sx={{ display: 'flex', flexDirection: 'column', gap: '20px', marginTop: '2rem' }}
        onSubmit={handleSubmit}
      >
        <TextInput label='Username' variant='filled' withAsterisk value={username}
          onChange={event => setUsername(event.target.value)}/>
        <PasswordInput label='Password' variant='filled' withAsteriskvalue={password}
          onChange={event => setPassword(event.target.value)} />
        <Button
          type='submit'
          variant='filled'
          color='cyan'
          sx={{ marginTop: '1rem', alignSelf: 'center' }}
        >
          Register
        </Button>
      </Box>
    </Box>
  )
}

export default SignupPage
