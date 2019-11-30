import React from 'react';
import './App.css';
import TodoList from "./TodoList";
import AddNewItemForm from "./AddNewItemForm";
import {connect} from "react-redux";
import {ADD_TODOLIST, addTodolistAC} from "./reducer";

class App extends React.Component {

    nextTodoListId = 0;

    addTodoList = (title) => {

        let newTodoList = {
            id: this.nextTodoListId,
            title: title,
            tasks: []
        }

        this.props.addTodolist(newTodoList)
        this.nextTodoListId++;


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
        addTodolist: (newTodolist) => {
            const action = addTodolistAC(newTodolist)

            dispatch(action)
        }
    }
}

const ConnectedApp = connect(mapStateToProps, mapDispatchToProps)(App);
export default ConnectedApp;


