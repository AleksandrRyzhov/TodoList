import React from 'react';
import './App.css';
import TodoListTasks from "./TodoListTasks";
import TodoListFooter from "./TodoListFooter";
import TodoListTitle from "./TodoListTitle";
import AddNewItemForm from "./AddNewItemForm";
import {connect} from "react-redux";
import {
    addTaskAC,
    changeTaskAC,
    deleteTodolistkAC,
    delTaskAC, setTaskstAC, setTodolistAC
} from "./reducer";
import axios from "axios";

class TodoList extends React.Component {



    nextTaskId = 0;

    state = {

        filterValue: "All"
    };

    componentDidMount() {
        this.restoreState()
    }

    restoreState = () => {
        axios.get(`https://social-network.samuraijs.com/api/1.0/todo-lists/${this.props.id}/tasks/`,
            {withCredentials: true,
                headers: {"API-KEY": "a5a28d6b-5efa-4ce5-a3eb-588fbeaafdfd"}
            })
            .then(res => {
                this.props.setTasks(res.data.items, this.props.id)
            });
    }

    addTask = (newText) => {

        axios.post(`https://social-network.samuraijs.com/api/1.0/todo-lists/${this.props.id}/tasks/`,
            {title: newText},
            {withCredentials: true,
                headers: {"API-KEY": "a5a28d6b-5efa-4ce5-a3eb-588fbeaafdfd"}
            })
            .then(res => {
                debugger
                let task = res.data.data.item;
                this.props.addTask(task, this.props.id)
            });
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

        axios.delete(`https://social-network.samuraijs.com/api/1.0/todo-lists/${this.props.id}/`,
              {withCredentials: true,
                headers: {"API-KEY": "a5a28d6b-5efa-4ce5-a3eb-588fbeaafdfd"}
            })
            .then(res => {
                this.props.deleteTodolist(this.props.id)
            });

            }
    deleteTask=(taskId)=> {

        axios.delete(`https://social-network.samuraijs.com/api/1.0/todo-lists/tasks/${taskId}`,
            {withCredentials: true,
                headers: {"API-KEY": "a5a28d6b-5efa-4ce5-a3eb-588fbeaafdfd"}
            })
            .then(res => {

                this.props.delTask(taskId, this.props.id)
            });          }
    render = () => {
        let {tasks=[]} = this.props

        return (

                <div className="todoList">
                    <div className="todoList-header">

                            <TodoListTitle title={this.props.title} delTodolist = {this.delTodolist}/>
                            <AddNewItemForm addItem={this.addTask} />
                    </div>

                    <TodoListTasks changeStatus={this.changeStatus }
                                   changeTitle={this.changeTitle }
                                   deleteTask={this.deleteTask}
                                   tasks={tasks.filter(t => {
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
        },
        setTasks: (tasks, todolistId) => {
            const action = setTaskstAC(tasks, todolistId)

            dispatch(action)
        }
    }
}

const ConnectedTodoList = connect(null, mapDispatchToProps)(TodoList);
export default ConnectedTodoList;

