import Span from "../atoms/Span";
import Imagen from "../atoms/Img";
import '../../assets/styles/card.css'
function Card({img,clave,placa,asientos,fecha,tipo,nombre,licencia}) {
    return (  
      
        <div className="card-autobus">
        <Imagen img={img}/>
        <p>clave:</p>
        <Span info={clave}></Span>
        <p>placa:</p>
        <Span info={placa}/>
        <p>numero de asientos:</p>
        <Span info={asientos}/>
        <p>Fecha:</p>
        <Span info={fecha}/>
        <p>Tipo:</p>
        <Span info={tipo}/>
        <p>conductor:</p>
        <Span info={nombre}/>
        <p>Numero de licencia</p>
        <Span info={licencia}/>
        </div>
    );
}

export default Card;