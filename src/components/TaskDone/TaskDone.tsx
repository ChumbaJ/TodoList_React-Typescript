import { Box, Checkbox, IconButton, Stack, FormControlLabel, Typography } from "@mui/material"
import DeleteIcon from '@mui/icons-material/Delete';
import './TaskDone.css'


function TaskDone({ taskList, onCheckboxChanged, onDeleteTask }) {
    const doneTasks = taskList.filter(task => task.isDone)

    if (doneTasks.length > 0) {
        return (
            <Stack spacing={1}>
                <Typography 
                align="center" 
                variant="caption" 
                gutterBottom={false} 
                color='text.secondary'
                >{`ГОТОВО (${doneTasks.length})`}</Typography>
    
    
                {doneTasks.map(task => 
                    <Stack className="doneTask" key={crypto.randomUUID()} direction='row' justifyContent='space-between'>
                        <Box display='flex' alignItems='center'>
                            <FormControlLabel control={<Checkbox onChange={() => onCheckboxChanged(task)} defaultChecked={true}/>} label={task.taskName}/>
                        </Box>
                        <IconButton className="doneTask__button" onClick={() => onDeleteTask(task)} sx={{pr:0.4}}>
                            <DeleteIcon color="warning"/>
                        </IconButton>
                    </Stack>
                )}
                
            </Stack>
        )
    } else {
        return <></>
    }

    
}

export default TaskDone