import './TaskInput.css'
import { Box, TextField, IconButton } from "@mui/material"
import AddRoundedIcon from '@mui/icons-material/AddRounded';

function NewTaskInput() {

    return (
        <Box sx={{
            bgcolor: 'white',
            mb: 6
          }}>
    
            
            <form action="submit" id='task-form'>
              <TextField 
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
    
                <IconButton sx={{
                  position: "absolute",
                  right: 0,
                  bottom: 0
                }}>
                  <AddRoundedIcon color='primary'></AddRoundedIcon>
                </IconButton>
            </form>      
          </Box>
    )
}

export default NewTaskInput