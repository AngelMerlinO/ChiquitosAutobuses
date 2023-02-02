import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import "../../assets/styles/FormBus.css";
function FormBus() {
  const navigate =useNavigate();
  const form = useRef();
  const handlerClick =(e) =>{
    e.preventDefault();
    const formData = new FormData(form.current);
    console.log(String(Math.floor(Math.random()*(9999 - 1000)+1000)));
    
    let uri = 'http://34.225.239.102/api/autobus/register';
    let options ={
        method:'POST',
                  headers:{ "Content-Type":'application/json'},
                    body:JSON.stringify({
        clave: formData.get('clave'),
        placa: formData.get('placa'),
        numasientos: formData.get('numasientos'),
        fecha: formData.get('fecha'),
        tipo: formData.get('tipo'),
        nombre: formData.get('nombre'),
        licencia: String(Math.floor(Math.random()*(9999 - 1000)+1000))
      })
    }
    fetch(uri,options)
    .then((response)=>response.json())
    .then((data)=> {alert(JSON.stringify(data))
      if(data.status){
        navigate("/");
    }
    })
  
  }

  return (
    <div className="div-bus" >
      <form className="form-bus-register" ref={form}>

        <label className="text-input" htmlFor="clave"> Clave autobus</label>
        <input className="input-bus" type="text" id="clave" name="clave" />

        <label className="text-input" htmlFor="placa">Placa autobus</label>
        <input type="text" className="input-bus" id="placa" name="placa" />

        <label className="text-input" htmlFor="asientos">Numero de asientos</label>
        <input type="number" className="input-bus" id="asientos" name="numasientos"/>

        <label className="text-input" htmlFor="fecha">Fecha de alta</label>
        <input type="date" className="input-bus" id="fecha" name="fecha" />

        <label className="text-input"> Tipo de servicio</label>
        <select name="tipo" className="input-bus">
          <option value="turismo ">Turismo</option>
          <option value="lujo">Lujo</option>
        </select>

        <label className="text-input" htmlFor="chofer">Nombre del chofer</label>
        <input type="text" className="input-bus"  id="chofer" name="nombre"/>

        <label className="text-input"> Numero de licencia </label>
        <input type="number" className="input-bus" />

        <button className="button-regist-bus" onClick={handlerClick}>Registrar</button>
      </form>
    </div>
  );
}

export default FormBus;