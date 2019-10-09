import React from 'react';
import './App.css';
import TodoListTask from "./TodoListTask";

class TodoListTasks extends React.Component {

    render = () => {

        let taskElements = this.props.tasks.map(task => <TodoListTask title={task.title} isDone={task.isDone} priority = {task.priority}/>)

        return (
            <div className="App">
                <div className="todoList">
                    <div className="todoList-tasks">

                        {taskElements}

                    </div>
                </div>
            </div>
        );
    }
}

export default TodoListTasks;

