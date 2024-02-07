import { Stack, Typography } from "@mui/material"
import TaskPlan_newTask from "./TaskPlan_newTask/TaskPlan_newTask"

function TaskPlan() {
    return (
        <Stack mb={4} spacing = {2}>
            <Typography
            component = {'p'}
            variant = 'caption'
            gutterBottom = {false}
            align = {'center'}
            color='text.secondary'
            >{'ПЛАН (0)'}</Typography>
            <TaskPlan_newTask/>
        </Stack>
    )
}

export default TaskPlan