import {Link} from 'react-router-dom';
import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from '../../assets/img/loginicon.svg'
import "../../assets/styles/FormLogin.css"
function FormLogin() {
    const form = useRef();
    const navigate =useNavigate();

    const handlerClick =(e) =>{
      e.preventDefault();
      const formData = new FormData(form.current);
      
      let uri = 'http://34.225.239.102/api/iniciar';
      let options ={
          method:'POST',
                    headers:{ "Content-Type":'application/json'},
                      body:JSON.stringify({
          usuario: formData.get('usuario'),
          contrasenia: formData.get('contrasena'),
         
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
        <form className='FormLogin' ref={form}>
            <img src={Logo} alt="Logotipo" className='img-login' />
            <p>usuario</p>
            <input type="text"   className="input-user" name='usuario'/>
            <p>contraseña</p>
            <input type="password"  className="input-password" name='contrasena'/>
            <button className="button-login" onClick={handlerClick}>Iniciar sesión</button>
            <Link to="/register" > Registrate</Link>
        </form>
      );
}
export default FormLogin;