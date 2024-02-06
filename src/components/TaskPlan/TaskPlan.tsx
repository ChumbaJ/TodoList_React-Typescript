import { Box, Checkbox, IconButton, Stack, Typography } from "@mui/material"
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

function TaskPlan() {
    return (
        <Stack direction='row' alignItems='center'>
            <Checkbox/>
            <Typography>Task</Typography>
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

export default TaskPlan