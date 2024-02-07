import { Box, Checkbox, FormControlLabel, IconButton, Stack, TextField } from "@mui/material"
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

const isEdit = false;

function TaskPlan_newTask() {
    return (
        <Stack direction='row' justifyContent={'space-between'} alignItems='center'>
            <Box display='flex' alignItems='center'>
                {
                    isEdit ? <TextField variant="standard" label='Имя задачи'/> 
                    : 
                    <FormControlLabel control={<Checkbox/>} label='Task'/>
                }
            </Box>
            <Box alignItems='center'>
                <IconButton sx={{p:0, mr:0.5, ml:2}}>
                    <EditIcon color='info'/>
                </IconButton>
                <IconButton>
                    <DeleteIcon color='warning'/>
                </IconButton>
            </Box>
        </Stack>
    )
}

export default TaskPlan_newTask