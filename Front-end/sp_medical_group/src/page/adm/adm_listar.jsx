import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { render } from '@testing-library/react';



import logo from '../../assets/img/Logo_2-removebg-preview.png'
import youtube from '../../assets/img/youtube.png'
import face from '../../assets/img/instagram.png'
import insta from '../../assets/img/facebook.png'

export default function Adm_listar() {

    // estrutura de declaração de um estado usando o Hook useState
    // const [ nomeEstado, funcaoAtualiza ] = useState( valorInicial )
    const [listaTiposUsuarios, setListaadmistar] = useState([]);
    const [titulo, setTitulo] = useState('');
    const [isLoading, setIsLoading] = useState(false);


    return (
        <div>
            <header class=" container header_Home">
        <div class=" div_header container">
            <div>
                <img class="img_header" src={logo} alt=""/>
            </div>
            <div class="org_heade_adm">
                <a href="">Home</a>
                <a href="">Consultas</a>
                <a href="">Cadastrar Usuario</a>
                <a href="">Adminitrador</a>


            </div>
        </div>
    </header>
    <main class="main_adm">
        <section class="container">
            <div class="org_cadastro">
                <h2>Cadastrar Consulta</h2>
                <form>
                    <input type="text" placeholder="Nome Paciente"></input>
                    <input type="text" placeholder="Nome Medico"></input>
                    <input type="date" placeholder="Data da consulta"></input>
                    <input type="text" placeholder="Descricao"></input>
                    <input type="text" placeholder="Situação"></input>

                    <button type="submit" class="bnt_cadastrar">Cadastrar</button>
                </form>
            </div>
        </section>
        <section class="hr_cadastrar">
            <hr />
        </section>
        <section class="container">
            <div class="org_tabela_adm">
                <h2>Lista de Consultas</h2>
                <table class="tabela_adm">
                    <thead>
                        <tr>
                            <th>Paciente</th>
                            <th>Médico</th>
                            <th>Data da consulta</th>
                            <th>Descrição</th>
                            <th>Situação</th>
                            <th>Editar</th>


                        </tr>
                    </thead>
                    <tbody>

                        <tr>
                            <td>joao</td>
                            <td>lucas</td>
                            <td>12/02/2022</td>
                            <td>Atendimento normal</td>
                            <td>normal</td>
                            <td class="bnt_editar_adm"><button>Editar</button></td>


                        </tr>
                      
                       
                       

                    </tbody>
                </table>
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
                <img src={youtube} alt=""/>
                <img src={insta} alt=""/>
                <img src={face} alt=""/>
            </div>
        </div>
    </footer>

        </div>
    )
}