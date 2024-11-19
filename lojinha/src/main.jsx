import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Header from './components/Header/Header'
import Banner from './components/Banner-blackfriday/Banner'
<<<<<<< HEAD

import Cursos from './components/Cursos/Cursos'
import Footer from './components/Footer/Footer'
=======
import Cursos from './components/Cursos/Cursos'
>>>>>>> 88d8a79e4a6dfb6634313d874ce175e26920d0a3


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header/>
    <Banner/>
    <Cursos/>
<<<<<<< HEAD
    <Footer/>
=======
>>>>>>> 88d8a79e4a6dfb6634313d874ce175e26920d0a3
  </StrictMode>,
)
