import { Container, Typography } from '@mui/material'

import './App.css'
import NewTaskInput from './components/TaskInput/TaskInput'


function App() {
  
  return (
    <Container maxWidth='sm'>
      <Typography color={"primary.light"} variant='h1'>TODO</Typography>
      <NewTaskInput></NewTaskInput>
    </Container>
  )
}

export default App
