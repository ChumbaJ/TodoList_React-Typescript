import './App.css'
import { Container, Typography } from '@mui/material'
import NewTaskInput from './components/TaskInput/TaskInput'
import TaskPlan from './components/TaskPlanComponent/TaskPlan'
import TaskDone from './components/TaskDone/TaskDone'
import { useState } from 'react'

interface Itask {
  taskName: string
  isEdit: boolean
  isDone: boolean
  toDelete: boolean
}

type TaskListType = Array<Itask> | [];


function App() {
  const [taskList, setTaskList] = useState<TaskListType>([]);

  const addNewTask = (e, task: string) => { 
    e.preventDefault();

    setTaskList([
      ...taskList,
      {
        taskName: task,
        isEdit: false,
        isDone: false,
        toDelete: false
      }
    ])



  }

  const submitEditTask = (e, taskToEdit: Itask) => {
    e.preventDefault();
    taskToEdit.isEdit = !taskToEdit.isEdit; 
    setTaskList([...taskList])
  }

  const onDeleteTask = (task) => {
    task.toDelete = true;
    setTaskList(taskList.filter(taskObj => taskObj.toDelete != true));
  }

  return (
    <Container disableGutters={true} sx={{mt: 4, mb:4 , minHeight: 600, p:8, borderRadius: 4, boxShadow: 2}} maxWidth = 'sm'>
      <Typography 
        fontSize = {34}
        fontWeight = {400} 
        color = {"primary.light"} 
        variant = 'body1'
        marginBottom = {3}
      >TODO</Typography>

      <NewTaskInput addNewTask = {addNewTask}></NewTaskInput>
      <TaskPlan taskList = {taskList} onDeleteTask = {onDeleteTask} onSubmitEdit = {submitEditTask}/>
      <TaskDone/>
    </Container>
  )
}

export default App
