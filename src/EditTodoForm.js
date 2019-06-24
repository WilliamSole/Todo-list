import React from 'react';
import useInputState from './hooks/useInputState';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import CheckIcon from '@material-ui/icons/Check';
import CancelIcon from '@material-ui/icons/Cancel';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';

function EditTodoForm({ id, task, editTodo, toggleEditForm }){
    const [value, handleChange, reset] = useInputState(task);
    return(
        <form 
            onSubmit={(e) => {
                e.preventDefault();
                editTodo(id, value);
                reset();
                toggleEditForm();
            }}
            style={{
                marginLeft: '1rem',
                width: '70%'
            }}
        >
                <TextField 
                    margin='normal' 
                    value={value} 
                    onChange={handleChange} 
                    fullWidth 
                    autoFocus
                />
            <ListItemSecondaryAction>
                <IconButton aria-label='Cancel' onClick={toggleEditForm}>
                    <CancelIcon />
                </IconButton>
                <IconButton aria-label='Delete' type='submit'>
                    <CheckIcon />
                </IconButton>
            </ListItemSecondaryAction>
        </form>
    )
}

export default EditTodoForm;