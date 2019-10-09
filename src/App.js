import React from 'react';
import './App.css';
import TodoListHeader from "./TodoListHeader";
import TodoListTasks from "./TodoListTasks";
import TodoListFooter from "./TodoListFooter";
import TodoListTask from "./TodoListTask";

class App extends React.Component {
    tasks = [
        { title:"JS", isDone:true, priority: "high" },
        { title:"React", isDone:false, priority: "high" },
        { title:"Redux", isDone:true, priority: "high" },
        { title:"CSS&HTML", isDone:true, priority: "low" }
    ];
    filterValue = "All"

    render = () => {

        return (
            <div className="App">
                <div className="todoList">
                    <TodoListHeader />
                    <TodoListTasks tasks={this.tasks}/>
                    <TodoListFooter filterValue={this.filterValue}/>

                </div>
            </div>
        );
    }
}

export default App;

