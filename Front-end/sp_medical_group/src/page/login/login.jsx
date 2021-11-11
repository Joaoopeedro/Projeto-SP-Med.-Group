import { Component } from "react";
import { parseJwt, usuarioAutenticado } from '../../services/auth';
import axios from 'axios';
// import { Link } from 'react-router-dom';


import logo from '../../assets/img/Logo_2-removebg-preview.png'

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: 'adm@adm.com',
            senha: 'adm132',
            erroMensagem: '',
            isLoading: false,
        };
    }

    efetualogin = (log) => {
        log.preventDefault();

        this.setState({ erroMensagem: '', isLoading: true });

        axios.post('http://localhost:5000/api/Login/login', {
            email: this.state.email,
            senha: this.state.senha,

        }).then((resposta) => {
            // verifico se o status code dessa resposta é igual a 200
            if (resposta.status === 200) {

                localStorage.setItem('usuario-login', resposta.data.token);

                this.setState({ isLoading: false });


                let base64 = localStorage.getItem('usuario-login').split('.')[1];

                console.log(base64);

                console.log(this.props);
                if (parseJwt().role === '1') {
                    this.props.history.push('/admlistar');
                    console.log('estou logado: ' + usuarioAutenticado());
                } else if(parseJwt().role === '2') {

                    this.props.history.push('/paciente');
                    console.log('estou logado: ' + usuarioAutenticado());
                    
                
                } else if(parseJwt().role === '3') {

                    this.props.history.push('/medico');
                    console.log('estou logado: ' + usuarioAutenticado());
                    
                }else{
                    this.props.history.push('/login');
                }
            
            }
        })
            .catch(() => {
                // define o valor do state erroMensagem com uma mensagem personalizada
                this.setState({
                    erroMensagem: 'E-mail e/ou senha inválidos!',
                    isLoading: false,
                });
            });
    }

    atualizaStateCampo = (campo) => {

        this.setState({ [campo.target.name]: campo.target.value });

        
    };

    render() {
        return (
            <div>
                <section className="container-login flex">
                    <div className="img__login"><div className="img__overlay"></div></div>

                    <div className="item__login">
                        <div className="row">
                            <div className="item">
                                <img src={logo} className="icone__login" alt="logo do SpMedical" />
                            </div>
                            <div className="item" id="item__title">
                                <p className="text__login" id="item__description">
                                    Bem-vindo! Faça login para acessar sua conta.
                                </p>
                            </div>
                            <form onSubmit={this.efetualogin}>
                                <div className="item">
                                    <input
                                        className="input__login"
                                        placeholder="E-mail"
                                        type="text"
                                        name="email"
                                        id="login__email"
                                        value={this.state.email}
                                        onChange={this.atualizaStateCampo}
                                    />
                                </div>
                                <div className="item">
                                    <input
                                        className="input__login"
                                        placeholder="Senha"
                                        type="password"
                                        name="senha"
                                        id="login__senha"
                                        value={this.state.senha}
                                        onChange={this.atualizaStateCampo}
                                    />
                                </div>
                                <div className="item">
                                    {
                                        this.state.isLoading === true && (
                                            <button
                                                type="submit"
                                                disabled
                                                className="btn btn__login"
                                                id="btn__login"
                                            >
                                                Loading...
                                            </button>
                                        )

                                    }
                                    {
                                        this.state.isLoading === false && (
                                            <button
                                                className="btn btn__login"
                                                id="btn__login"
                                                type="submit"
                                                disabled={
                                                    this.state.email === '' || this.state.senha === ''
                                                        ? 'none'
                                                        : ''
                                                }
                                            >
                                                Login
                                            </button>
                                        )
                                    }


                                </div>
                            </form>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}