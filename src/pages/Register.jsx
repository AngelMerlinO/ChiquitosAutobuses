import FormRegister from "../components/atoms/FormRegister";
import Title from "../components/atoms/Title";
import Header from "../components/molecules/Header";
import "../assets/styles/PageRegister.css"
function Register() {
    return ( 
        <>
            <Header></Header>
            <div className="cont-Register-user">
                <Title msn="Registro de usuarios"></Title>
                <FormRegister></FormRegister>
            </div>
            
        </>
     );
}

export default Register;