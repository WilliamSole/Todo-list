import React from 'react';
import EditTodoForm from './EditTodoForm';
import useToggleState from './hooks/useToggleState';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';

import { Draggable } from 'react-beautiful-dnd';

function Todo({ id, index, task, completed, removeTodo, toggleTodo, editTodo }) {
    const [isEditing, toggle] = useToggleState();

    return (
        <Draggable draggableId={id} index={index}>
            {(provided) =>
                <ListItem
                    style={{ height: '54px' }}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    ref={provided.innerRef}
                >
                    {isEditing ? (<EditTodoForm id={id} task={task} editTodo={editTodo} toggleEditForm={toggle} />) : (
                        <>
                            <Checkbox tabIndex={-1} checked={completed} onClick={() => toggleTodo(id)} />
                            <ListItemText style={{ textDecoration: completed ? 'line-through' : 'none' }}>{task}</ListItemText>
                            <ListItemSecondaryAction>
                                <IconButton aria-label='Edit' onClick={toggle}>
                                    <EditIcon />
                                </IconButton>
                                <IconButton aria-label='Delete' onClick={() => removeTodo(id)}>
                                    <DeleteIcon />
                                </IconButton>
                            </ListItemSecondaryAction>
                        </>
                    )}
                </ListItem>
            }
        </Draggable>
    )
}

export default Todo;