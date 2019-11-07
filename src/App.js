import React from 'react';
import './App.css';
import TodoList from "./TodoList";
import AddNewItemForm from "./AddNewItemForm";

class App extends React.Component {


    componentDidMount() {
        this.restoreState();
    }


    nextTodolistsId = 0;
    state = {
        todolists: []
    }

    saveState = () => {
        let stateAsString = JSON.stringify(this.state);
        localStorage.setItem("our-state2", stateAsString);
    }

    restoreState = ()=> {

        let state = {
            todolists: []

        };
        let stateAsString = localStorage.getItem("our-state2");
        if (stateAsString != null) {
            state = JSON.parse(stateAsString)
        }
        this.setState(state, ()=> {
            this.state.todolists.forEach( tl => {
                if (tl.id >= this.nextTodolistsId) {
                    this.nextTodolistsId = tl.id + 1

                }
            })
        })
    }

    addItem = (newText) => {
        debugger
        let newTodolist = {id: this.nextTodolistsId, title: newText};
        this.nextTodolistsId++
        let newTodolists = [...this.state.todolists, newTodolist];
        this.setState({todolists: newTodolists}, () => {this.saveState();})
        this.saveState();
    };



    render = () => {

        const todolists = this.state.todolists.map(tl => <TodoList id={tl.id} title={tl.title}/>)

        return (
            <div>
            <div>
                <AddNewItemForm addItem={this.addItem}/>
            </div>
            <div className="App">
                 {todolists}
            </div>
            </div>
        );
    }
}

export default App;

