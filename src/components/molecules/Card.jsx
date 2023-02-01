import Span from "../atoms/Span";
function Card({img,texto}) {
    return (  
        <>
        <img src={img} alt="" />
        <Span info={texto}/>
        </>
    );
}

export default Card;