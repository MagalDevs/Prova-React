import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Header from './components/Header/Header'
import Banner from './components/Banner-blackfriday/Banner'
import Cursos from './components/Cursos/Cursos'
import Footer from './components/Footer/Footer'
import { Route, Router, Routes } from 'react-router-dom'
import Produtos from './pages/produtos'
import Sobre from './pages/sobre-nos'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element='./'/>
        <Route path="/Produtos" element={<Produtos/>}/>
        <Route path="/Sobre" element={<Sobre/>}/>
      </Routes>
    </Router>
    <Banner/>
    <Cursos/>
    <Footer/>
  </StrictMode>,
)
