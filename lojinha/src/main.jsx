import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Header from './components/Header/Header'
import Banner from './components/Banner-blackfriday/Banner'
<<<<<<< HEAD
import Footer from './components/Footer/Footer'
=======
import Cursos from './components/Cursos/Cursos'
import Card from './components/Card-curso/Card'
>>>>>>> 7766e69988634aa3ec6428b2aa1d266d25fdcdd5


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header/>
    <Banner/>
<<<<<<< HEAD
    <Card preco={"90,00"}/>
    <Footer/>
=======
    <Cursos/>
>>>>>>> 7766e69988634aa3ec6428b2aa1d266d25fdcdd5
  </StrictMode>,
)
