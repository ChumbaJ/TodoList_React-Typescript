/* eslint-disable no-extra-boolean-cast */
import './TaskInput.css'
import { Box, TextField, IconButton } from "@mui/material"
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import { useState } from 'react';



function NewTaskInput({ addNewTask }) {
  const [task, setTask] = useState("");

  const onInput = (e) => {
    const taskText = e.target.value;
    setTask(taskText);
  }



  return (
    <Box sx={{
        bgcolor: 'white',
        mb: 6
      }}>

        
        <form onSubmit={(e) => addNewTask(e, task)} action="submit" id='task-form'>
          <TextField
            value={task}
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
                color: "#00000099"
              }
            }}
          ></TextField>

            <IconButton disabled={ !(Boolean(task)) } type='submit' sx={{
              position: "absolute",
              right: 0,
              bottom: 0
            }}>
              <AddRoundedIcon color={ Boolean(task) ? 'info' : 'disabled' }></AddRoundedIcon>
            </IconButton>
        </form>       
      </Box>
  )
}

export default NewTaskInput