import React,{ useState, useEffect } from 'react';
import {Link,useHistory} from 'react-router-dom';
import {FiLogIn} from 'react-icons/fi';

import './styles.css';
import './../../global.css';
import logoImg from '../../assets/logo.svg';
import heroesImg from '../../assets/heroes.png';
import api from '../../services/api';

export default function Logon() {
    useEffect(()=>{
        localStorage.clear();
    },[]);
    const [id,setID] = useState('');
    const history = useHistory();
    async function HandleLogon(e){
        const ong_id = {id};
        e.preventDefault();
        
        try {
            const response  = await api.post('sessions',ong_id);
            localStorage.setItem('ong_id',id);
            localStorage.setItem('ong_name',response.data.name); alert(`Logado como ${response.data.name}`);
            history.push('/profile');

        } catch (error) {
            alert('Falaha no login');
        }
    }
    return (
        <div className="logon-container">
            <section className="form">
                <img src={logoImg} alt="Be The Hero" />
                <form onSubmit={HandleLogon}>
                    <h1>Faça seu logon</h1>
                    <input placeholder="Sua ID" value={id} onChange={e=>setID(e.target.value)}/>
                    <button className="button" type="submit">Entrar</button>

                    <Link to="/register" className="back-link">
                        <FiLogIn size={16} color="#E02041"/>Não tenho cadastro</Link>
                </form>
            </section>
            <img src={heroesImg} alt="heroes" />

        </div>
    );
}
