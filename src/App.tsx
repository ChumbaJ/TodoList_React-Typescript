import { Box, Container, IconButton, TextField, Typography } from '@mui/material'
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import './App.css'

function App() {
  
  return (
    <Container>
      <Box sx={{
        bgcolor: 'white'
      }}>

        <Typography color={"primary.light"} variant='h1'>TODO</Typography>
        <form action="submit" id='task-form'>
          <TextField label={"Имя новой задачи"} autoFocus={true} fullWidth={true} variant='standard'>

          </TextField>

            <IconButton>
              <AddRoundedIcon color='primary'></AddRoundedIcon>
            </IconButton>
        </form>      
      </Box>
    </Container>
  )
}

export default App
