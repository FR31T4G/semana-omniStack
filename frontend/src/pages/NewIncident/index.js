import React, { useState} from 'react';
import '../../global.css';
import './styles.css';
import { Link ,useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import LogoImg from '../../assets/logo.svg';
import api from '../../services/api';

export default function NewIncident() {
    const history = useHistory();
    const ong_id = localStorage.getItem('ong_id');
    const [title,setTitle] = useState('');
    const [description,setDescription] = useState('');
    const [value,setValue] = useState('');


    async function HandleNewIncident(e){
        const data = {title,description,value};
        e.preventDefault();
        try {
            const response = await api.post('incidents',data,{headers:{Authorization:ong_id}});
            alert('Caso criado com sucesso!');
            history.push('/profile');
        } catch (error) {
            alert('Erro ao criar caso!');
        }

    }
    return (
        <div className="newincident-content">
            <div className="content">
                <section>
                    <img src={LogoImg} alt="Be The Hero" />
                    <h1>Cadastrar novo  caso</h1>
                    <p>Descreva o caso detalhadamente para encontrar um heroi para resolver isso.</p>
                    <Link to="/profile" className="back-link"><FiArrowLeft size={18} color="#E02041" />Voltar para home</Link>
                </section>
                <form onSubmit={HandleNewIncident}>
                    <input placeholder="Titulo do caso" value={title} onChange={e=> setTitle(e.target.value)} />
                    <textarea placeholder="Descrição" value={description} onChange={e=> setDescription(e.target.value)}/>
                    <input placeholder="Valor em reais" value={value} onChange={e=> setValue(e.target.value)}/>
                    <button className="button" type="submit">Cadastrar</button>
                </form>
            </div>
        </div>
    );
}