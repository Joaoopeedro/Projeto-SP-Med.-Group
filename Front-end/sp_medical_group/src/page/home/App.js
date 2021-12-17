import '../../assets/css/App.css'


import { parseJwt } from '../../services/auth';

import { useHistory } from "react-router-dom";
import { usuarioAutenticado } from '../../services/auth'


import logo from '../../assets/img/Logo_2-removebg-preview.png'
import wpp from '../../assets/img/wpp-removebg-preview.png'
import telefone from '../../assets/img/Telefone-removebg-preview.png'
import email from '../../assets/img/email.png'
// import youtube from '../../assets/img/youtube.png'
// import face from '../../assets/img/instagram.png'
// import insta from '../../assets/img/facebook.png'
import Footer from "../../components/footer/footer";

function App() {

    let history = useHistory()

    function logOut() {
        localStorage.removeItem('usuario-login')

        history.push('/')
    }

    function Consulta(){
        var logado = parseJwt().role;
        switch (logado) {
            case "1":
              return(history.push("/admListar"))  
                
                
            case "2":
                return(history.push("/paciente")) 
                
            case "3":
                return(history.push("/medico"))
                
        
            default:
                return(history.push("/"))
                
        }
    }
   


    return (
        <div>
            <header className=" container header_Home" id="header">
                <div className=" div_header container">
                    <div>
                        <a href="#header">

                            <img className="img_header" src={logo} alt="" />
                        </a>

                    </div>
                    <div className="org_header">
                        <a href="/">Home</a>
                        <a href="#contato">Contato</a>
                        <a href="#" onClick={Consulta}>Consultas</a>
                        <div className="login-header" href="/login">
                            {
                                usuarioAutenticado() ? (
                                    <div>
                                        <div onClick={logOut}>
                                            <a href="/">
                                                <p>Logout</p>
                                            </a>
                                        </div>
                                    </div>
                                ) : (
                                    <div>
                                        <a href="/login">
                                            <div className="alinhar_login">
                                                <p>Login</p>
                                            </div>
                                        </a>

                                    </div>
                                )
                            }

                        </div>

                    </div>
                </div>
            </header>
            <main className="main_home">
                <section className="banner_home">
                    <div className="org_banner">
                        <h1>SP MEDICAL - GROUP</h1>
                        <hr />
                        <p>A melhor empresa de agendamento de consultas medicas </p>

                    </div>
                </section>
                <section className="banner-contato" id="contato">
                    <div className="org_contato">
                        <h2>CONTATO</h2>
                        <hr />
                        <div className="org_cont">
                            <img src={telefone} alt="" />
                            <p>(11) 2621-7229</p>
                        </div>
                        <div className="org_cont">
                            <img src={wpp} alt="" />
                            <p>(11) 96276-9887</p>
                        </div>
                        <div className="org_cont">
                            <img src={email} alt="" />
                            <p>adm@adm.com</p>
                        </div>
                    </div>
                </section>
                <section className="banner_endereco">
                    <div className="org_endereco">
                        <h2>ENDEREÇO</h2>
                        <hr />
                        <div>
                            <li>A definir</li>
                        </div>
                    </div>

                </section>

            </main>
            <Footer />
        </div>

    );
}

export default App;
