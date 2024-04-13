import React, { useState } from "react";

function Tarea(props) {
  const [Nuevatarea, setNuevatarea] = useState();

  const handleSubmit = (event) => {
    event.preventDefault();
    props.crearTarea(Nuevatarea);
    localStorage.setItem("input", Nuevatarea);
  };
  return (
    <div>
      {" "}
      <form>
        <input
          type="text"
          placeholder="Ingrese una tarea"
          onChange={(e) => setNuevatarea(e.target.value)}
        />

        <button onClick={handleSubmit}>Guardar</button>
      </form>
    </div>
  );
}

export default Tarea;