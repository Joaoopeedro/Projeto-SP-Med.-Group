import React from 'react'
import logo from '../../assets/img/Logo_2-removebg-preview.png'
import youtube from '../../assets/img/youtube.png'
import face from '../../assets/img/instagram.png'
import insta from '../../assets/img/facebook.png'

export default function footer (){
    return(
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
    )
}