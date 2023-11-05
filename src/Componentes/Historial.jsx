import * as React from "react";
import { Link } from "react-router-dom";
import Tabla from "./Tabla";

function BorrarHistorial() {
  localStorage.clear();
}

function Historial() {
  return (
    <>
      <h1>Seguros del hogar <i class="bi bi-house-check"></i></h1>
      <div className="div-historial">
        <h1>
          Historial <i class="bi bi-clock-history"></i>
        </h1>
        <Tabla />
        <Link to={"/"}>
          <button className="boton">Volver al inicio</button>
        </Link>
        <Link to={"/Historial"}>
          <button className="boton" onClick={BorrarHistorial}>
            Borrar historial
          </button>
        </Link>
      </div>
    </>
  );
}

export default Historial;
