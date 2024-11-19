import React from 'react'
import './Header.css'
import { VscAccount } from "react-icons/vsc";
import { IconContext } from "react-icons";



const Header = () => {
  return (
    <header>
        <img src="./imgs/2-removebg-preview.png" alt="" />
        <input type="search" name="search" className='search' placeholder='Search'/>
        
        <div className='div-cadastro'>
            <IconContext.Provider  value={{className: "icone"}}>
                <VscAccount />
            </IconContext.Provider>
            
            <a className='cadastro' href="#">Cadastre-se</a>
        </div>
    </header>
  )
}

export default Header