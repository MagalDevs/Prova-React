import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './index.css'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Produtos from './pages/Produtos'
import Sobre from './pages/sobre-nos'
import Home from './pages/Home'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/produtos" element={<Produtos />} />
        <Route path="/sobre" element={<Sobre />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  </StrictMode>
);
