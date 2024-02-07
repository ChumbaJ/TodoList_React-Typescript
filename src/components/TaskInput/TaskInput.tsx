/* eslint-disable no-extra-boolean-cast */
import './TaskInput.css'
import { Box, TextField, IconButton } from "@mui/material"
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import { ChangeEvent, FormEvent, useState } from 'react';

type addNewTaskType = (e: FormEvent, task: string) => void;

interface INewTaskInputProps {
  addNewTask: addNewTaskType;
}

function NewTaskInput({ addNewTask }: INewTaskInputProps) {
  const [taskName, setTask] = useState("");

  const onInput = (e:ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const taskText = e.target.value;
    setTask(taskText);
  }


  return (
    <Box sx={{
        bgcolor: 'white',
        mb: 6
      }}>

        
        <form onSubmit={(e) => {
          addNewTask(e, taskName)
          setTask("");
          }} action="submit" id='task-form'>
          <TextField
            id='newTaskInput'
            value={taskName}
            onChange={(e) => onInput(e)}
            label = {"Имя новой задачи"} 
            autoFocus = {true} 
            fullWidth = {true} 
            variant = 'standard'
            sx = {{
              '& .MuiInputLabel-root': {
                pl: 0.2,
                
              },
              '& .MuiInputLabel-root.Mui-focused': {
                color: "text.secondary"
              }
            }}
          ></TextField>

            <IconButton disabled={ !(Boolean(taskName)) } type='submit' sx={{
              position: "absolute",
              right: 0,
              bottom: 0
            }}>
              <AddRoundedIcon color={ Boolean(taskName) ? 'info' : 'disabled' }></AddRoundedIcon>
            </IconButton>
        </form>       
      </Box>
  )
}

export default NewTaskInput