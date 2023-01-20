import { TodoActionType } from "./TodoActionTypes";

const initialState = {
  isLoading: false,
  todoData: [],
  isDeleteActionActive: false,
  selectedTodoIdList: [],
};

export const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    // Set loader to true
    case TodoActionType.SET_LOADING_TRUE: {
      return {
        ...state,
        isLoading: true,
      };
    }
    // Fetch the Todo data from the server
    case TodoActionType.FETCH_TODO_DATA: {
      return {
        ...state,
        todoData: action.data,
      };
    }
    // Set loader to false
    case TodoActionType.SET_LOADING_FALSE: {
      return {
        ...state,
        isLoading: false,
      };
    }
    // Toggle the todo task status
    case TodoActionType.TOGGLE_TODO_STATUS: {
      return {
        ...state,
        todoData: state.todoData.map((todo) => {
          if (todo.id === action.todoId) {
            return { ...todo, completed: !todo.completed };
          }
          return todo;
        }),
      };
    }
    // Add new todo to the todo list
    case TodoActionType.NEW_TASK_ADDED: {
      const todoData = [...state.todoData];
      todoData.push(action.data);
      return {
        ...state,
        todoData,
      };
    }
    // Change the delete action value
    case TodoActionType.TOGGLE_DELETE_ACTION: {
      return {
        ...state,
        isDeleteActionActive: action.data,
        selectedTodoIdList: [],
      };
    }
    // Change the delete action value
    case TodoActionType.CHANGE_SELECTED_TODO_DELETE_ACTION: {
      return {
        ...state,
        selectedTodoIdList: action.data,
      };
    }
    // Change the delete action value
    case TodoActionType.DELETE_SELECTED_TODO: {
      const { todoData, selectedTodoIdList } = state;
      const removedSelectedTodoList = todoData.filter(
        (todo) => selectedTodoIdList.indexOf(todo.id) === -1
      );
      return {
        ...state,
        todoData: removedSelectedTodoList,
        isDeleteActionActive: false,
        selectedTodoIdList: [],
      };
    }
    default: {
      return state;
    }
  }
};
