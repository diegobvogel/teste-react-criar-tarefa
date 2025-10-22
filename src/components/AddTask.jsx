/* eslint-disable react/prop-types */

import { useState } from "react";

function AddTask({ tasks, onAddTask }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  function getNewTaskContent() {
    const newTask = {
      id: tasks.length + 1,
      title,
      description,
      isCompleted: false,
    };

    if (!title.trim() || !description.trim()) {
      return alert("Por favor, preencha todos os campos.");
    }

    onAddTask(newTask);
    cleanInputFields();
  }

  function cleanInputFields() {
    setTitle("");
    setDescription("");
  }

  return (
    <div className="space-y-4 p-6 bg-slate-200 rounded-md shadow flex flex-col mb-4">
      <input
        id="tituloTarefa"
        type="text"
        placeholder="Título da tarefa"
        className="border-slate-300 outline-slate-400 px-4 py-2 rounded-md"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        id="descricaoTarefa"
        type="text"
        placeholder="Descrição da tarefa"
        className="border-slate-300 outline-slate-400 px-4 py-2 rounded-md"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button
        onClick={() => getNewTaskContent()}
        className="bg-blue-500 text-white p-2 rounded-md font-medium"
      >
        Adicionar Tarefa
      </button>
    </div>
  );
}

export default AddTask;
