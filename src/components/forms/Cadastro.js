import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { AiOutlineLeft } from "react-icons/ai";

import api from '../../api/axios';

export default function Cadastro() {
  let history = useHistory();

  function handleClick() {
    history.push("/login");
  };

  function cadastra(event) {
    event.preventDefault();
    const username = document.getElementById('inputUsername').value;
    const surname = document.getElementById('inputSurname').value;
    const email = document.getElementById('inputEmail').value;
    const password = document.getElementById('inputPass').value;
    const password2 = document.getElementById('inputPass2').value;
    
    if(password === password2) {
      const name = username + ' ' + surname;

      api.post('/users', {
        name,
        email,
        password

      }).then(() => {
       
        document.getElementById('form-cadastro').classList.add('hidecadastro');

        setTimeout(() => {
          handleClick();
        }, 500);

      }).catch(err => {
        alert(err);
      });

    }else{
      alert('Senhas não coincidem');
    };
  };

  return(
    <>
      <div className='header-container'>
        <Link to={'/'}>
          <AiOutlineLeft id='header-page-back'/>
        </Link>
      </div>
      <div id='header-space'/>
      <div className='main-cadastro'>
        <form className='campo-cadastro' id='form-cadastro' onSubmit={cadastra}>
          <div id='campo-nome-sobrenome'>
            <div id='campo-nome-cadastro'>
              <label htmlFor='name'>Nome</label>
              <input id='inputUsername' maxLength='15' name='name' type="text" required placeholder='Digite seu nome'/>
            </div>
            <div id='campo-sobrenome-cadastro'>
              <label htmlFor='surname'>Sobrenome</label>
              <input id='inputSurname' maxLength='18' name='surname' type="text" required placeholder='Digite seu sobrenome'/>
            </div>
          </div>
          <label htmlFor='email'>Email</label>
          <input id='inputEmail' name='email' type="email" required placeholder='Digite seu email'/>
          <label htmlFor='pass'>Senha</label>
          <input id='inputPass' minLength='8' name='pass' type="password" required autoComplete='on' placeholder='Digite sua senha'/>
          <label htmlFor='pass'>Confirme a senha</label>
          <input id='inputPass2' minLength='8' name='pass2' type="password" required autoComplete='on' placeholder='Digite sua senha'/>
          <div id='campo-button-cadastro'>
            <button type='submit' id='button-envia-cadastro'>Cadastrar-se</button>
          </div>
        </form>
      </div>
    </>
  )
}