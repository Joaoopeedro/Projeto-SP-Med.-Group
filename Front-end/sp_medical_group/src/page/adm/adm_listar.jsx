import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { render } from '@testing-library/react';



import logo from '../../assets/img/Logo_2-removebg-preview.png'
import youtube from '../../assets/img/youtube.png'
import face from '../../assets/img/instagram.png'
import insta from '../../assets/img/facebook.png'

export default function Adm_listar() {

    // estrutura de declaração de um estado usando o Hook useState
    // const [ nomeEstado, funcaoAtualiza ] = useState( valorInicial )
    const [listaconsultas, setListaadmistar] = useState([]);
    const [titulo, setTitulo] = useState('');
    
    const [isLoading, setIsLoading] = useState(false);

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
                    setListaadmistar(resposta.data)
                }
            })
            .catch(erro => console.log(erro));
    };
    useEffect(buscarConsultas, []);

    function cadastrarConsulta(evento){
        setIsLoading( true );

        // evita o comportamento padrão do navegador
        evento.preventDefault();

        axios.post('http://localhost:5000/api/Consultas', {
            tituloTipoUsuario : titulo
        }, {
            headers : {
                'Authorization' : 'Bearer ' + localStorage.getItem('usuario-login')
            }
        })
        .then(response => {
            if (response.status === 201) {
                console.log('A consulta foi cadastrado com sucesso!');
                setTitulo( '' );
                buscarConsultas();
                setIsLoading( false );
            }
        })
        .catch( erro => console.log(erro), setTitulo( '' ), setInterval(() => {
            setIsLoading( false )
        }, 5000) );
    };


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
                        <a href="">Adminitrador</a>


                    </div>
                </div>
            </header>
            <main className="main_adm">
                <section className="container">
                    <div className="org_cadastro">
                        <h2>Cadastrar Consulta</h2>
                        <form onSubmit={cadastrarConsulta}>
                            <input type="text" placeholder="Nome Paciente"  ></input>
                            <input type="text" placeholder="Nome Medico"  ></input>
                            <input type="date" placeholder="Data da consulta"  ></input>
                            <input type="text" placeholder="Descricao"  ></input>
                            <input type="text" placeholder="Situação"  ></input>

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
                                    <th>Editar</th>


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
                                                <td className="bnt_editar_adm"><button>Editar</button></td>


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