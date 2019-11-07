import React from 'react';
import './App.css';

class TodoListTask extends React.Component {


    state = {
        editMode: false
    }

    activateEditMode =() => {
        this.setState({editMode: true})
    }
    deactivateEditMode =() => {
        this.setState({editMode: false})
    }
    onIsDoneChanged = (e)=> {
        this.props.changeStatus(this.props.task.id, e.currentTarget.checked)
    }
    onTitleChanged = (e)=> {
        this.props.changeTitle(this.props.task.id, e.currentTarget.value)
    }

    render = () => {
        debugger

        let classForTask = this.props.task.isDone ? "todoList-task done" : "todoList-task";

        return (
            <div className="App">
                <div className="todoList">
                    <div className="todoList-tasks">
                        <div className={classForTask}>
                            <input  type="checkbox" onChange={this.onIsDoneChanged} checked={this.props.task.isDone}/>
                            {this.state.editMode ? <input onChange={this.onTitleChanged}
                                                          onBlur={this.deactivateEditMode}
                                                          autoFocus={true}
                                                          value={this.props.task.title} /> :
                            <span onClick={this.activateEditMode} >{this.props.task.id} {this.props.task.title},
                                priority: {this.props.task.priority}</span>}
                        </div>

                    </div>
                </div>
            </div>
        );
    }
}

export default TodoListTask;

