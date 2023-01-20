import "./AddDeleteTodo.css";
import { useRef, useState } from "react";
import { Button } from "../Button/Button";
import { RxCross1 } from "react-icons/rx";
import { MdOutlineDone } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { TodoActionType } from "../../ReduxStore/TodoReducer/TodoActionTypes";

export const AddTodo = () => {
  const { isDeleteActionActive } = useSelector((state) => state.todo);

  const dispatch = useDispatch();
  const [isAddMode, setEditMode] = useState(false);
  const [displayError, setDisplayError] = useState(false);
  const addTodoRef = useRef();

  const addTask = () => {
    const todoName = addTodoRef.current.value;
    if (!todoName) {
      setDisplayError(true);
    } else {
      const todoObj = {
        id: new Date().getTime(),
        completed: false,
        name: todoName,
      };
      dispatch({ type: TodoActionType.NEW_TASK_ADDED, data: todoObj });
      setEditMode(false);
      setDisplayError(false);
      addTodoRef.current.value = "";
    }
  };

  return (
    <div className="addDeleteTodo">
      {isAddMode ? (
        <div className="ParentAddSection">
          <div className="addTask ParentAddSection">
            <input
              ref={addTodoRef}
              type="text"
              placeholder="Enter your todo here..."
              onChange={() => {
                if (addTodoRef.current.value) {
                  setDisplayError(false);
                }
              }}
            />
            <MdOutlineDone
              className="correctIcon"
              onClick={() => {
                addTask();
              }}
            />
            <RxCross1
              onClick={() => {
                setEditMode(false);
                addTodoRef.current.value = "";
                setDisplayError(false);
              }}
              className="cancelIcon"
            />
          </div>
          <span className="errorMessage">
            {displayError && "Please enter todo before proceed"}
          </span>
        </div>
      ) : (
        <Button
          onClick={() => {
            setEditMode(true);
            dispatch({
              type: TodoActionType.TOGGLE_DELETE_ACTION,
              data: false,
            });
          }}
          additionalClassName="ParentAddSection"
          buttonName="Add todo"
        />
      )}
      <div className="deleteTodo">
        <Button
          onClick={() => {
            if (!isDeleteActionActive) {
              dispatch({
                type: TodoActionType.TOGGLE_DELETE_ACTION,
                data: !isDeleteActionActive,
              });
              setEditMode(false);
            } else {
              dispatch({
                type: TodoActionType.DELETE_SELECTED_TODO,
              });
              setEditMode(false);
            }
          }}
          additionalClassName="ParentAddSection"
          buttonName={isDeleteActionActive ? "Confirm delete" : "Delete todo"}
        />
        {isDeleteActionActive && (
          <Button
            additionalClassName="buttonMarginRemover"
            buttonName="Cancel"
            onClick={() => {
              dispatch({
                type: TodoActionType.TOGGLE_DELETE_ACTION,
                data: false,
              });
            }}
          />
        )}
      </div>
    </div>
  );
};
