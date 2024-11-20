import './Lancamentos.css'

const Lancamentos = () => {
  return (
    <div className='imagens-titulo'>
      <h1 className='titulolanc'>Lançamentos</h1>
      <h2 className='subtitulo'> Confira as novidades do mercado!</h2>
        <div className='chuteira'>
          <img src="./imgs/tenis.jpg" alt="" />
        </div>
        <div className='chuteira'>
          <img src="./imgs/musculacao.jpg" alt="" />
        </div>
        <div className='chuteira'>
          <img src="./imgs/camisas.jpg" alt="" />
        </div>
        <div className='chuteira'>
          <img src="./imgs/natacao.jpg" alt="" />
        </div>
    </div>
  )
}

export default Lancamentos