import React from 'react';
import './App.css';
import TodoListHeader from "./TodoListHeader";
import TodoListTasks from "./TodoListTasks";
import TodoListFooter from "./TodoListFooter";

class App extends React.Component {


    state = {
        tasks: [
            {title: 'JS', isDone: true, priority: "high"},
            {title: 'React', isDone: false, priority: "high"},
            {title: 'CSS', isDone: true, priority: "low"},
            {title: 'HTML', isDone: true, priority: "high"},
        ],
        filterValue: "All"
    }


    changeFilter = (newFilterValue) => {
        this.setState({
            filterValue: newFilterValue
        })
    }

    onAddTask = (newText)=>{
        let newTask = {title: newText, isDone: true, priority: "high"};
        let newTasks = [...this.state.tasks, newTask];

        this.setState({tasks: newTasks})
    }

    changeStatus = (task, isDone)=> {
        let newTasks = this.state.tasks.map(t =>  {
            if (t !== task) {
                return t
            }
            else {
                return {...t, isDone: isDone}
            }
        })
        this.setState({tasks: newTasks})
    }

    render = () => {

        return (
            <div className="App">
                <div className="todoList">
                    <TodoListHeader  onAddTask={this.onAddTask}/>
                    <TodoListTasks changeStatus={this.changeStatus} tasks={this.state.tasks.filter(t => {
                        if (this.state.filterValue === "All") {
                            return true
                        }
                        if (this.state.filterValue === "Active") {
                            return t.isDone === false
                        }
                        if (this.state.filterValue === "Completed") {
                            return t.isDone === true
                        }
                    })}/>
                    <TodoListFooter changeFilter={this.changeFilter} filterValue={this.state.filterValue}/>

                </div>
            </div>
        );
    }
}

export default App;

