import React, { useEffect, useState } from 'react';
import { Link,useHistory } from 'react-router-dom';
import { FiPower, FiTrash2 } from 'react-icons/fi';
import './styles.css';
import './../../global.css';
import logoImg from '../../assets/logo.svg';
import heroesImg from '../../assets/heroes.png';
import api from '../../services/api';


export default function Profile() {
    const ong_id = localStorage.getItem('ong_id');
    const ong_name = localStorage.getItem('ong_name');
    const [incidents, setIncidents] = useState([]);
    const history = useHistory();
    useEffect(() => {
        api.get('profile', {
            headers: {
                Authorization: ong_id,
            }
        }).then(response => {
            setIncidents(response.data);
        })
    }, [incidents]);

    async function HandleDeleteCase(id){
        try {
            await api.delete(`/incidents/${id}`,{headers:{Authorization:ong_id}});
            alert(`Caso excluido com sucesso!`);
            setIncidents(incidents);
        } catch (error) {
            alert('Erro ao deletar um caso');
        }
        
    }

    function HandlerLogout(){
        localStorage.clear();
        history.push('/');
    }
    return (
        <div className="profile-content">
            <header>
                <img src={logoImg} alt="Be The Hero" />
                <span>Bem vinda, {ong_name}</span>
                <Link to="/incidents/new" className="button">Cadastrar novo caso</Link>
                <button type="button" onClick={HandlerLogout}><FiPower size={18} color="#E02041" /></button>
            </header>
            <h1>Casos cadastrados</h1>

            <ul>
                {incidents.map(incident => (
                    <li key={incident.id}>
                        <strong>CASO:</strong>
                        <p>{incident.title}</p>

                        <strong>DESCRIÇÃO:</strong>
                        <p>{incident.description}</p>

                        <strong>VALOR:</strong>
                        <p>{Intl.NumberFormat('pt-BR',{style:'currency',currency:'BRL'}).format(incident.value)}</p>

                        <button type="button"><FiTrash2 size={20} color="#a8a8b3" onClick={()=>HandleDeleteCase(incident.id)}/></button>
                    </li>
                ))}

            </ul>


        </div>
    );
}