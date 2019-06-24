import React from 'react';
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import Todo from './Todo';

import { Droppable } from 'react-beautiful-dnd';

import uuid from 'uuid/v4';

function TodoList({ todos, removeTodo, toggleTodo, editTodo }) {
    return (
        <Droppable droppableId={uuid()}>
            {provided => (
                <Paper ref={provided.innerRef} {...provided.droppableProps}>
                    <List>
                        {
                            todos.map((todo, i) => (
                                <>
                                    <Todo
                                        {...todo}
                                        index={i}
                                        task={todo.task}
                                        removeTodo={removeTodo}
                                        toggleTodo={toggleTodo}
                                        editTodo={editTodo}
                                    />
                                    {i < todos.length - 1 && <Divider />}
                                </>
                            ))
                        }
                        {provided.placeholder}
                    </List>
                </Paper>
            )}
        </Droppable>
    )
}

export default TodoList;