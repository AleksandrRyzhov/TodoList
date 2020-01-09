import axios from "axios";



const instance = axios.create({
    baseURL: "https://social-network.samuraijs.com/api/1.0/todo-lists",
    withCredentials: true,
    headers: {"API-KEY": "a5a28d6b-5efa-4ce5-a3eb-588fbeaafdfd"}
});



export const api = {
    createTask(newTask, todolistId) {
        return instance.post(
            `/${todolistId}/tasks`, // адрес endpoint-а
            {title: newTask},                                         // объект, который нужен серваку для совершения действия
                                                                      // (у каждого свой ключ должен быть)
        );
    },
    changeTask(task) {
        return instance.put(
            `/tasks`, // адрес endpoint-а
            task,
                                                                   // (у каждого свой ключ должен быть)
        )
    },
    createTodolist(title) {
        return instance.post(
            "",                // адрес endpoint-а
            {title: title},                                         // объект, который нужен серваку для совершения действия
            // настройки запроса
                                                                      // (у каждого свой ключ должен быть)
        )
    },
    getTask(todolistId) {
        return instance.get(
            `/${todolistId}/tasks`, // адрес endpoint-а
            // настройки запроса
                                                                   // (у каждого свой ключ должен быть)
        );
    },
    getTodolists() {
        return instance.get("", )

    },
    delTodolist(id) {
        return instance.delete(  // тип запроса delete
            "/" + id, // адрес endpoint-а
            // с добавленным в конец id-шником
            // настройки запроса
                                                                     // (у каждого свой ключ должен быть)
        )
    },
    delTask(id) {
        return instance.delete(  // тип запроса delete
            `/tasks/${id}`, // адрес endpoint-а
            // с добавленным в конец id-шником
            // настройки запроса
                                                                      // (у каждого свой ключ должен быть)
        )
    }
}
