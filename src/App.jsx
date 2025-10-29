import { useEffect, useState } from "react";
import "./App.css";
import AddTask from "./components/AddTask";
import Tasks from "./components/Tasks";

function App() {
  const [tasks, setTasks] = useState([]);

  const fetchTasks = () => {
    fetch("http://localhost:8080/task/all")
      .then((response) => response.json())
      .then((data) => {
        const formattedTasks = data.map((item) => ({
          id: item.id,
          title: item.title,
          isCompleted: item.completed,
        }));
        setTasks(formattedTasks);
      });
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  function saveTaskBackend(task) {
    fetch("http://localhost:8080/task/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(task),
    })
      .then(() => fetchTasks()) // Atualiza lista ao finalizar
      .catch((err) => console.log("Erro ao adicionar", err));
  }

  function onTaskClick(taskId) {
    const updatedTask = tasks.find((task) => task.id === taskId);
    const taskToSend = {
      ...updatedTask,
      isCompleted: !updatedTask.isCompleted,
    };

    fetch(`http://localhost:8080/task/update/${taskId}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(taskToSend),
    })
      .then(() => fetchTasks()) // Atualiza lista ao finalizar
      .catch((err) => console.log("Erro ao atualizar", err));
  }

  function onDeleteTaskClick(taskId) {
    fetch(`http://localhost:8080/task/delete/${taskId}`, {
      method: "DELETE",
    })
      .then(() => fetchTasks()) // Atualiza lista ao finalizar
      .catch((err) => console.log("Erro ao excluir", err));
  }

  function onAddTask(newTask) {
    saveTaskBackend(newTask);
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
