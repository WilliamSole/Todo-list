import useLocalStorageState from './useLocalStorageState';
import uuid from 'uuid/v4';

export default initialTodos => {
    const [todos, setTodos] = useLocalStorageState('todos', initialTodos);

    return{
        todos,
        addTodo: newTodoText => {
            setTodos([...todos, { id: uuid(), task: newTodoText, completed: false }])
        },
        removeTodo: todoId => {
            const updatedTodos = todos.filter(todo => todo.id !== todoId);
            setTodos(updatedTodos);
        },
        toggleTodo: todoId => {
            const updatedTodos = todos.map(todo => todo.id === todoId ? { ...todo, completed: !todo.completed } : todo)
            setTodos(updatedTodos);
        },
        editTodo: (todoId, newTask) => {
            const updatedTodos = todos.map(todo => todo.id === todoId ? { ...todo, task: newTask } : todo)
            setTodos(updatedTodos);
        },
        onDragEnd: result => {
            const { destination, source, draggableId } = result;

            if(!destination) {
                return;
            }

            if(destination.droppableId === source.droppableId && destination.index === source.index) {
                return;
            }

            const newTodos = reorder(
                todos,
                source.index,
                destination.index
            );

            setTodos(newTodos);
        }
    }
};

const reorder = (list, startIndex, endIndex) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);

    return result;
};