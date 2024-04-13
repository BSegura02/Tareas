import { useEffect, useState } from "react";
import "./App.css";
import Tarea from "./components/Tareas";

function App() {


  const [NuevoItem, setNuevoItem] = useState([
    { name: "Revisar material a", done: false },
    { name: "Revisar material b", done: false },
    { name: "Revisar material c", done: false },
  ]);

  function crearTarea(nuevaTarea) {
    setNuevoItem([...NuevoItem, { name: nuevaTarea, done: false }]);
  }

  const eliminarTarea = (index) => {
    setNuevoItem(NuevoItem.filter((_, i) => i !== index));
  };

  useEffect(() => {
    localStorage.setItem("input", JSON.stringify(NuevoItem));
  }, [NuevoItem]);

  const friends = [
    { name: "Peter", age: 4 },
    { name: "Maya", age: 10 },
  ];

  return (
    <div className="App">

      <Tarea crearTarea={crearTarea} />

      <div className="Tareas_container">
        {NuevoItem.map((item, index) => (
          <li key={index}>
            <span>{item.name}</span>{" "}
            <a
              style={{ color: "blue", cursor: "pointer" }}
              onClick={() => eliminarTarea(index)}
            >
              Eliminar Tarea
            </a>
          </li>
        ))}
      </div>
    </div>
  );
}

export default App;