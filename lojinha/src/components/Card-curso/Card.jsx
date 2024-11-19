import './Card.css'
import { GoArrowRight } from "react-icons/go";

const Card = ({preco,promocao, pessoa, imagem}) => {
  return (
    <div className="card">
        <div className="card-info">
          <img src={imagem} alt={promocao + pessoa} />
          <h2>{promocao} <span>{pessoa}</span></h2>
          <p>A partir de</p>
          <p className='preco'>R$ {preco}</p>
          <div className="card-link">
            <GoArrowRight className='seta'/>
            <a href="#" className='comprar' onClick={(event) => event.preventDefault()}>Comprar</a>
          </div>
        </div>
    </div>
  )
}

export default Card