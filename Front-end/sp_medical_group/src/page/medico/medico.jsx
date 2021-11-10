import { Component } from "react";



import logo from '../../assets/img/Logo_2-removebg-preview.png'
import youtube from '../../assets/img/youtube.png'
import face from '../../assets/img/instagram.png'
import insta from '../../assets/img/facebook.png'

export default class Medico extends Component {
    constructor(props) {
      super(props);
      this.state = {
        listaCnsultas: [],
        nomePaciente:'',
        dataConsulta: '',
        idade:'',
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
                <a href="">Relatorio</a>
                <a href="">Médico</a>


            </div>
        </div>
    </header>
    <main class="main_medico">
        <section class="container">
            <div class="org_tabela_medico">
                <h2>Lista de Consultas</h2>
                <table class="tabela_medico">
                    <thead>
                        <tr>
                            <th>Paciente</th>
                            <th>Data da consulta</th>
                            <th>Idade Paciente</th>
                            <th>Descrição</th>
                            <th>Situação</th>
                            <th>Editar</th>


                        </tr>
                    </thead>
                    <tbody>

                        <tr>
                            <td>joao</td>
                            <td>12/02/2022</td>
                            <td>30 anos</td>
                            <td>Atendimento normal</td>
                            <td>normal</td>
                            <td class="bnt_editar_medico"><button>Editar</button></td>


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