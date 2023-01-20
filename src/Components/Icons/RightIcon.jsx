import { MdOutlineDone } from "react-icons/md";
import "./CommonIconCSS.css";

export const RightIcon = ({ toggleTaskStatus, taskId }) => {
  return (
    <MdOutlineDone
      className="rightIcon"
      onClick={(e) => toggleTaskStatus(e, taskId)}
      title="Click to mark as complete"
    />
  );
};
