import Span from "../atoms/Span";
import Imagen from "../atoms/Img";
function Card({img,clave,placa,asientos,fecha,tipo,nombre,licencia}) {
    return (  
        <>
        <Imagen img={img}/>
        <Span info={clave}/>
        <Span info={placa}/>
        <Span info={asientos}/>
        <Span info={fecha}/>
        <Span info={tipo}/>
        <Span info={nombre}/>
        <Span info={licencia}/>
        </>
    );
}

export default Card;