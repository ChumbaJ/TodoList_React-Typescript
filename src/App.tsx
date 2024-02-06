import { Container, Typography } from '@mui/material'

import './App.css'
import NewTaskInput from './components/TaskInput/TaskInput'


function App() {
  
  return (
    <Container maxWidth = 'sm'>
      <Typography 
        fontSize = {34}
        fontWeight={400} 
        color = {"primary.light"} 
        variant = 'h1'
        paddingBottom={3}
      >TODO</Typography>
      <NewTaskInput></NewTaskInput>
    </Container>
  )
}

export default App
