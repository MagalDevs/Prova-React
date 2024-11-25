import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './index.css'
import Produtos from './pages/Produtos'
import Sobre from './pages/sobre-nos'
import Home from './pages/Home'
import Cadastro from './pages/Cadastro'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/produtos" element={<Produtos />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path='/cadastro' element={<Cadastro/>}/>
      </Routes>
    </Router>
  </StrictMode>
);
