import FormLogin from "../components/atoms/FormLogin";
import Header from "../components/molecules/Header";
import ImgLogin from "../assets/img/tasa.svg"
import "../assets/styles/PageLogin.css"

function Login() {
    return (
      <>
        <Header/>
        <div className="cont-login">
          <img src={ImgLogin} alt="" className="imgLogin"/>
            <FormLogin/>
        </div>
      </>
      
      );
}

export default Login;