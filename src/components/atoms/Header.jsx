import { Link } from "react-router-dom";
import Logotipo from "../../assets/img/logotipo.svg"
import '../../assets/styles/Header.css'
function Header() {
    return ( 
        <header>
            <img src={Logotipo} alt=""></img>
            <span ><Link className="text-btn-login" to="/listProductos">Autobuses</Link></span>
            <span><span ><Link className="text-btn-login" to="/registroBus">Registra autobus</Link></span></span>
            <span ><Link className="text-btn-login" to="/login">Iniciar sesión</Link></span>
            <span ><Link className="text-btn-login" to="/">Inicio</Link></span>

            
        </header>
     );
}

export default Header;