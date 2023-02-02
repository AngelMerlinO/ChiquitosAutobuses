import { useRef } from 'react'
import {useNavigate} from 'react-router-dom'
import '../../assets/styles/FormRegister.css'
function FormRegister() {
    const form = useRef();
    const handlerClick =(e) =>{
      e.preventDefault();
      const formData = new FormData(form.current);
      
      let uri = 'http://34.225.239.102/api/registrar/usuario';
      let options ={
          method:'POST',
                    headers:{ "Content-Type":'application/json'},
                      body:JSON.stringify({
          nombre: formData.get('name'),
          correo: formData.get('correo'),
          contrasenia: formData.get('contrasena'),
          usuario: formData.get('usuario'),
        })
      }
      fetch(uri,options)
      .then((response)=>response.json())
      .then((data)=> {alert(JSON.stringify(data))})
    }
  
    return ( 
        <form ref={form} className="form-register">
            <div className='container-uno-register'>
                <label className="text-input" htmlFor="name">Nombre</label>
                <input className="input-nombre" type="text" id="name" name="name"/>
            </div>
            <div className='container-dos-register'>
                <label className="text-input">correo</label>
                    <input type="text" className="input-correo-register" name='correo' /> 
            </div>
            <div className='container-tres-register'>
                <label className="text-input">Usuario</label>
                    <input type="text" className="input-user-register" name='usuario' /> 
            </div>
            <div className='container-cuatro-register'>
                <label className="text-input">Contraseña</label>
                <input type="password" className="input-password-register" name='contrasena'/>
            </div>
            <button className="button-register" onClick={handlerClick}>Registro</button>
        </form>
     );
}

export default FormRegister;