import { useSelector } from "react-redux";
import "./Checkbox.css";

export const Checkbox = ({ taskId, clickFunction }) => {
  const { selectedTodoIdList } = useSelector((state) => state.todo);

  return (
    <div className="checkbox-wrapper checkboxAdditionalWrapper">
      <input
        type="checkbox"
        checked={selectedTodoIdList.indexOf(taskId) === -1 ? false : true}
        id={taskId}
        value={taskId}
        onChange={(e) => clickFunction(e)}
      />
      <label htmlFor={taskId} className="check-box" />
    </div>
  );
};
