/* eslint-disable no-extra-boolean-cast */
import { Box, Checkbox, FormControlLabel, IconButton, Stack, TextField } from "@mui/material"
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import DoneIcon from '@mui/icons-material/Done';
import { useState } from "react";

import './TaskPlan_newTask.css'

function TaskPlan_newTask({ task, onSubmitEdit, onDeleteTask, onCheckboxChanged }) {
    const [newTaskName, setNewTaskName] = useState(task.taskName);

    if (task.isEdit) {
        return (
            <Box sx={{position: 'relative'}}>
                <form action="submit" onSubmit={(e) => {
                    task.taskName = newTaskName;
                    onSubmitEdit(e, task)
                    }}>
                    <TextField 
                        value={newTaskName}
                        onChange={e => setNewTaskName(e.target.value)}
                        variant="standard"
                        label='Имя новой задачи'
                        fullWidth={true}
                        sx={{
                            '& .MuiInputLabel-root.Mui-focused': {
                                color: "text.secondary"
                            },
                            mb: 1.2
                        }}
                    />

                    <IconButton
                        disabled={ !Boolean(newTaskName) }
                        type="submit"
                        sx={{
                            position: 'absolute',
                            right: 0,
                            bottom: 9
                        }}
                    >
                        <DoneIcon color={newTaskName ? "info" : "disabled"}/>
                    </IconButton>
                </form>
            </Box>
        )
    } else {
        return (
            <Stack className="task" direction='row' justifyContent={'space-between'} alignItems='center'>
                <Box display='flex' alignItems='center'>
                    <FormControlLabel control={<Checkbox onChange={() => onCheckboxChanged(task)}/>} label={task.taskName}/>
                </Box>
                <Box className="task__buttons" alignItems='center'>
                    <IconButton 
                        onClick={(e) => onSubmitEdit(e, task)}
                        sx={{p:0.4, mr:0.5, ml:2}}
                        >
                        <EditIcon color='info'/>
                    </IconButton>

                    <IconButton
                        onClick={() => onDeleteTask(task)}
                        sx={{p:0.4}}
                    >
                        <DeleteIcon color='warning'/>
                    </IconButton>
                </Box>
            </Stack>
        )
    }

}

export default TaskPlan_newTask