import React from 'react';
import './App.css';

class TodoListHeader extends React.Component {
    constructor(props) {
        super(props);

    }

    state = {
        error: false,
        title: ""
    };

    onAddTaskClick = () => {
        let newText = this.state.title;
        this.setState({
            title: ''
        });
        if (newText === "") {
            this.setState({error: true})
        } else {
            this.setState({error: false})
            this.props.addTask(newText)
        }


    };

    onKeyPress = (e)=> {
        if (e.key === "Enter"){
            this.onAddTaskClick()
        }
    }

    onTitleChanged = (e)=> {
        this.setState({
            error: false,
            title: e.currentTarget.value
        })
    }

    render = () => {

        let classForError = this.state.error === true ? "error" : "";


        return (
            <div className="App">
                <div className="todoList">
                    <div className="todoList-header">
                        <h3 className="todoList-header__title">What to Learn</h3>
                        <div className="todoList-newTaskForm">
                            <input value={this.state.title} onKeyPress={this.onKeyPress} onChange={this.onTitleChanged} className={classForError} type="text"
                                   placeholder="New task name"/>
                            <button onClick={this.onAddTaskClick}>Add</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default TodoListHeader;

