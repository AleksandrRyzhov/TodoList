import React from 'react';
import './App.css';

class TodoListTask extends React.Component {
    render = () => {
        return (
            <div className="App">
                <div className="todoList">
                    <div className="todoList-tasks">
                        <div className="todoList-task">
                            <input type="checkbox" checked={this.props.isDone}/>
                            <span>{this.props.title}, priority: {this.props.priority}</span>
                        </div>

                    </div>
                </div>
            </div>
        );
    }
}

export default TodoListTask;

