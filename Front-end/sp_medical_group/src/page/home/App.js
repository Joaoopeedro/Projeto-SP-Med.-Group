import '../../assets/css/App.css'

// import { Link } from 'react-router-dom';

import logo from '../../assets/img/Logo_2-removebg-preview.png'
import wpp from '../../assets/img/wpp-removebg-preview.png'
import telefone from '../../assets/img/Telefone-removebg-preview.png'
import email from '../../assets/img/email.png'
import youtube from '../../assets/img/youtube.png'
import face from '../../assets/img/instagram.png'
import insta from '../../assets/img/facebook.png'

function App() {
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
                        <a href="/login">Consultas</a>
                        <a className="login-header" href="/login">Login</a>

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
            <footer className="container">
                <div className=" org_footer">
                    <div className="logo_footer">
                        <a href="#header">

                            <img src={logo} alt="" id="#header" />
                        </a>

                    </div>
                    <div className="descricao_footer">
                        <p>Todos os direitos reservados®</p>
                    </div>
                    <div className="org_redes">
                        <img src={youtube} alt="" />
                        <img src={insta} alt="" />
                        <img src={face} alt="" />
                    </div>
                </div>
            </footer>
        </div>

    );
}

export default App;
