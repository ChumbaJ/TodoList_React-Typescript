import { Box, Checkbox, IconButton, Stack, TextField, Typography } from "@mui/material"
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

const isEdit = false;

function TaskPlan_newTask() {
    return (
        <Stack direction='row' justifyContent={'space-between'} alignItems='center'>
            <Box display='flex' alignItems='center'>
                <Checkbox/>
                {
                    isEdit ? <TextField variant="standard" label='Имя задачи'/> : <Typography>Task</Typography>
                }
            </Box>
            <Box alignItems='center'>
                <IconButton sx={{p:0, mr:0.5, ml:2}}>
                    <EditIcon color='info'/>
                </IconButton>
                <IconButton sx={{p:0}}>
                    <DeleteIcon color='warning'/>
                </IconButton>
            </Box>
        </Stack>
    )
}

export default TaskPlan_newTask