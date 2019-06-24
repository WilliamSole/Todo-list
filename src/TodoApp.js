import React from 'react';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';

import useTodoState from './hooks/useTodoState';
import TodoList from './TodoList';
import TodoForm from './TodoForm';

import { DragDropContext } from 'react-beautiful-dnd';

import uuid from 'uuid/v4';

function TodoApp() {
    const defaultTodos = [
        { id: uuid(), task: 'Clean lion den', completed: false },
        { id: uuid(), task: 'Repair Ford Mustang GT', completed: true },
        { id: uuid(), task: 'Establish connection with alien life', completed: false }
    ];
    const initialTodos = defaultTodos;
    const { todos, addTodo, removeTodo, toggleTodo, editTodo, onDragEnd } = useTodoState(initialTodos);

    return (
        <Paper
            style={{
                padding: 0,
                margin: 0,
                height: '100vh',
                backgroundColor: '#fafafa'
            }}
            elevation={0}
        >
            <AppBar color='primary' position='static' style={{ height: '64px' }}>
                <Toolbar>
                    <Typography color='inherit'>TODOS</Typography>
                </Toolbar>
            </AppBar>
            <Grid container justify='center' style={{ marginTop: '1rem' }}>
                <Grid item xs={11} md={8} lg={6}>
                    <TodoForm addTodo={addTodo} />
                    <DragDropContext
                        onDragEnd={onDragEnd}
                    >
                        <TodoList todos={todos} removeTodo={removeTodo} toggleTodo={toggleTodo} editTodo={editTodo} />
                    </DragDropContext>
                </Grid>
                </Grid>
        </Paper>
            )
        }
        
export default TodoApp;