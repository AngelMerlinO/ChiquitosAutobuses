import {useState} from "react";
import Card from "../molecules/Card";
import '../../assets/styles/ListBus.css'
function ListaBus() {
    const [message, setMessage]=useState([]);
    const handlerClick =(e) =>{
      e.preventDefault();
      let uri = 'http://34.225.239.102/api/autobus';
      let options ={
          method:'GET',
                    headers:{ "Content-Type":'application/json'},
                      body:JSON.stringify()
      }
      fetch(uri,options)
      .then((response)=>response.json())
      .then((data)=> {setMessage(data.message)})

    }

    return (
        <>
        <div>
            <button onClick={handlerClick}> Mostrar autobuses</button>
        </div>
        <div className="cont-cards-bus">
            {
                message.map(mensaje =>(<Card clave={mensaje.clave} placa={mensaje.placa}
                     asientos={mensaje.numasientos}fecha={mensaje.fecha} tipo={mensaje.tipo} 
                     nombre={mensaje.nombre} licencia={mensaje.licencia}/>))
            }
        </div>
        </>

      );
}

export default ListaBus;