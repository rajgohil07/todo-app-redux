import "./Home.css";
import { useDispatch, useSelector } from "react-redux";
import { CrossIcon } from "../Icons/CrossIcon";
import { RightIcon } from "../Icons/RightIcon";
import { TodoActionType } from "../../ReduxStore/TodoReducer/TodoActionTypes";
import { AddTodo } from "../AddDeleteTodo/AddDeleteTodo";
import { Checkbox } from "../Checkbox/Checkbox";

export const Home = () => {
  const { todoData, isDeleteActionActive, selectedTodoIdList } = useSelector(
    (state) => state.todo
  );
  const dispatch = useDispatch();

  const toggleTaskStatus = (e, todoId) => {
    e.stopPropagation();
    dispatch({
      type: TodoActionType.TOGGLE_TODO_STATUS,
      todoId,
    });
  };

  const deleteCheckboxAction = (e) => {
    let cloneSelectedTodoIdList = [...selectedTodoIdList];
    const { checked: isChecked } = e.target;
    let { value: selectedTodoId } = e.target;
    selectedTodoId = Number(selectedTodoId);
    // If checkbox is selected push to existing selected task id for delete purpose
    if (isChecked) {
      cloneSelectedTodoIdList.push(selectedTodoId);
      dispatch({
        type: TodoActionType.CHANGE_SELECTED_TODO_DELETE_ACTION,
        data: cloneSelectedTodoIdList,
      });
    } else {
      cloneSelectedTodoIdList = cloneSelectedTodoIdList.filter(
        (id) => id !== selectedTodoId
      );
      dispatch({
        type: TodoActionType.CHANGE_SELECTED_TODO_DELETE_ACTION,
        data: cloneSelectedTodoIdList,
      });
    }
  };

  return (
    <div className="home">
      <div className="appName">
        <h1>My plans for the day</h1>
      </div>
      <div className="taskListing">
        {todoData.length > 0 && (
          <ol>
            {todoData.map((todo) => {
              return (
                <li key={todo.id} onClick={(e) => toggleTaskStatus(e, todo.id)}>
                  {todo.completed ? (
                    <div className="todoFlex">
                      {isDeleteActionActive && (
                        <Checkbox
                          taskId={todo.id}
                          clickFunction={deleteCheckboxAction}
                        />
                      )}
                      <div>
                        <span className="spanStrikeThrough">{todo.name}.</span>
                        <CrossIcon
                          toggleTaskStatus={toggleTaskStatus}
                          taskId={todo.id}
                        />
                      </div>
                    </div>
                  ) : (
                    <div className="todoFlex">
                      {isDeleteActionActive && (
                        <Checkbox
                          taskId={todo.id}
                          clickFunction={deleteCheckboxAction}
                        />
                      )}
                      <div>
                        {todo.name}.
                        <RightIcon
                          toggleTaskStatus={toggleTaskStatus}
                          taskId={todo.id}
                        />
                      </div>
                    </div>
                  )}
                </li>
              );
            })}
          </ol>
        )}
        <AddTodo />
      </div>
    </div>
  );
};
