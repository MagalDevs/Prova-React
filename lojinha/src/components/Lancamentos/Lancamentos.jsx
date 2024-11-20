import './Lancamentos.css'

const Lancamentos = () => {
  return (
    <div className='imagens-titulo'>
      <h1 className='titulolanc'>Lançamentos</h1>
      <h2 className='subtitulo'> Confira as novidades do mercado!</h2>
        <div className='chuteira'>
          <img src="./imgs/tenis.png" alt="" />
          <button className='btn-interesse'>Tenho Interesse!</button>
        </div>
        <div className='chuteira'>
          <img src="./imgs/musculacao.png" alt="" />
          <button className='btn-interesse'>Tenho Interesse!</button>
        </div>
        <div className='chuteira'>
          <img src="./imgs/basquete.png" alt="" />
          <button className='btn-interesse'>Tenho Interesse!</button>
        </div>
        <div className='chuteira'>
          <img src="./imgs/natacao.png" alt="" />
          <button className='btn-interesse'>Tenho Interesse!</button>
        </div>
    </div>
  )
}

export default Lancamentos
