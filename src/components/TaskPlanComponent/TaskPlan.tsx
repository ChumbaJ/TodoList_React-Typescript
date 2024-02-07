import { Stack, Typography } from "@mui/material"
import TaskPlan_newTask from "./TaskPlan_newTask/TaskPlan_newTask"



function TaskPlan({ taskList, onSubmitEdit, onDeleteTask }) {

    return (
        <Stack mb={4} spacing = {1}>
            <Typography
            component = {'p'}
            variant = 'caption'
            gutterBottom = {false}
            align = {'center'}
            color='text.secondary'
            >{`ПЛАН (${taskList.length})`}</Typography>

            {taskList.map(task => 
                <TaskPlan_newTask 
                key={crypto.randomUUID()} 
                task = {task} 
                onSubmitEdit = {onSubmitEdit}
                onDeleteTask = {onDeleteTask}
                />
            )}
        </Stack>
    )
}

export default TaskPlan