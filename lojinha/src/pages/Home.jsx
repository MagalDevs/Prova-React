import Banner from '../components/Banner-blackfriday/Banner'
import Cursos from '../components/Cursos/Cursos'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import Lancamentos from '../components/Lancamentos/Lancamentos'

const Home = () => {
  return (
    <>
      <Header/>
      <Banner/>
      <Lancamentos/>
      <Cursos/>
      <Footer/>
    </>
  )
}

export default Home
