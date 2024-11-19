import React from 'react'
import './Header.css'
import { VscAccount } from "react-icons/vsc";

const Header = () => {
  return (
    <header>
        <div className="cima">
          <img src="./imgs/2-removebg-preview.png" alt="" />
          <input type="search" name="search" className='search' placeholder='Search'/>
          
          <div className='div-cadastro'>
              <VscAccount className='icone'/>
              <a className='cadastro' href="#">Cadastre-se</a>
          </div>
        </div>
        <nav className='links'>
          <a href="#">Home</a>
          <a href="#">Produtos</a>
          <a href="#">Sobre Nós</a>
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