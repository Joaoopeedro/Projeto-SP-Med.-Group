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
            nomeMedico: '',
            dataConsulta: '',
            descricao: '',
            situacao: '',
            erroMensagem: '',
            isLoading: false,
        };
    }
    render() {
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
                            <a href="/paciente">Consultas</a>
                            <a href="/">Agentdar</a>
                            <a href="">Paciente</a>


                        </div>
                    </div>
                </header>
                <main className="main_paciente">
                    <section clclassNameass="container">
                        <div className="org_tabela_paciente">
                            <h2>Lista de Consultas</h2>
                            <table className="tabela_paciente">
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
                <footer className="container">
                    <div className=" org_footer">
                        <div className="logo_footer">
                            <a href="#header">
                                <img src={logo} alt="" />
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
        )
    }
}