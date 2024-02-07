import { Stack, Typography } from "@mui/material"
import TaskPlan_newTask from "./TaskPlan_newTask/TaskPlan_newTask"
import { FormEvent } from "react"

interface Itask {
    taskName: string
    isEdit: boolean
    isDone: boolean
    toDelete: boolean
}
  
type TaskListType = Array<Itask> | [];

type checkBoxChangedFuncType = (task: Itask) => void;
type deleteTaskFuncType = (task: Itask) => void;
type onSubmitEditType = (e: FormEvent, taskToEdit: Itask) => void;

interface ITaskPlanProps {
    taskList: TaskListType;
    onSubmitEdit: onSubmitEditType;
    onDeleteTask: deleteTaskFuncType;
    onCheckboxChanged: checkBoxChangedFuncType;
}


function TaskPlan({ taskList, onSubmitEdit, onDeleteTask, onCheckboxChanged}: ITaskPlanProps) {
    const plannedTasks = taskList.filter(task => task.isDone === false).length;


    if (plannedTasks > 0) {
        return (
            <Stack mb={4} spacing = {1}>
                <Typography
                component = {'p'}
                variant = 'caption'
                gutterBottom = {false}
                align = {'center'}
                color='text.secondary'
                >{`ПЛАН (${plannedTasks})`}</Typography>
    
                {taskList.map(task => {
                    if (task.isDone) {
                        // EMPTY
                    } else {
                        return (
                            <TaskPlan_newTask 
                            key={crypto.randomUUID()} 
                            task = {task} 
                            onSubmitEdit = {onSubmitEdit}
                            onDeleteTask = {onDeleteTask}
                            onCheckboxChanged = {onCheckboxChanged}
                            />)
                    }
                }
                )}
            </Stack>
        )
    } else {
        return <></>
    }
    
}

export default TaskPlan