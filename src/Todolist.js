import React from 'react';
import './App.css';
import TodoListTasks from "./TodoListTasks";
import TodoListFooter from "./TodoListFooter";
import TodoListTitle from "./TodoListTitle";
import AddNewItemForm from "./AddNewItemForm";
import {connect} from "react-redux";
import {
    ADD_TASK,
    addTaskAC,
    CHANGE_TASK,
    changeTaskAC,
    DEL_TASK,
    DEL_TODOLIST,
    deleteTodolistkAC,
    delTaskAC
} from "./reducer";

class TodoList extends React.Component {



    nextTaskId = 0;

    state = {

        filterValue: "All"
    };

    addTask = (newText) => {
        let newTask = {
            id: this.nextTaskId,
            title: newText,
            isDone: false,
            priority: "low"
        };
        this.nextTaskId++;
        this.props.addTask(newTask, this.props.id)


    }

    changeFilter = (newFilterValue) => {
        this.setState( {
            filterValue: newFilterValue
        });
    }

    changeTask = (taskId, obj) => {
        this.props.changeTask(taskId, obj, this.props.id)
    }
    changeStatus = (taskId, isDone) => {
        this.changeTask(taskId, {isDone: isDone});
    }
    changeTitle = (taskId, title) => {
        this.changeTask(taskId, {title: title});
    }
    delTodolist=()=> {
        this.props.deleteTodolist(this.props.id)
    }
    deleteTask=(taskId)=> {
        this.props.delTask(taskId, this.props.id)
    }
    render = () => {

        return (

                <div className="todoList">
                    <div className="todoList-header">

                            <TodoListTitle title={this.props.title} delTodolist = {this.delTodolist}/>
                            <AddNewItemForm addItem={this.addTask} />
                    </div>

                    <TodoListTasks changeStatus={this.changeStatus }
                                   changeTitle={this.changeTitle }
                                   deleteTask={this.deleteTask}
                                   tasks={this.props.tasks.filter(t => {
                        if (this.state.filterValue === "All") {
                            return true;
                        }
                        if (this.state.filterValue === "Active") {
                            return t.isDone === false;
                        }
                        if (this.state.filterValue === "Completed") {
                            return t.isDone === true;
                        }
                    })}/>
                    <TodoListFooter changeFilter={this.changeFilter} filterValue={this.state.filterValue} />

                </div>

        );
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        addTask: (newTask, todolistId) => {
            const action = addTaskAC(newTask, todolistId)
            dispatch(action)
        },
        changeTask: (taskId, obj, todolistId) => {
            const action = changeTaskAC(taskId, obj, todolistId)
            dispatch(action)
        },
        deleteTodolist: (todolistId) => {
            const action = deleteTodolistkAC(todolistId)

            dispatch(action)
        },
        delTask: (taskId, todolistId) => {
            const action = delTaskAC(taskId, todolistId)
            dispatch(action)
        }
    }
}

const ConnectedTodoList = connect(null, mapDispatchToProps)(TodoList);
export default ConnectedTodoList;

