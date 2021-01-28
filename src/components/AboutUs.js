import React from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineClose, AiOutlineUser } from "react-icons/ai";

export default function AboutUs() {

  function menu() {
    if(document.getElementById('menu').classList.contains('hide')){
      document.getElementById('menu').classList.remove('hide');
      document.getElementById('menu').classList.add('nohide');
      document.getElementById('absolute').style.display = 'none';
    }else{
      document.getElementById('menu').classList.add('hide');
      document.getElementById('menu').classList.remove('nohide');
      document.getElementById('absolute').style.display = 'flex';
    }
  }

  return(
    <>
      <div id='menu'>
        <AiOutlineClose id='close-menu' onClick={menu}/>
        <div className='space-title-menu'>
          <h1 id='title-menu'>Menu</h1>
        </div>
        <div className='main-menu'>
          <Link to='/cadastro' className='menu-option menu-option1'>
            Cadastrar-se
          </Link>
          <Link to='/login' className='menu-option menu-option2'>
            Fazer Login
          </Link>
        </div>
        <div id='menu-final-footer'>
          <h1>MrcleAn</h1>
        </div>
      </div>
      <div onClick={menu} id='absolute'></div>
      <div className='header-container'>
        <Link to='/'>
          <h1 className='header-logo'>MrcleAn</h1>
        </Link>
        <ul id='guide'>
          <li>
            <Link className='guide-link' to='/'>Home</Link>
          </li>
          <li>
            <Link className='guide-link' to='/shop'>Shop</Link>
          </li>
          <li>
            <Link className='guide-link' to='/aboutus'>About Us</Link>
          </li>
        </ul>
        <button onClick={menu} id='list-icon'><AiOutlineUser/></button>
      </div>
      <div id='header-space'/>
    </>
  )
}