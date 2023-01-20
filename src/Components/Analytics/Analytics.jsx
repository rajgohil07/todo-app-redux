import "./Analytics.css";
import ProgressBar from "@ramonak/react-progress-bar";
import { useSelector } from "react-redux";

export const Analytics = () => {
  const { todoData } = useSelector((data) => data.todo);
  const totalCount = todoData.length;
  const completedCount = todoData.filter((e) => e?.completed).length;
  const completedPercentage = (completedCount / totalCount) * 100;

  const customLabel =
    completedPercentage % 1 === 0
      ? `${completedPercentage}%`
      : `${completedPercentage.toFixed(2)}%`;

  let barColor = "orangered";
  if (completedPercentage >= 50) {
    barColor = "blue";
  }
  if (completedPercentage === 100) {
    barColor = "green";
  }

  return (
    <div className="analysisWrapper">
      <h1>Todo progress:</h1>
      <ProgressBar
        completed={completedPercentage}
        bgColor={barColor}
        height="0.9rem"
        labelAlignment="outside"
        labelColor="#000000"
        transitionDuration="1000ms"
        maxCompleted={100}
        customLabel={customLabel}
        animateOnRender={true}
        margin="1rem 1rem 1rem 0"
      />
      <hr className="divider" />
      <h1>Todo Progression:</h1>
      <table>
        <tbody>
          <tr>
            <td>
              <h3 className="tableText">Total Todo:</h3>
            </td>
            <td>
              <h3 className="tableText todoValues">{totalCount}</h3>
            </td>
          </tr>
          <tr>
            <td>
              <h3 className="tableText ">Completed Todo:</h3>
            </td>
            <td>
              <h3 className="tableText todoValues">{completedCount}</h3>
            </td>
          </tr>
          <tr>
            <td>
              <h3 className="tableText">Pending Todo:</h3>
            </td>
            <td>
              <h3 className="tableText todoValues">
                {totalCount - completedCount}
              </h3>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
