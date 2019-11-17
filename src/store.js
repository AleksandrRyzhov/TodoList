import {createStore} from "redux";

const initialState = {
    todolists: [
       {"id":0,"title":"1", tasks:[{"id":0,"title":"erf","isDone":false,"priority":"low"}],"filterValue":"All"},
        {"id":1,"title":"2", tasks: [{"id":0,"title":"reg","isDone":false,"priority":"low"}],"filterValue":"All"}
    ]
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD-TODOLIST":
            return {
                ...state,
                todolists: [...state.todolists, action.newTodolist]
            }
            case "DEL-TODOLIST":
            return {
                ...state,
                todolists: state.todolists.filter(tl=> tl.id !== action.todolistId)
            }
            case "DEL-TASK":
            return {
                ...state,
                todolists: state.todolists.map( tl=> {
                    debugger
                    if (tl.id === action.todolistId) {
                        return {...tl, tasks: tl.tasks.filter(t => t.id !== action.taskId)}

                    }
                    else {
                        return tl
                    }
                    }
                )
            }
        case  "ADD-TASK":
            return {

                ...state,
                todolists: state.todolists.map(tl=> {

                    if (tl.id === action.todolistId) {
                        return {...tl, tasks: [...tl.tasks, action.newTask]}

                    }
                    else {
                        return tl
                    }
                })
            }
            case  "CHANGE-TASK":
            return {

                ...state,
                todolists: state.todolists.map(tl=> {

                    if (tl.id === action.todolistId) {
                        return {...tl, tasks: tl.tasks.map(t=>{
                            if(t.id === action.taskId){
                                return {...t, ...action.obj}
                            }
                            else {
                                return t
                            }
                            })

                        }

                    }
                    else {
                        return tl
                    }
                })
            }
    }
    return state;
}



const store = createStore(reducer);
export default store;
