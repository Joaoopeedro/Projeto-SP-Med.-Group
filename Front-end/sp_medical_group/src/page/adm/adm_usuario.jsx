import React, { useState, useEffect } from 'react';
    // import axios from 'axios';
    // import { render } from '@testing-library/react';

    
    import logo from '../../assets/img/Logo_2-removebg-preview.png'
    import youtube from '../../assets/img/youtube.png'
    import face from '../../assets/img/instagram.png'
    import insta from '../../assets/img/facebook.png'
    

    export default function Adm_usuario() {

        // estrutura de declaração de um estado usando o Hook useState
        // const [ nomeEstado, funcaoAtualiza ] = useState( valorInicial )
        const [listaTiposUsuarios, setListaadmusuario] = useState([]);
        const [titulo, setTitulo] = useState('');
        const [isLoading, setIsLoading] = useState(false);


        return (
        <div>
            <header class=" container header_Home">
        <div class=" div_header container">
            <div>
                <img class="img_header" src={logo}alt=""/>
            </div>
            <div class="org_heade_adm">
                <a href="">Home</a>
                <a href="">Consultas</a>
                <a href="">Cadastrar Usuario</a>
                <a href="">Adminitrador</a>


            </div>
        </div>
    </header>
    <main class="main_cadastrar_usuario">
        <section class="container">
            <div class="org_cadastro_usuario">
                <h2>Cadastrar Usuario</h2>
                <form>
                    <input type="text" placeholder="Tipo de Usaurio"></input>
                    <input type="email" placeholder="E-mail"></input>
                    <input type="password" placeholder="Senha"></input>
                    
                    <button type="submit" class="bnt_cadastrar_Usuario">Cadastrar</button>
                </form>
            </div>
        </section>
    </main>
    <footer  class="container">
        <div class=" org_footer">
            <div class="logo_footer">
                <img src={logo} alt=""/>
            </div>
            <div class="descricao_footer">
                <p>Todos os direitos reservados®</p>
            </div>
            <div class="org_redes">
                <img src={youtube}alt=""/>
                <img src={insta} alt=""/>
                <img src={face} alt=""/>
            </div>
        </div>
    </footer>
        </div>
    )

}