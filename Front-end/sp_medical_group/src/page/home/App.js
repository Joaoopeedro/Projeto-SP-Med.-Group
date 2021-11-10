import  '../../assets/css/App.css'

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
     <header class=" container header_Home">
        <div class=" div_header container">
            <div>
                <img class="img_header" src={logo} alt="" />
            </div>
            <div class="org_header">
                <a href="">Home</a>
                <a href="">Contato</a>
                <a href="">Consultas</a>
                <a class="login-header" href="/login">Login</a>

            </div>
        </div>
    </header>
    <main class="main_home">
        <section class="banner_home">
            <div class="org_banner">
                <h1>SP MEDICAL - GROUP</h1>
                <hr />
                <p>A melhor empresa de agendamento de consultas medicas </p>

            </div>
        </section>
        <section class="banner-contato">
            <div class="org_contato">
                <h2>CONTATO</h2>
                <hr />
                <div class="org_cont">
                    <img src={telefone} alt="" />
                    <p>(11) 2621-7229</p>
                </div>
                <div class="org_cont">
                    <img src={wpp} alt="" />
                    <p>(11) 96276-9887</p>
                </div>
                <div class="org_cont">
                    <img src={email} alt="" />
                    <p>adm@adm.com</p>
                </div>
            </div>
        </section>
        <section class="banner_endereco">
            <div class="org_endereco">
                <h2>ENDEREÇO</h2>
                <hr />
                <div>
                    <li>A definir</li>
                </div>
            </div>

        </section>

    </main>
    <footer  class="container">
        <div class=" org_footer">
            <div class="logo_footer">
                <img src={logo} alt="" />
            </div>
            <div class="descricao_footer">
                <p>Todos os direitos reservados®</p>
            </div>
            <div class="org_redes">
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
