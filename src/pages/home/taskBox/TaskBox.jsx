import taskBox from "./taskBox.module.scss";

const TaskBox = ({ taskHeader, taskDescription }) => {
  return (
    <>
      <div className={taskBox.task_container}>
        <h4>{taskHeader}</h4>
        <p>{taskDescription}</p>
        <span className={taskBox.status}>status</span>
      </div>
    </>
  );
};

export default TaskBox;
