import React from 'react';
import './App.css';

class TodoListTask extends React.Component {

    onIsDoneChanged = (e)=> {
        this.props.changeStatus(this.props.task, e.currentTarget.checked)
    }

    render = () => {

        let classForTask = this.props.task.isDone ? "todoList-task done" : "todoList-task";

        return (
            <div className="App">
                <div className="todoList">
                    <div className="todoList-tasks">
                        <div className={classForTask}>
                            <input  type="checkbox" onChange={this.onIsDoneChanged} checked={this.props.task.isDone}/>
                            <span>{this.props.task.title}, priority: {this.props.task.priority}</span>
                        </div>

                    </div>
                </div>
            </div>
        );
    }
}

export default TodoListTask;

