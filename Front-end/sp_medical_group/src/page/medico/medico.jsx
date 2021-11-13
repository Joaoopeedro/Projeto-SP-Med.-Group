import { Component } from "react";



import logo from '../../assets/img/Logo_2-removebg-preview.png'
import youtube from '../../assets/img/youtube.png'
import face from '../../assets/img/instagram.png'
import insta from '../../assets/img/facebook.png'

export default class Medico extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listaConsultas: [],
            idConsulta: '',
            nomePaciente: '',
            dataConsulta: '',
            idade: '',
            descricao: '',
            situacao: '',
            erroMensagem: '',
            idConsultaAlterado: 0,
            isLoading: false,
        };
    }
    buscarConsultas = () => {
        fetch('http://localhost:5000/api/Consultas/consulta', {
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('usuario-login'),
            },
        })
            .then((resposta) => resposta.json())

            .then((dados) => this.setState({ listaConsultas: dados }))
            

            .catch((erro) => console.log(erro))
    }

    componentDidMount() {
        this.buscarConsultas();
    }

    mudarDescricao = () => {
        document.getElementById("descricao").innerHTML = '<form onSubmit={this.mudarDescricao}><input type="text" /></form>'

        fetch("http://localhost:5000/api/Consultas/Descricao" + this.state.idConsulta, {
            method: 'PATCH',

            // Define o corpo da requisição especificando o tipo ( JSON )
            body: JSON.stringify({ descricao: this.state.descricao }),

            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('usuario-login'),
            }
        })

            .then((resposta) => resposta.json())
            .catch((erro) => console.log(erro))
            .then(this.buscarConsultas)
    }

    render() {
        return (
            <div>
                <header className=" container header_Home" id="header">
                    <div class=" div_header container">
                        <div>
                            <a href="#header">
                                <img className="img_header" src={logo} alt="" />
                            </a>
                        </div>
                        <div className="org_heade_adm">
                            <a href="/">Home</a>
                            <a href="/medico">Consultas</a>
                            <a href="/">Relatorio</a>
                            <a href="">Médico</a>


                        </div>
                    </div>
                </header>
                <main className="main_medico">
                    <section className="container">
                        <div className="org_tabela_medico">
                            <h2>Lista de Consultas</h2>
                            <table className="tabela_medico">
                                <thead>
                                    <tr>
                                        <th>Paciente</th>
                                        <th>Data da consulta</th>
                                        <th>Data de Nascimento</th>
                                        <th>Descrição</th>
                                        <th>Situação</th>
                                        <th>Editar</th>


                                    </tr>
                                </thead>
                                <tbody>

                                    {this.state.listaConsultas.map((con) => {
                                        return (
                                            <tr key={con.idConsulta} >
                                                <td>{con.idPacienteNavigation.nomePaciente}</td>
                                                <td>{Intl.DateTimeFormat("pt-BR", {
                                                    year: 'numeric', month: 'numeric', day: 'numeric',
                                                    hour: 'numeric', minute: 'numeric', hour12: false
                                                }).format(new Date(con.dataConsulta))}</td>
                                                <td>{Intl.DateTimeFormat("pt-BR", {
                                                    year: 'numeric', month: 'numeric', day: 'numeric',
                                                    hour12: false
                                                }).format(new Date(con.idPacienteNavigation.dataNascimento))}</td>
                                                <td id="descricao">{con.descricao}</td>
                                                <td>{con.idSituacaoNavigation.situacao1}</td>
                                                <td class="bnt_editar_medico" ><button onClick={this.mudarDescricao} type='submit'>Editar </button></td>

                                            </tr>
                                        )

                                    })

                                    }
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