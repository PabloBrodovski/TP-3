import { BrowserRouter, Routes, Route } from "react-router-dom";
import Formulario from "./Componentes/Formulario";
import Historial from "./Componentes/Historial";

import "./App.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" Component={Formulario} />
          <Route path="/historial" Component={Historial} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
