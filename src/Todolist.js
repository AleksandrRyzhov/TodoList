import React from 'react';
import './App.css';
import TodoListTasks from "./TodoListTasks";
import TodoListFooter from "./TodoListFooter";
import TodoListTitle from "./TodoListTitle";
import AddNewItemForm from "./AddNewItemForm";

class TodoList extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.restoreState();
    }


    nextTaskId = 0;
    state = {
        tasks: [],
        filterValue: "All"
    }

    saveState = () => {
        let stateAsString = JSON.stringify(this.state);
        localStorage.setItem("our-state" + this.props.id, stateAsString);
    }

    restoreState = ()=> {
        debugger
        let state = {
            tasks: [],
            filterValue: "All"
        };
        let stateAsString = localStorage.getItem("our-state" + this.props.id);
        if (stateAsString != null) {
          state = JSON.parse(stateAsString)
        }
        this.setState(state, ()=> {
            this.state.tasks.forEach( t => {
                if (t.id >= this.nextTaskId) {
                    this.nextTaskId = t.id + 1

                }
            })
        })
    }

    addItem = (newText) => {
        let newTask = {id: this.nextTaskId, title: newText, isDone: true, priority: "high"};
        this.nextTaskId++
        let newTasks = [...this.state.tasks, newTask];
        this.setState({tasks: newTasks}, () => {this.saveState();})
        this.saveState();
    };

    changeFilter = (newFilterValue) => {
        this.setState({
            filterValue: newFilterValue
        })
    }

    changeTask = (taskId, obj)=> {
        let newTasks = this.state.tasks.map(t => {
            if (t.id !== taskId) {
                return t
            }
            else {
                return {...t, ...obj}
            }}
        )
        this.setState({
            tasks: newTasks
        })
    };

    changeStatus = (taskId, isDone)=> {
        this.changeTask(taskId, {isDone: isDone})}


    changeTitle = (taskId, title)=> {
        this.changeTask(taskId, {title: title})}

    render = () => {
debugger
        return (
            <div className="App">
                <div className="todoList">

                    <TodoListTitle  title={this.props.title} />
                    <AddNewItemForm addItem={this.addItem}  />

                    <TodoListTasks changeTitle={this.changeTitle} changeStatus={this.changeStatus} tasks={this.state.tasks.filter(t => {
                        if (this.state.filterValue === 'All') {
                            return true
                        }
                        if (this.state.filterValue === 'Completed') {
                            return t.isDone === true
                        }
                        if (this.state.filterValue === 'Active') {
                            return t.isDone === false
                        }
                    })}/>
                    <TodoListFooter changeFilter={this.changeFilter} filterValue={this.state.filterValue}/>

                </div>
            </div>
        );
    }
}

export default TodoList;

