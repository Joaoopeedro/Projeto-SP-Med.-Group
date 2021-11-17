import React, { useState, useEffect } from 'react';
import axios from 'axios';

import logo from '../../assets/img/Logo_2-removebg-preview.png'
// import youtube from '../../assets/img/youtube.png'
// import face from '../../assets/img/instagram.png'
// import insta from '../../assets/img/facebook.png'
import Footer from "../../components/footer/footer";

export default function Adm_listar() {

    // estrutura de declaração de um estado usando o Hook useState
    // const [ nomeEstado, funcaoAtualiza ] = useState( valorInicial )
    const [listaMedicos, setListaMedicos] = useState([])
    const [listaPacientes, setListaPacientes] = useState([])
    const [listaconsultas, setListaadmistar] = useState([]);
    const [idMedico, setIdMedico] = useState(0)
    const [idPaciente, setIdPaciente] = useState(0)
    // const [idSituacao, setSituacao] = useState(0)
    const [dataCadastro, setDataCadastro] = useState(new Date())

   
    // const [isLoading, setIsLoading] = useState(false);

    function buscarConsultas() {
        console.log('Agora vamos fazer a chamada para a API.')

        // faz a chamada para a API usando axios
        axios('http://localhost:5000/api/Consultas', {
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('usuario-login')
            }
        })
            .then(resposta => {
                // console.log(resposta)
                if (resposta.status === 200) {
                    // estrutura set...
                    // setListaTiposUsuarios( novoValor )
                    setListaadmistar(resposta.data.listaconsultas)
                    
                    
                }
            })
            .catch(erro => console.log(erro));
    };

    useEffect(buscarConsultas, []);

    function medicos() {
        axios('http://localhost:5000/api/Medicos', {
            headers : {
                'Authorization' : 'Bearer ' + localStorage.getItem('usuario-login')
            }
        } )

        .then(response => {
            if (response.status === 200) {
                setListaMedicos(response.data.listaMedicos)
            }
        })
        .catch(erro => console.log(erro))
    }
    
    useEffect(medicos, [])

    function pacientes() {
        axios('http://localhost:5000/api/Pacientes/', {
            headers : {
                'Authorization' : 'Bearer ' + localStorage.getItem('usuario-login')
            }
        } )

        .then(response => {
            if(response.status === 200) {
                setListaPacientes(response.data.listaPacientes)
            }
        })
        .catch(erro => console.log(erro))
    }

    useEffect(pacientes, [])

    


    function cadastrarConsulta(evento) {
        // setIsLoading(true);

        // evita o comportamento padrão do navegador
        evento.preventDefault();

        axios.post('http://localhost:5000/api/Consultas', {
            idPaciente:idPaciente,
            idMedico:idMedico,
            dataConsulta:dataCadastro,
            idSituacao: 3, // id da situação agendada
            descricao : ''

        }, {
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('usuario-login')
            }
        })
            .then(response => {
                if (response.status === 201) {
                    console.log('A consulta foi cadastrado com sucesso!');
                    
                    buscarConsultas();
                    // setIsLoading(false);
                }
            })
            .catch(erro => console.log(erro))
             
    }

    console.log('o id do medico escolhido é: ' + idMedico )
    console.log('o id do medico escolhido é: ' + dataCadastro )
    
   

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
            <main className="main_adm">
                <section className="container">
                    <div className="org_cadastro">

                        <h2>Cadastrar Consulta</h2>

                        <form onSubmit={cadastrarConsulta}>

                        <select name="Paciente" onChange={ (campo) => setIdPaciente(campo.target.value) } value={idPaciente}  id="">

                            <option value="0">Escolha um paciente</option>

                                {
                                    listaPacientes.map((event)=> {
                                        return(
                                            <option key={event.idPaciente} value={event.idPaciente}>{event.nomePaciente}</option>
                                            )
                                        })
                                }

                            </select>

                            <select name="Medico" onChange={ (campo) => setIdMedico(campo.target.value)} value={idMedico} id="">
                                <option value="#">Escolha um medicos</option>
                                {
                                    listaMedicos.map((event)=> {
                                        return(
                                            <option key={event.idMedico} value={event.idMedico} >{event.nomeMedico} </option>
                                        )
                                    })
                                }
                            </select>

                            <input type="datetime-local" placeholder="Data da consulta" onChange={ (campo) => setDataCadastro(campo.target.value)}  value={dataCadastro}/>

                            {/* <input type="text" placeholder="Descricao"  ></input>                             */}

                            <button type="submit" class="bnt_cadastrar">Cadastrar</button>
                        </form>
                    </div>
                </section>
                <section className="hr_cadastrar">
                    <hr />
                </section>
                <section className="container">
                    <div className="org_tabela_adm">
                        <h2>Lista de Consultas</h2>
                        <table className="tabela_adm">
                            <thead>
                                <tr>
                                    <th>Paciente</th>
                                    <th>Médico</th>
                                    <th>Data da consulta</th>
                                    <th>Descrição</th>
                                    <th>Situação</th>
                                    {/* <th>Editar</th> */}


                                </tr>
                            </thead>
                            <tbody>
                                {
                                    listaconsultas.map((con) => {
                                        return (

                                            <tr key={con.idConsulta}>
                                                <td>{con.idPacienteNavigation.nomePaciente}</td>
                                                <td>{con.idMedicoNavigation.nomeMedico}</td>
                                                <td>{Intl.DateTimeFormat("pt-BR", {
                                                    year: 'numeric', month: 'numeric', day: 'numeric',
                                                    hour: 'numeric', minute: 'numeric', hour12: false
                                                }).format(new Date(con.dataConsulta))}</td>
                                                <td>{con.descricao}</td>
                                                <td>{con.idSituacaoNavigation.situacao1
                                                }</td>
                                                {/* <td className="bnt_editar_adm"><button>Editar</button></td> */}


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