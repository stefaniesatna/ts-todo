import React, { FC, useState } from "react";
import "./App.css";
import { ITask } from "./Interfaces";
import Task from "./Components/Task";

const App: FC = () => {
  const [name, setName] = useState<string>("");
  const [deadline, setDeadline] = useState<number>(0);
  const [todoList, setTodoList] = useState<ITask[]>([]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    if (e.target.name === "name") {
      setName(e.target.value);
    } else {
      setDeadline(Number(e.target.value));
    }
  };

  const addTask = (): void => {
    const task = {
      name,
      deadline,
    };
    setTodoList([...todoList, task]);
  };

  const deleteTask = (name: string): void => {
    setTodoList(todoList.filter(task => task.name !== name))
  }

  const tasks = todoList.map((task) => (
    <Task name={task.name} deadline={task.deadline} deleteTask={() => deleteTask(task.name)} />
  ));

  return (
    <div className="App">
      <div className="header">
        <div className="inputContainer">
          <input
            name="name"
            onChange={(e) => handleChange(e)}
            type="text"
            placeholder="Task name..."
          ></input>
          <input
            name="deadline"
            onChange={(e) => handleChange(e)}
            type="number"
            placeholder="Deadline..."
          ></input>
        </div>
        <button onClick={addTask}>Add Task</button>
      </div>
      <div className="todoList">{tasks}</div>
    </div>
  );
};

export default App;