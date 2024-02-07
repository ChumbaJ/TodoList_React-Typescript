import { Stack, Typography } from "@mui/material"
import TaskPlan_newTask from "./TaskPlan_newTask/TaskPlan_newTask"



function TaskPlan() {
    return (
        <Stack spacing = {2}>
            <Typography
            component = {'p'}
            variant = 'caption'
            gutterBottom = {false}
            align = {'center'}
            color = {'#00000099'}
            >{'ПЛАН (0)'}</Typography>

            <TaskPlan_newTask/>
        </Stack>
    )
}

export default TaskPlan