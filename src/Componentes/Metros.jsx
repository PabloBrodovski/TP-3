import { useContext } from "react";
import { AppContext } from "./AppContext.jsx";

function Metros() {
  const { form, setForm } = useContext(AppContext);

  const handleChange = (event) => {
    // console.log(event.target.value);

    let metros = parseInt(event.target.value, 10);

    setForm({ ...form, metros });
  };

  return (
    <>
      <label htmlFor="metros2">Ingresa los Metros cuadrados:</label>
      <input
        onChange={handleChange}
        className="input-group-text"
        type="number"
        id="metros2"
        min="20"
        max="500"
        required
      />
    </>
  );
}

export default Metros;
