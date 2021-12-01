import React from "react";

interface Props {
  name: string;
  deadline: number;
  deleteTask():void;
}

const Task = ({ name, deadline, deleteTask }: Props) => {
  return (
    <div className="task">
        <div className="content">
            <span>{name}</span>
            <span>{deadline}</span>
        </div>
        <button onClick={deleteTask}>X</button>
    </div>
  );
};

export default Task;
