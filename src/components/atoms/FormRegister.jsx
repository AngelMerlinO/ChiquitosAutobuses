import { useRef } from 'react'
import {useNavigate} from 'react-router-dom'
import '../../assets/styles/FormRegister.css'
function FormRegister() {
    const navigate = useNavigate()
/*     const name = useRef()
    const username = useRef()
    const password = useRef() */
    const form = useRef()

    const handlerClick = (e)=> {
        e.preventDefault();
        // console.log(typeof(name) )
        // alert('Nombre: ' + name.current.value)
        //navigate("/")
        // Instrucciones para el elemento form
        const newForm = new FormData(form.current)
        alert('Nombre; '+ newForm.get('name'))
    }
    return ( 
        <form ref={form} className="form-register">
            <div className='container-uno-register'>
                <label className="text-input" htmlFor="name">Nombre</label>
                <input className="input-nombre" type="text" id="name" name="name"/>
            </div>
            <div className='container-dos-register'>
                <label className="text-input">correo</label>
                    <input type="text" className="input-correo-register" /> 
            </div>
            <div className='container-tres-register'>
                <label className="text-input">Usuario</label>
                    <input type="text" className="input-user-register" /> 
            </div>
            <div className='container-cuatro-register'>
                <label className="text-input">Contraseña</label>
                <input type="password" className="input-password-register" />
            </div>
            <button className="button-register" onClick={handlerClick}>Registro</button>
        </form>
     );
}

export default FormRegister;