import React from 'react';
import './App.css';

class TodoListTask extends React.Component {

    onIsDoneChanged = (e)=> {
        this.props.changeStatus(this.props.task, e.currentTarget.checked)
    }

    render = () => {
        return (
            <div className="App">
                <div className="todoList">
                    <div className="todoList-tasks">
                        <div className="todoList-task">
                            <input onChange={this.onIsDoneChanged} type="checkbox" checked={this.props.task.isDone}/>
                            <span>{this.props.task.title}, priority: {this.props.task.priority}</span>
                        </div>

                    </div>
                </div>
            </div>
        );
    }
}

export default TodoListTask;

