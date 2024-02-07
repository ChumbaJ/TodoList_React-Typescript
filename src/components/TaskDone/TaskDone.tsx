import { Box, Checkbox, IconButton, Stack, FormControlLabel, Typography } from "@mui/material"
import DeleteIcon from '@mui/icons-material/Delete';

function TaskDone() {
    return (
        <Stack spacing={2}>
            <Typography align="center" variant="caption" gutterBottom={false} color='text.secondary'>{'ГОТОВО (0)'}</Typography>

            <Stack direction='row' justifyContent='space-between'>
                <Box display='flex' alignItems='center'>
                    <FormControlLabel control={<Checkbox/>} label='Task'/>
                </Box>
                <IconButton>
                    <DeleteIcon color="warning"/>
                </IconButton>
            </Stack>
        </Stack>
    )
}

export default TaskDone