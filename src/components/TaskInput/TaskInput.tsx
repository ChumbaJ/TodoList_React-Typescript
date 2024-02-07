/* eslint-disable no-extra-boolean-cast */
import './TaskInput.css'
import { Box, TextField, IconButton } from "@mui/material"
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import { useState } from 'react';



function NewTaskInput({ addNewTask }) {
  const [taskName, setTask] = useState("");

  const onInput = (e) => {
    const taskText = e.target.value;
    setTask(taskText);
  }



  return (
    <Box sx={{
        bgcolor: 'white',
        mb: 6
      }}>

        
        <form onSubmit={(e) => addNewTask(e, taskName)} action="submit" id='task-form'>
          <TextField
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
                color: "#00000099"
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