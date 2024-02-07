import './App.css'
import { Container, Typography } from '@mui/material'
import NewTaskInput from './components/TaskInput/TaskInput'
import TaskPlan from './components/TaskPlanComponent/TaskPlan'
import TaskDone from './components/TaskDone/TaskDone'

function App() {
  const taskList = [
    {
      taskName: '',
      isEdit: false,
      isDone: false
    }
  ]

  const addNewTask = (e, task) => { 
    e.preventDefault();
    console.log("added -", task);
  }

  return (
    <Container disableGutters={true} sx={{mt: 4, minHeight: 600, p:8, borderRadius: 4, boxShadow: 2}} maxWidth = 'sm'>
      <Typography 
        fontSize = {34}
        fontWeight = {400} 
        color = {"primary.light"} 
        variant = 'body1'
        marginBottom = {3}
      >TODO</Typography>

      <NewTaskInput addNewTask = {addNewTask}></NewTaskInput>

      <TaskPlan/>
      <TaskDone/>
    </Container>
  )
}

export default App
