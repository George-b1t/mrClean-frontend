import React from 'react';
import '../style/App.css';
import { Link } from 'react-router-dom';
import { AiOutlineSearch, AiOutlineCopyright, AiOutlineClose, AiOutlineUser } from "react-icons/ai";
import productImage from '../assets/product-image.jpg'

function Shop() {

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
      <div id='search-shop'>
        <h1 id='title-search-shop'>O que você está procurando?</h1>
        <div id='search-shop-inpbtn'>
          <input id='input-search-shop' placeholder='Digite o nome do produto'/>
          <button id='button-search-shop'><AiOutlineSearch/></button>
        </div>
      </div>
      <div id='sep-search-product'/>
      <div className='m-space-products'>
      <div className='space-products'>
        <div className='product'>
          <div className='product1'>
            <img alt='imagepro' src={productImage}/>
          </div>
          <div className='product2'>
            <h1>Kit Luminária</h1>
            <h1>R$79,80</h1>
          </div>
        </div>
        <div className='product'>
          <div className='product1'>
            <img alt='imagepro' src={productImage}/>
          </div>
          <div className='product2'>
            <h1>Kit Luminária</h1>
            <h1>R$79,80</h1>
          </div>
        </div>
        <div className='product'>
          <div className='product1'>
            <img alt='imagepro' src={productImage}/>
          </div>
          <div className='product2'>
            <h1>Kit Luminária</h1>
            <h1>R$79,80</h1>
          </div>
        </div>
        <div className='product'>
          <div className='product1'>
            <img alt='imagepro' src={productImage}/>
          </div>
          <div className='product2'>
            <h1>Kit Luminária</h1>
            <h1>R$79,80</h1>
          </div>
        </div>
        <div className='product'>
          <div className='product1'>
            <img alt='imagepro' src={productImage}/>
          </div>
          <div className='product2'>
            <h1>Kit Luminária</h1>
            <h1>R$79,80</h1>
          </div>
        </div><div className='product'>
          <div className='product1'>
            <img alt='imagepro' src={productImage}/>
          </div>
          <div className='product2'>
            <h1>Kit Luminária</h1>
            <h1>R$79,80</h1>
          </div>
        </div>
        <div className='product'>
          <div className='product1'>
            <img alt='imagepro' src={productImage}/>
          </div>
          <div className='product2'>
            <h1>Kit Luminária</h1>
            <h1>R$79,80</h1>
          </div>
        </div>
        <div className='product'>
          <div className='product1'>
            <img alt='imagepro' src={productImage}/>
          </div>
          <div className='product2'>
            <h1>Kit Luminária</h1>
            <h1>R$79,80</h1>
          </div>
        </div>
        <div className='product'>
          <div className='product1'>
            <img alt='imagepro' src={productImage}/>
          </div>
          <div className='product2'>
            <h1>Kit Luminária</h1>
            <h1>R$79,80</h1>
          </div>
        </div>
        <div className='product'>
          <div className='product1'>
            <img alt='imagepro' src={productImage}/>
          </div>
          <div className='product2'>
            <h1>Kit Luminária</h1>
            <h1>R$79,80</h1>
          </div>
        </div><div className='product'>
          <div className='product1'>
            <img alt='imagepro' src={productImage}/>
          </div>
          <div className='product2'>
            <h1>Kit Luminária</h1>
            <h1>R$79,80</h1>
          </div>
        </div>
        <div className='product'>
          <div className='product1'>
            <img alt='imagepro' src={productImage}/>
          </div>
          <div className='product2'>
            <h1>Kit Luminária</h1>
            <h1>R$79,80</h1>
          </div>
        </div>
        <div className='product'>
          <div className='product1'>
            <img alt='imagepro' src={productImage}/>
          </div>
          <div className='product2'>
            <h1>Kit Luminária</h1>
            <h1>R$79,80</h1>
          </div>
        </div>
        <div className='product'>
          <div className='product1'>
            <img alt='imagepro' src={productImage}/>
          </div>
          <div className='product2'>
            <h1>Kit Luminária</h1>
            <h1>R$79,80</h1>
          </div>
        </div>
        <div className='product'>
          <div className='product1'>
            <img alt='imagepro' src={productImage}/>
          </div>
          <div className='product2'>
            <h1>Kit Luminária</h1>
            <h1>R$79,80</h1>
          </div>
        </div><div className='product'>
          <div className='product1'>
            <img alt='imagepro' src={productImage}/>
          </div>
          <div className='product2'>
            <h1>Kit Luminária</h1>
            <h1>R$79,80</h1>
          </div>
        </div>
        <div className='product'>
          <div className='product1'>
            <img alt='imagepro' src={productImage}/>
          </div>
          <div className='product2'>
            <h1>Kit Luminária</h1>
            <h1>R$79,80</h1>
          </div>
        </div>
        <div className='product'>
          <div className='product1'>
            <img alt='imagepro' src={productImage}/>
          </div>
          <div className='product2'>
            <h1>Kit Luminária</h1>
            <h1>R$79,80</h1>
          </div>
        </div>
        <div className='product'>
          <div className='product1'>
            <img alt='imagepro' src={productImage}/>
          </div>
          <div className='product2'>
            <h1>Kit Luminária</h1>
            <h1>R$79,80</h1>
          </div>
        </div>
        <div className='product'>
          <div className='product1'>
            <img alt='imagepro' src={productImage}/>
          </div>
          <div className='product2'>
            <h1>Kit Luminária</h1>
            <h1>R$79,80</h1>
          </div>
        </div>
      </div>
      </div>
      <div id='sep-product-footer'/>
      <div className='footer-container'>
        <div id='footer1'>
          <h1 id='title-footer'>Inscreva-se para receber notícias e ofertas especiais</h1>
          <div id='footer1-form'>
            <input placeholder='Digite seu endereço de email'/>
            <button>Inscrever-se</button>
          </div>
        </div>
        <div id='sep-footer1'></div>
        <div id='footer2'>
          <div id='footer-info1'>
            <h3 id='title-footer-info1'>Sobre nós</h3>
            <ul>
              <li>
                <Link id='footer-link' to='/'>Quem Somos</Link>
              </li>
              <li>
                <Link id='footer-link' to='/'>Fale Conosco</Link>
              </li>
              <li>
                <Link id='footer-link' to='/'>Imprensa</Link>
              </li>
              <li>
                <Link id='footer-link' to='/'>Central de Confiança</Link>
              </li>
            </ul>
          </div>
          <div id='footer-info2'>
            <h3 id='title-footer-info2' to='/'>Suporte</h3>
            <ul>
              <li>
                <Link id='footer-link' to='/'>Suporte de produto</Link>
              </li>
              <li>
                <Link id='footer-link' to='/'>Denuncie Abuso</Link>
              </li>
            </ul>
          </div>
          <div id='footer-info3'>
            <h3 id='title-footer-info3' to='/'>Recursos</h3>
            <ul>
              <li>
                <Link id='footer-link' to='/'>Webmail</Link>
              </li>
              <li>
                <Link id='footer-link' to='/'>WHOIS</Link>
              </li>
              <li>
                <Link id='footer-link' to='/'>Confirmação ICANN</Link>
              </li>
              <li>
                <Link id='footer-link' to='/'>Desenvolvedores</Link>
              </li>
            </ul>
          </div>
          <div id='footer-info4'>
            <h3 id='title-footer-info4'>Sobre nós</h3>
            <ul>
              <li>
                <Link id='footer-link' to='/'>Quem Somos</Link>
              </li>
              <li>
                <Link id='footer-link' to='/'>Fale Conosco</Link>
              </li>
              <li>
                <Link id='footer-link' to='/'>Imprensa</Link>
              </li>
              <li>
                <Link id='footer-link' to='/'>Central de Confiança</Link>
              </li>
            </ul>
          </div>
        </div>
        <div id='sep-footer2'></div>
        <div id='final-footer'>
          <h1>MrcleAn</h1>
          <p><AiOutlineCopyright id='icon-copyright'/> Copyright - MrClean</p>
        </div>
      </div>
    </>
  )
}

export default Shop;