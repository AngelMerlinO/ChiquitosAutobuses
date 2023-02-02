import Header from "../components/molecules/Header";
import imgFondo from "../assets/img/cafeteria.svg"
import "../assets/styles/Home.css"

function Home(){
    return (
        <>
            <Header/>
            <div className="divPrincipal">
                <img src={imgFondo} alt="" />
                <div  className="divTextPrincipal">
                    <span>
                    CHIQUITITO CAFÉ nace en el 2012 de un deseo por servir la mejor taza de café posible en un ambiente bonito y 
                    relajado. Nace del deseo por hacer comunidad, basada en un comercio justo y sustentable, cuidando cada uno de 
                    los detalles, desde el productor y el grano hasta el barista y la taza.
                    Amamos el buen café, y nos fascina lo que produce: las pláticas, las ideas, los lazos y los momentos. Buscamos 
                    conectar, crear y lograr. Queremos construir y ser parte del mundo en el que queremos vivir.
                    </span>
                </div>
            </div>
            

          
            
        </>
    )
}

export default Home;