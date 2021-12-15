import { Component } from "react";
// import {GoogleApiWrapper} from 'google-maps-react';



import logo from '../../assets/img/Logo_2-removebg-preview.png'
// import youtube from '../../assets/img/youtube.png'
// import face from '../../assets/img/instagram.png'
// import insta from '../../assets/img/facebook.png'
import Footer from "../../components/footer/footer";

export default class Paciente extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listaConsultas: [],
            idConsulta: '',
            nomeMedico: '',
            dataConsulta: '',
            descricao: '',
            situacao: '',
            erroMensagem: '',
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

    componentDidMount(){
        this.buscarConsultas();
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
                            <a href="/">Agendar</a>
                            <a href="/paciente">Paciente</a>


                        </div>
                    </div>
                </header>
                <main className="main_paciente">
                    <section className="container">
                        <div className="org_tabela_paciente">
                            <h2>Lista de Consultas</h2>
                            <table className="tabela_paciente">
                                <thead>
                                    <tr>
                                        <th>Médico</th>
                                        <th>Data da consulta</th>
                                        <th>Endereço Clinica</th>
                                        <th>Descrição</th>
                                        <th>Situação</th>

                                    </tr>
                                </thead>
                                <tbody>
                                    {this.state.listaConsultas.map((con)=> {
                                        return(
                                            <tr key={con.idConsulta}>
                                                <td>{con.idMedicoNavigation.nomeMedico}</td>
                                                <td>{Intl.DateTimeFormat("pt-BR", {
                                                    year: 'numeric', month: 'numeric', day: 'numeric',
                                                    hour: 'numeric', minute: 'numeric', hour12: false
                                                }).format(new Date(con.dataConsulta))}</td>
                                                <td><a href="/Mapa">{con.idMedicoNavigation.idClinicaNavigation.endereco}</a></td>
                                                <td>{con.descricao}</td>
                                                <td>{con.idSituacaoNavigation.situacao1}</td>
                                            </tr>
                                        )
                                    
                                    })

                                    }

                                </tbody>
                            </table>
                        </div>
                    </section>
                </main>
               <Footer/>
            </div>
        )
    }
}