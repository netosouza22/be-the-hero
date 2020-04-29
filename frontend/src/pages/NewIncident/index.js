import React, {useState} from 'react'
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import api from '../../services/api'


import Logo from '../../assets/logo.jpeg'
import './style.css'
import '../../global.css'

function NewIncident() {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [value, setValue] = useState('');

    const history = useHistory();

    const ongId = localStorage.getItem('ongId');
    
    async function handleRegister(e){
        //prevenindo que a tela carregue
        e.preventDefault();

        const data = {
            title,
            description,
            value,
        };

        try {
            await api.post('incidents', data, {
                headers: {
                    authorization: ongId,
                },
            });

            history.push('/profile');
        }catch(err) {
            alert('Erro no cadastro', err)
        }

    }
    
    return (
        <div className="NewIncident-container">
            <div className="content">
                <section className="form">
                    <img src={Logo} alt="logo be the hero" />

                    <form>
                        <h1>Cadastrar novo caso</h1>
                        <p>Descreva o caso detalhamente para encontrar um herói para resolver isso</p>

                        <Link className="all-container" to="/profile">
                            <FiArrowLeft size="16" color="#E02041" />
                        Voltar para home
                        </Link>
                    </form>
                </section>

                <form onSubmit = {handleRegister}>

                    <input 
                    placeholder="Título do caso" 
                    value = {title}
                    onChange = {e => setTitle(e.target.value) }
                    />

                    <textarea 
                    placeholder="Descrição do caso" 
                    value = {description}
                    onChange = {e => setDescription(e.target.value)}
                    />

                    <input 
                    placeholder="Valor em reais"
                    value = {value}
                    onChange = { e => setValue (e.target.value)}
                    />

                    <button  className=" button " type="submit"> Cadastrar </button>
                </form>

            </div>
        </div>
    );
}

export default NewIncident;