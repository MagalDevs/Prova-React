import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Header from './components/Header/Header'
import Card from './components/Card-curso/Card'
import Banner from './components/Banner-blackfriday/Banner'
import Footer from './components/Footer/Footer'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header/>
    <Banner/>
    <Card preco={"90,00"}/>
    <Footer/>
  </StrictMode>,
)
