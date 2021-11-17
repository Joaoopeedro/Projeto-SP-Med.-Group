import React from 'react';
// import axios from 'axios';
// import { render } from '@testing-library/react';


import logo from '../../assets/img/Logo_2-removebg-preview.png'
// import youtube from '../../assets/img/youtube.png'
// import face from '../../assets/img/instagram.png'
// import insta from '../../assets/img/facebook.png'
import Footer from "../../components/footer/footer";


export default function Adm_usuario() {

    // estrutura de declaração de um estado usando o Hook useState
    // const [ nomeEstado, funcaoAtualiza ] = useState( valorInicial )
    // const [listaTiposUsuarios, setListaadmusuario] = useState([]);
    // const [titulo, setTitulo] = useState('');
    // const [isLoading, setIsLoading] = useState(false);


    return (
        <div>
            <header className=" container header_Home" id="header">
                <div className=" div_header container">
                    <div>
                        <a href="#header">
                            <img className="img_header" src={logo} alt="" />
                        </a>
                    </div>
                    <div className="org_heade_adm">
                        <a href="/">Home</a>
                        <a href="/admlistar">Consultas</a>
                        <a href="/admusuario">Cadastrar Usuario</a>
                        <a href="/adm">Adminitrador</a>


                    </div>
                </div>
            </header>
            <main className="main_cadastrar_usuario">
                <section className="container">
                    <div className="org_cadastro_usuario">
                        <h2>Cadastrar Usuario</h2>
                        <form>
                            <input type="text" placeholder="Tipo de Usaurio"></input>
                            <input type="email" placeholder="E-mail"></input>
                            <input type="password" placeholder="Senha"></input>

                            <button type="submit" className="bnt_cadastrar_Usuario">Cadastrar</button>
                        </form>
                    </div>
                </section>
            </main>
           <Footer/>
        </div>
    )

}