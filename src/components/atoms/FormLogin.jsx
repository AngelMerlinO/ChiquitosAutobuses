import {useState} from 'react'
import { Link } from 'react-router-dom';
import Logo from '../../assets/img/loginicon.svg'
import "../../assets/styles/FormLogin.css"
function FormLogin() {
    const [stateForm, setStateForm] = useState({username:'Merlin', password:''})
    const handlerClick = (e) => {
        e.preventDefault()
        setDescription({msn: username})    
    }
    const handlerChange = (e) => {
        console.log(stateForm.username)
        setStateForm({...stateForm,username:"Manuel"})
        console.log(stateForm.username)
    }
    const handlerChangePassword = (e) => {
        setStateForm({...stateForm,password: e.target.value})
    }
    return (
        <form className='FormLogin'>
            <img src={Logo} alt="Logotipo" className='img-login' />
            <input type="text" value={stateForm.username} onChange={handlerChange} className="input-user"/>
            <input type="password" value ={stateForm.password} onChange={handlerChangePassword} className="input-password"/>
            <button onClick={handlerClick} className="button-login">Iniciar sesión</button>
            <Link to="/register" > Registrate</Link>
{            <div className='info-input'>
                <label >{JSON.stringify(stateForm)}</label>
            </div>}
        </form>
      );
}
export default FormLogin;