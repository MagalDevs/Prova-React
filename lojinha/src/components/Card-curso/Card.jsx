import './Card.css'

const Card = ({preco,promocao, pessoa}) => {
  return (
    <div>
        <img src="" alt="" />
        <h2>{promocao} <span>{pessoa}</span></h2>
        <p>A partir de</p>
        <p>R$ {preco}</p>
    </div>
  )
}

export default Card