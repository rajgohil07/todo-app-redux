import axios from "axios";
import { TodoActionType } from "./TodoActionTypes";

export const fetchTodoData = () => {
  return async (dispatch) => {
    dispatch({ type: TodoActionType.SET_LOADING_TRUE });
    // axios request config ref: https://axios-http.com/docs/req_config
    const axiosConfig = {
      url: "/todos",
      method: "get",
      baseURL: "https://dummyjson.com",
      params: {
        limit: 5,
      },
    };
    // Get the required todos data list only from the response
    const {
      data: { todos: todoData },
    } = await axios(axiosConfig);
    const modifiedData = todoData.map((todo, index) => ({
      id: new Date().getTime() + index,
      name: todo.todo,
      completed: !todo.completed,
    }));
    dispatch({ type: TodoActionType.FETCH_TODO_DATA, data: modifiedData });
    dispatch({ type: TodoActionType.SET_LOADING_FALSE });
  };
};
