import React from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import { AiOutlineLeft } from "react-icons/ai";

import api from '../../api/axios';

export default function Login() {
  const token = (function useQuery() {
    return new URLSearchParams(useLocation().search);
  })().get('token');

  if(token){
    api.get(`/email/${token}`)
    .then(res => {
      console.log(res.data);
      window.history.pushState('', '', '/login');
    }).catch(err => {
      console.log(err);
    });
  };

  let history = useHistory();

  function handleClick() {
    history.push("/");
  };

  function login(event) {
    event.preventDefault();
    const email = document.getElementById('inputEmail').value;
    const password = document.getElementById('inputPass').value;

    api.post('/auth', {
      email,
      password
    }).then(res => {
      localStorage.setItem('token', res.data.token);
      handleClick();
    }).catch(err => {
      console.log(err);
    });
  };
  
  return(
    <>
      <div className='header-container-login'>
        <Link to='/'>
          <AiOutlineLeft id='header-page-back'/>
        </Link>
      </div>
      <div id='header-space'/>
      <div className='main-login'>
        <form className='campo-login' id='form-login' onSubmit={login}>
          <label htmlFor='email'>Email</label>
          <input id='inputEmail' name='email' type="email" required placeholder='Digite seu email'/>
          <label htmlFor='pass'>Senha</label>
          <input id='inputPass' minLength='8' name='pass' type="password" required autoComplete='on' placeholder='Digite sua senha'/>
          <div id='campo-button-login'>
            <button type='submit' id='button-envia-login'>Login</button>
          </div>
        </form>
      </div>
    </>
  );
};