import React from 'react';
import Logoimg from '../../assets/logo.svg';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import '../../global.css';
import './styles.css';
export default function Register() {
    return (
        <div className="register-content">
            <div className="content">
                <section>
                    <img src={Logoimg} alt="Be The Hero" />
                    <h1>Cadastro</h1>
                    <p>Faça seu cadastro, entre na plataforma e ajude pessoas a encontrarem os  casos da sua ONG.</p>
                    <Link to="/" className="back-link">
                        <FiArrowLeft size={16} color="#E02041" />Voltar para logon
                    </Link>
                </section>
                <form>
                    <input placeholder="Nome da ONG"/>
                    <input type="email" placeholder="E-mail" />
                    <input placeholder="WhatsApp" />
                    
                    <div className="input-group">
                        <input placeholder="Cidade"/>
                        <input placeholder="UF" style={{width:80}}/>
                    </div>
                    <button className="button" type="submit">Cadastrar</button>
                </form>
            </div>
        </div>
    );
}