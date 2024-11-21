import './Card-Produtos.css'
import { FaStar } from "react-icons/fa6";


const CardProdutos = ({img, nome, preco, avaliacao}) => {
    const numStars = avaliacao; 
  return (
    <div className='container'>
      <img src={img} alt={nome}/>
      <div className="info-produto">
            <h4>{nome}</h4>
            <p>A partir de: </p>
            <p className='preco-card'>R$ {preco}</p>
            <div className="stars">
                {[...Array(numStars)].map(() => <FaStar className='star'/>)}
            </div>
      </div>
    </div>
  )
}

export default CardProdutos
