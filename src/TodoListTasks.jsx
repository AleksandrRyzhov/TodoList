import React from 'react';
import './App.css';
import TodoListTask from "./TodoListTask";

class TodoListTasks extends React.Component {
    render = () => {

        let taskElement =  this.props.tasks.map (task => <TodoListTask changeTask={this.props.changeTask} changeTitle={this.props.changeTitle} changeStatus={this.props.changeStatus} task={task}/>)

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

