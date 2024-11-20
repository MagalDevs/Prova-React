import React from 'react'
import './Header.css'
import { VscAccount } from "react-icons/vsc";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
        <div className="cima">
          <img src="./imgs/2-removebg-preview.png" alt="" />
          <input type="search" name="search" className='search' placeholder='Search'/>
          
          <div className='div-cadastro'>
              <VscAccount className='icone'/>
              <Link className='cadastro' to="/Cadastro">Cadastre-se</Link>
          </div>
          <div className='div-cadastro'>
              <FaShoppingCart  className='icone'/>
              <a className='cadastro' href="#" onClick={(Event) => Event.preventDefault()}>Meu carrinho</a>
          </div>
        </div>
        <nav className='links'>
          <Link className='link' to="/">Home</Link>
          <Link className='link' to="/Produtos">Produtos</Link>
          <Link className='link' to="/Sobre">Sobre Nós</Link>
        </nav>
        <div className='headline'> 
          <p>Os Melhores Preços da Região!!!</p>
          <p>Os Melhores Preços da Região!!!</p>
          <p>Os Melhores Preços da Região!!!</p>
        </div>
    </header>
  )
}

export default Header