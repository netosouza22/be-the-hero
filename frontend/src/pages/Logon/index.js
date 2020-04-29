import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { FiLogIn } from 'react-icons/fi'
import api from '../../services/api'

import Logo from '../../assets/logo.jpeg'
import HeroesImg from '../../assets/heroes.jpeg'
import './style.css';
//importar imagem dentro do component

function Logon(){
    const [id, setId] = useState('');
    const history = useHistory();

    async function handleRegister(e){
        e.preventDefault();

        try {
            const response = await api.post('session', { id });

            localStorage.setItem('ongId', id);
            localStorage.setItem('ongName', response.data.name);

            history.push('/profile')
        }catch (err){
            alert('falha no login, tente novamente.')           
        }
    }

    return (
     <div className="logon-container">
         <section className="form">
            <img src={Logo} alt="Logo be the heroe"/> 

            <form onSubmit= {handleRegister}>
                <h1>Faça seu Logon</h1>

                <input 
                placeholder="Seu ID"
                value = {id}
                onChange = {e => setId(e.target.value)}
                />
                <button className ="button" type="submit">LOGAR</button>

                <Link clasName="all-container"to="/register">
                    <FiLogIn size="16" color="#E02041"/>
                    Não possuo cadastro
                </Link>
            </form>
         </section>

         <img src={HeroesImg} alt="heroes"/>
     </div>
     );
}

export default Logon;