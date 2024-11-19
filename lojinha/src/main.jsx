import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Header from './components/Header/Header'
import Banner from './components/Banner-blackfriday/Banner'
import Cursos from './components/Cursos/Cursos'
import Card from './components/Card-curso/Card'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header/>
    <Banner/>
    <Cursos/>
  </StrictMode>,
)
