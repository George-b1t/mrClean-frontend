import React from 'react';
import '../style/App.css';
import { AiOutlineRight, AiOutlineCopyright, AiOutlineClose, AiOutlineUser } from "react-icons/ai";
import { Link } from 'react-router-dom';
import homeiImage from '../assets/home-image.jpg';
import imageApresentation1 from '../assets/image-apresentation1.jpg';



function Home() {
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

  function exibeNoScroll() {
    const textos = document.querySelectorAll('div.apt')
    document.querySelectorAll('img.main-image-info').forEach((img, index) => {
      if(img.getBoundingClientRect().top + 50 < window.innerHeight) {
        img.classList.add('show-image')
        textos[index].classList.add('show-text')
      }
    })
  }

  window.addEventListener('scroll', exibeNoScroll)
  window.addEventListener('load', exibeNoScroll)

  return (
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
      <div className='main-container'>
        <div className='space-home-image'>
          <h1 className='slogan-image'>Absolutly</h1>
          <p className='sub-slogan-image'>Modern House's Items</p>
          <img alt='Casa Moderna' src={homeiImage}/>
        </div>
        <div className='space-apresentation'>
          <div id='apresentation1'>
            <div id='ap1-p1' className='apt'>
              <h1>Modernidade à sua porta</h1>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                It has survived not only five centuries, but also the leap into electronic typesetting, 
                remaining essentially unchanged.
              </p>
              <p>
                It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum 
                passages, and more recently with desktop publishing software like Aldus PageMaker including 
                versions of Lorem Ipsum.
              </p>
              <div>
                <button>
                  Saiba mais
                  <AiOutlineRight/>
                </button>
              </div>
            </div>
            <div id='ap1-p2'>
              <img alt='example1' className='main-image-info' src={imageApresentation1}/>
            </div>
          </div>
          <div id='apresentation2'>
            <div id='ap2-p1' className='apt'>
              <h1>Modernidade à sua porta</h1>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                It has survived not only five centuries, but also the leap into electronic typesetting, 
                remaining essentially unchanged.
              </p>
              <p>
                It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum 
                passages, and more recently with desktop publishing software like Aldus PageMaker including 
                versions of Lorem Ipsum.
              </p>
              <div>
                <button>
                  Saiba mais
                  <AiOutlineRight/>
                </button>
              </div>
            </div>
            <div id='ap2-p2'>
              <img alt='example2' className='main-image-info' src={imageApresentation1}/>
            </div>
          </div>
          <div id='apresentation1'>
            <div id='ap1-p1' className='apt'>
              <h1>Modernidade à sua porta</h1>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                It has survived not only five centuries, but also the leap into electronic typesetting, 
                remaining essentially unchanged.
              </p>
              <p>
                It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum 
                passages, and more recently with desktop publishing software like Aldus PageMaker including 
                versions of Lorem Ipsum.
              </p>
              <div>
                <button>
                  Saiba mais
                  <AiOutlineRight/>
                </button>
              </div>
            </div>
            <div id='ap1-p2'>
              <img alt='example1' className='main-image-info' src={imageApresentation1}/>
            </div>
          </div>
          <div id='apresentation2'>
            <div id='ap2-p1' className='apt'>
              <h1>Modernidade à sua porta</h1>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                It has survived not only five centuries, but also the leap into electronic typesetting, 
                remaining essentially unchanged.
              </p>
              <p>
                It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum 
                passages, and more recently with desktop publishing software like Aldus PageMaker including 
                versions of Lorem Ipsum.
              </p>
              <div>
                <button>
                  Saiba mais
                  <AiOutlineRight/>
                </button>
              </div>
            </div>
            <div id='ap2-p2'>
              <img alt='example2' className='main-image-info' src={imageApresentation1}/>
            </div>
          </div>
        </div>
      </div>
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
  );
}

export default Home;
