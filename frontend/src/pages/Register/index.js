import React, {useState} from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import api from '../../services/api'
import Logo from '../../assets/logo.jpeg'
import './style.css'
import '../../global.css'

function Register() {
    //utilizando state
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [whatsapp, setWhatsapp] = useState('');
    const [city, setCity] = useState('');
    const [uf, setUf] = useState('');

    const history = useHistory();

   async function handleRegister(e){
        //prevenindo que a tela carregue
        e.preventDefault();

        const data = {
            name,
            email,
            whatsapp,
            city,
            uf
        };

        try {
            const response = await api.post('ongs', data);

            alert(`Seu id de acesso: ${response.data.id}`)

            history.push('/');
        }catch(err) {
            alert('Erro no cadastro', err)
        }

    }
    return (
        <div className="register-container">
            <div className="content">
                <section className="form">
                    <img src={Logo} alt="logo be the hero" />

                    <form>
                        <h1>Cadastro</h1>
                        <p>Faça seu cadastro, entre na plataforma e ajude pessoas a encontrarems casos da sua ONG</p>

                        <Link className="all-container" to="/">
                            <FiArrowLeft size="16" color="#E02041" />
                        Voltar para tela de login
                        </Link>
                    </form>
                </section>

                <form onSubmit = {handleRegister}>
                    <input 
                    placeholder="Digite o nome de sua ONG" 
                    value = {name}
                    onChange = { e => setName(e.target.value)}
                    />

                    <input 
                    type="e-mail" placeholder="Digite seu e-mail" 
                    value = {email}
                    onChange = { e => setEmail(e.target.value)}
                    />

                    <input 
                    placeholder="Digite seu Whatsapp" 
                    value = {whatsapp}
                    onChange = { e => setWhatsapp(e.target.value)}
                    />

                    <div className="input-adress">
                        <input 
                        placeholder="city" 
                        value = { city }
                        onChange = { e => setCity(e.target.value)}
                        style={{ width: 362, marginRight: 8 }}
                        />

                        <input 
                        placeholder="UF" 
                        value = { uf }
                        onChange = { e => setUf(e.target.value)}
                        style={{ width: 80 }} 
                        />

                    </div>

                    <button className=" button " type="submit"> Cadastrar </button>
                </form>

            </div>
        </div>
    );
}

export default Register;