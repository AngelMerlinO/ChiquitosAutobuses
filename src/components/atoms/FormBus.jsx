import "../../assets/styles/FormBus.css";
function FormBus() {
  return (
    <div className="div-bus">
      <form className="form-bus-register">
        <label className="text-input" htmlFor=""> Clave autobus</label>
        <input className="input-bus" type="" id="" name="" />

        <label className="text-input">Numero de asientos</label>
        <input type="number" className="input-bus" />

        <label className="text-input">Fecha de alta</label>
        <input type="date" className="input-bus" />
        <label className="text-input"> Tipo de servicio</label>
        <select name="tipo" className="input-bus">
          <option value="turismo ">Turismo</option>
          <option value="lujo">Lujo</option>
        </select>

        <label className="text-input">Nombre del chofer</label>
        <input type="text" className="input-bus" />

        <label className="text-input"> Numero de licencia </label>
        <input type="number" className="input-bus" />

        <button className="button-regist-bus">Registrar</button>
      </form>
    </div>
  );
}

export default FormBus;
