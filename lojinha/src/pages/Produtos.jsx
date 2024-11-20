import './css/global.css'
import Faixaproduto from '../components/Faixaprodutos/Faixaproduto'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'

const Produtos = () => {
  return (
    <>
      <Header/>
      <h1>Nossos Produtos</h1>
      <Faixaproduto/>
      <Footer/>
    </>
    
  )
}

export default Produtos