
export const ADD_TODOLIST = 'src/Todolist/ADD-TODOLIST'
export const DEL_TODOLIST = 'src/Todolist/DEL-TODOLIST'
export const DEL_TASK = 'src/Todolist/DEL-TASK'
export const ADD_TASK = 'src/Todolist/ADD-TASK'
export const CHANGE_TASK = 'src/Todolist/CHANGE-TASK'
export const SET_TODOLIST = 'src/Todolist/SET-TODOLIST'
export const SET_TASKS = 'src/Todolist/SET_TASKS'


const initialState = {
    todolists: [
        // {"id":0,"title":"wdfecf",
        //     tasks:[{"id":0,"title":"er","isDone":false,"priority":"low"},
        //         {"id":1,"title":"11","isDone":false,"priority":"low"},
        //         {"id":2,"title":"erf","isDone":false,"priority":"low"}],
        //     filterValue:"All"},
        // {"id":1,"title":"refref",
        //     tasks:[{"id":0,"title":"erf","isDone":false,"priority":"low"},
        //         {"id":1,"title":"erf","isDone":false,"priority":"low"},
        //         {"id":2,"title":"gbgb","isDone":false,"priority":"low"}],
        //     filterValue:"All"},
        // {"id":2,"title":"rfre",
        // tasks:[{"id":0,"title":"rf","isDone":false,"priority":"low"}],
        //     filterValue:"All"},
        // {"id":3,"title":"3tf3", tasks: [], filterValue:"All"}
    ]
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TODOLIST:
            return {
                ...state, todolists: [...state.todolists, action.todolist]
            }
        case SET_TODOLIST:
            return {
                ...state, todolists: action.todolists.map(tl => ({...tl, tasks: []}))
            }
            case SET_TASKS:
            return {
                ...state, todolists: state.todolists.map(tl => {
                    if(tl.id === action.todolistId){
                        return {
                            ...tl, tasks: action.tasks
                        }
                    }
                    else {
                        return tl
                    }
                })
            }
            case DEL_TODOLIST:
            return {
                ...state, todolists: state.todolists.filter(tl => {
                    if (tl.id !== action.todolistId){
                        return tl
                    }
                })
            }
            case DEL_TASK:
                debugger
            return {
                ...state, todolists: state.todolists.map(tl => {
                    if (tl.id === action.todolistId){
                        return {

                            ...tl, tasks: tl.tasks.filter(t=> t.id!== action.taskId)
                        }
                    }
                    else {
                        return tl
                    }
                })
            }
            case ADD_TASK:
            return {
                ...state, todolists: state.todolists.map(tl => {
                    if(tl.id === action.todolistId){
                        return {
                            ...tl, tasks: [...tl.tasks, action.newTask]
                        }
                    }
                    else {
                        return tl
                    }
                })
            }
            case CHANGE_TASK:
            return {
                ...state, todolists: state.todolists.map(tl => {
                    if(tl.id === action.todolistId){
                        return {
                            ...tl, tasks: tl.tasks.map(t => {
                                if (t.id !== action.taskId) {
                                    return t;
                                }
                                else {
                                    return {...t, ...action.obj};
                                }})
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

export const addTodolistAC = (todolist) => {
    return {type: ADD_TODOLIST,  todolist}
}
export const setTodolistAC = (todolists) => {
    return {type: SET_TODOLIST,  todolists}
}
export const setTaskstAC = (tasks, todolistId) => {
    return {type: SET_TASKS,  tasks, todolistId}
}
export const addTaskAC = ( newTask, todolistId) => {
    return {type: ADD_TASK,
        newTask, todolistId}
}
export const changeTaskAC = (taskId, obj, todolistId) => {
    return {type: CHANGE_TASK,
        taskId, obj, todolistId}
}
export const deleteTodolistkAC = (todolistId) => {
    return {type: DEL_TODOLIST,
        todolistId}
}
export const delTaskAC = (taskId, todolistId) => {
    return {type: DEL_TASK,
        taskId, todolistId}
}

export default reducer



