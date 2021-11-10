import { Component } from "react";



import logo from '../../assets/img/Logo_2-removebg-preview.png'
import youtube from '../../assets/img/youtube.png'
import face from '../../assets/img/instagram.png'
import insta from '../../assets/img/facebook.png'


import { render } from "@testing-library/react";

export default class Paciente extends Component {
    constructor(props) {
      super(props);
      this.state = {
        listaCnsultas: [],
        nomeMedico:'',
        dataConsulta: '',
        descricao:'',
        situacao:'',
        erroMensagem: '',
        isLoading: false,
      };
    }
    render(){
        return(
            <div>
                <header class=" container header_Home">
        <div class=" div_header container">
            <div>
                <img class="img_header" src={logo} alt=""/>
            </div>
            <div class="org_heade_adm">
                <a href="">Home</a>
                <a href="">Consultas</a>
                <a href="">Agentdar</a>
                <a href="">Paciente</a>


            </div>
        </div>
    </header>
    <main class="main_paciente">
        <section class="container">
            <div class="org_tabela_paciente">
                <h2>Lista de Consultas</h2>
                <table class="tabela_paciente">
                    <thead>
                        <tr>
                            <th>Médico</th>
                            <th>Data da consulta</th>
                            <th>Descrição</th>
                            <th>Situação</th>

                        </tr>
                    </thead>
                    <tbody>

                        <tr>
                            <td>joao</td>
                            <td>12/02/2022</td>
                            <td>Atendimento normal</td>
                            <td>normal</td>



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
}