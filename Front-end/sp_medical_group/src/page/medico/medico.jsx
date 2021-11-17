import { Component } from "react";



import logo from '../../assets/img/Logo_2-removebg-preview.png'
// import youtube from '../../assets/img/youtube.png'
// import face from '../../assets/img/instagram.png'
// import insta from '../../assets/img/facebook.png'
import Footer from "../../components/footer/footer";
import editar from '../../assets/img/icone descricao.png'

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
            editando: false,
            keyAtual: 0
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

    mudarDescricao = (event) => {
        event.preventDefault();
        console.log(this.state.idConsultaAlterado)
        console.log(this.state.descricao)
        if (this.state.idConsultaAlterado !== 0) {

        
        fetch("http://localhost:5000/api/Consultas/Descricao/" + this.state.idConsultaAlterado, {
            method: 'PATCH',

            // Define o corpo da requisição especificando o tipo ( JSON )
            body: JSON.stringify({ descricao: this.state.descricao }),

            headers: {
                'Content-Type' : 'Application/Json',
                Authorization: 'Bearer ' + localStorage.getItem('usuario-login'),
            }
            
        })
        
        
        .then((resposta) => {
            // Caso a requisição retorne um status code 204,
            if (resposta.status === 204) {
                console.log(
                    // Exibe no console do navegador a mensagem abaixo
                    'O Tipo de Evento ' +
                    this.state.idConsultaAlterado +
                    ' foi atualizado!',
                    
                    
                    );
                }
            })
            
            // caso ocorra algum erro, mostra no console do navegador.
            .catch((erro) => console.log(erro))
            .then(this.buscarConsultas)
            .then(this.limparCampos)
        }
    }

    buscaConsulta = (consultaRecebida) => {
        console.log(consultaRecebida)
        this.setState(
          {
            // Atualiza o state idTipoEventoAlterado com o valor do ID do Tipo de Evento recebido
            idConsultaAlterado: consultaRecebida.idConsulta,
            
            // e o state titulo com o valor do título do Tipo de Evento recebido
            descricao: consultaRecebida.descricao,
          },
          () => {
            console.log(
              'A consulta ' + consultaRecebida.idConsulta + ' foi selecionada,',
              'agora o valor do state idConsultaAlterado é: ' +
                this.state.idConsultaAlterado,
              'e o valor do state descricao é: ' + this.state.descricao,
            );
          },
          
          
        );
      };

      atualizaStateCampo = async (event) => {
        
    
        await this.setState({
          //dizendo que o target (alvo) do evento ,  vamos pegar o value(valor)
          descricao: event.target.value,
        });
        console.log(this.state.descricao);
      };
      limparCampos = () => {
        this.setState({
          descricao: '',
          idConsultaAlterado: 0,
        });
        console.log('Os states foram resetados!');
      };




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
                            <a href="/medico">Consultas</a>
                            <a href="/">Relatorio</a>
                            <a href="/medico">Médico</a>


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
                                                <td id="descricao">
                                                    {con.descricao}
                                                    
                                                    <img src={editar} alt="" name={con.idConsulta} onClick={() => this.buscaConsulta(con)}/>
                                                    
                                                </td>
                                                <td>{con.idSituacaoNavigation.situacao1}</td>
                                                

                                            </tr>
                                        )

                                    })

                                    }
                                </tbody>
                            </table>

                            {
                                this.state.idConsultaAlterado !== 0 &&
                                (
                                    <div className="alterarDescricao">
                                        <h2>Altere a descrição da consulta</h2>
                                        <form onSubmit={this.mudarDescricao}>
                                            <label htmlFor="inputJoao">Descrição da consulta</label>
                                            <input id="inputJoao" type="text" name="descricao" value={this.state.descricao} onChange={this.atualizaStateCampo}/>
                                            <button type="submit"   >Salvar</button>
                                            <button type="button" onClick={this.limparCampos}   >Cancelar</button>
                                        </form>
                                    </div>
                                )
                            }
                        </div>
                    </section>

                </main>
                <Footer/>

            </div>
        )
    }
}