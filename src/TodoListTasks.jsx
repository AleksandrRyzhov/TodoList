import React from 'react';
import './App.css';
import TodoListTask from "./TodoListTask";

class TodoListTasks extends React.Component {
    render = () => {

        let taskElement =  this.props.tasks.map (task => <TodoListTask title={task.title} isDone={task.isDone}  priority={task.priority}/>)

        return (

            <div className="App">
                <div className="todoList">
                    <div className="todoList-tasks">
                        {taskElement}
          </div>
                </div>
            </div>
        );
    }
}

export default TodoListTasks;

