import { useState } from "react";
import "./App.css";
import AddTask from "./components/AddTask";
import Tasks from "./components/Tasks";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Estudar React",
      description: "Estudar os conceitos básicos de React",
      isCompleted: false,
    },
    {
      id: 2,
      title: "Fazer Exercícios",
      description: "Resolver exercícios práticos de React",
      isCompleted: false,
    },
    {
      id: 3,
      title: "Ler Documentação",
      description: "Ler a documentação oficial do React",
      isCompleted: false,
    },
  ]);

  function onTaskClick(taskId) {
    console.log("Task clicked:", taskId);
    const newTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return { ...task, isCompleted: !task.isCompleted };
      }
      return task;
    });
    setTasks(newTasks);
  }

  function onDeleteTaskClick(taskId) {
    const newTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(newTasks);
  }

  function onAddTask(newTask) {
    setTasks((prevTasks) => [...prevTasks, newTask]);
  }

  return (
    <div className="h-screen bg-slate-500 flex justify-center p-6">
      <div className="w-[500px]">
        <h1 className="text-3xl text-slate-100 font-bold text-center">
          Gerenciador de Tarefas!
        </h1>
        <AddTask tasks={tasks} onAddTask={onAddTask} />
        <Tasks
          tasks={tasks}
          onTaskClick={onTaskClick}
          onDeleteTaskClick={onDeleteTaskClick}
        />
      </div>
    </div>
  );
}

export default App;
