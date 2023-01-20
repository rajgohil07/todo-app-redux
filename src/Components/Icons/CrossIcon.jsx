import { RxCross1 } from "react-icons/rx";
import "./CommonIconCSS.css";

export const CrossIcon = ({ toggleTaskStatus, taskId }) => {
  return (
    <RxCross1
      className="crossIcon"
      onClick={(e) => toggleTaskStatus(e, taskId)}
      title="Click to mark as incomplete"
    />
  );
};
