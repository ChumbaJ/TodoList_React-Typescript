import './App.css'
import { Container, Typography } from '@mui/material'
import NewTaskInput from './components/TaskInput/TaskInput'
import TaskPlan from './components/TaskPlanComponent/TaskPlan'
import TaskDone from './components/TaskDone/TaskDone'

function App() {
  
  return (
    <Container sx={{mt: 4}} maxWidth = 'sm'>
      <Typography 
        fontSize = {34}
        fontWeight = {400} 
        color = {"primary.light"} 
        variant = 'body1'
        paddingBottom = {3}
      >TODO</Typography>
      <NewTaskInput></NewTaskInput>

      <TaskPlan/>

      <TaskDone/>
    </Container>
  )
}

export default App
