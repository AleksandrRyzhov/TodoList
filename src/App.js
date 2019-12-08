import React from 'react';
import './App.css';
import TodoList from "./TodoList";
import AddNewItemForm from "./AddNewItemForm";
import {connect} from "react-redux";
import {addTodolistAC, setTodolistAC} from "./reducer";
import axios from "axios";

class App extends React.Component {

    nextTodoListId = 0;


    componentDidMount() {
        this.restoreState()
    }

    restoreState = () => {
        axios.get("https://social-network.samuraijs.com/api/1.0/todo-lists", {withCredentials: true})
            .then(res => {
               this.props.setTodolist(res.data)
            });
    }


    addTodoList = (title) => {
        axios.post("https://social-network.samuraijs.com/api/1.0/todo-lists",
            {title: title},
            {withCredentials: true,
            headers: {"API-KEY": "a5a28d6b-5efa-4ce5-a3eb-588fbeaafdfd"}
            })
            .then(res => {
                let todolist = res.data.data.item;
                this.props.addTodolist(todolist)
            });
           }



    render = () => {
        debugger
        const todolists = this.props
            .todolists
            .map(tl => <TodoList id={tl.id} title={tl.title} tasks={tl.tasks}/>)

        return (
            <>
                <div>
                   <AddNewItemForm addItem={this.addTodoList}/>
                </div>
                <div className="App">
                    {todolists}
                </div>
            </>
        );
    }
}



const mapStateToProps = (state) => {
    return {
        todolists: state.todolists
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addTodolist: (todolist) => {
            const action = addTodolistAC(todolist)

            dispatch(action)
        },
        setTodolist: (todolists) => {
            const action = setTodolistAC(todolists)

            dispatch(action)
        }
    }
}

const ConnectedApp = connect(mapStateToProps, mapDispatchToProps)(App);
export default ConnectedApp;


