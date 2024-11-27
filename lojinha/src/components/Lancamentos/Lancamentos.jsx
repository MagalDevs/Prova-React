import { useState } from 'react';
import './Lancamentos.css';

const Lancamentos = () => {
  const [clicado, setClicado] = useState([false, false, false, false]);
  const handleClique = (index) => {
    const novosClicados = [...clicado];
    novosClicados[index] = true;
    setClicado(novosClicados);
    alert('Você deixou seu interesse!');
  };

  return (
    <div className='imagens-titulo'>
      <h1 className='titulolanc'>Lançamentos</h1>
      <h2 className='subtitulo'> Confira as novidades do mercado!</h2>
      <div className='chuteira'>
        <img src="./imgs/tenis.png" alt="" />
        <button
          className={`btn-interesse ${clicado[0] ? 'registrado' : ''}`}
          onClick={() => handleClique(0)}
        >
          {clicado[0] ? 'Interesse Registrado' : 'Tenho Interesse!'}
        </button>
      </div>
      <div className='chuteira'>
        <img src="./imgs/musculacao.png" alt="" />
        <button
          className={`btn-interesse ${clicado[1] ? 'registrado' : ''}`}
          onClick={() => handleClique(1)}
        >
          {clicado[1] ? 'Interesse Registrado' : 'Tenho Interesse!'}
        </button>
      </div>
      <div className='chuteira'>
        <img src="./imgs/basquete.png" alt="" />
        <button
          className={`btn-interesse ${clicado[2] ? 'registrado' : ''}`}
          onClick={() => handleClique(2)}
        >
          {clicado[2] ? 'Interesse Registrado' : 'Tenho Interesse!'}
        </button>
      </div>
      <div className='chuteira'>
        <img src="./imgs/natacao.png" alt="" />
        <button
          className={`btn-interesse ${clicado[3] ? 'registrado' : ''}`}
          onClick={() => handleClique(3)}
        >
          {clicado[3] ? 'Interesse Registrado' : 'Tenho Interesse!'}
        </button>
      </div>
    </div>
  );
}

export default Lancamentos;
