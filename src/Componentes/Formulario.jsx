import InputMetros from "./Metros.jsx";
import PropiedadesSelect from "./Propiedad.jsx";
import UbicacionSelect from "./Ubicacion.jsx";
import { useContext } from "react";
import { AppContext } from "./AppContext.jsx";
import { Link } from "react-router-dom";

function Formulario() {
  const costoM2 = 35.86;

  const { form } = useContext(AppContext);

  function cotizar(event) {
    event.preventDefault();

    let metros = form.metros;
    let prop = form.selectedProp.tipo;
    let ubi = form.selectedUbi.tipo;

    let resul =
      metros * form.selectedProp.factor * form.selectedUbi.factor * costoM2;

    let hora = new Date().toLocaleString();

    imprimirPoliza(resul);

    guardarEnHistorial(hora, resul, prop, ubi, metros);
  }

  const guardarEnHistorial = (hora, resul, prop, ubi, metros) => {
    const historialCotizaciones =
      JSON.parse(localStorage.getItem("historialCotizaciones")) || [];

    const cotizacion = {
      fecha: hora,
      propiedad: prop,
      ubicacion: ubi,
      metros: metros,
      poliza: resul.toFixed(2),
      id: historialCotizaciones.length + 1,
    };

    historialCotizaciones.push(cotizacion);
    localStorage.setItem(
      "historialCotizaciones",
      JSON.stringify(historialCotizaciones)
    );
  };

  const imprimirPoliza = (resul) => {
    let valorPoliza = document.getElementById("valorPoliza");
    valorPoliza.innerText = resul.toFixed(2);
  };

  return (
    <>
        <h1>Seguros del hogar <i class="bi bi-house-check"></i></h1>

        <div className="div-cotizador">
            <h2>Completa los datos solicitados</h2>
            <form className="formulario" onSubmit={cotizar}>
                <PropiedadesSelect />
                <UbicacionSelect />
                <InputMetros />
                <div>
                    <button className="boton">Cotizar</button>
                </div>
                <p className="precio-estimado" >Precio estimado: $ <span className="precio-estimado" id="valorPoliza">0.00</span></p>
                <p className="ver-historial">Ver historial</p>
                <div className="historial">
                    <Link to="Historial">
                    <span title="Ver Historial">📋</span>
                    </Link>
                </div>
            </form>
        </div>
    </>
  );
}

export default Formulario;
