import Card from '../Card-curso/Card'
import './Cursos.css'

const Cursos = () => {

    const info = [
        {
            imagem: "https://www.tendaatacado.com.br/dicas/wp-content/uploads/2023/11/Interna-TEN-corrida-para-iniciantes-ok.jpg",
            promocao: "Corra com",
            pessoa: "Manoel",
            preco: "100,00"
        },
        {
            imagem: "https://www.tendaatacado.com.br/dicas/wp-content/uploads/2023/11/Interna-TEN-corrida-para-iniciantes-ok.jpg",
            promocao: "Corra com",
            pessoa: "Manoel",
            preco: "100,00"
        },
        {
            imagem: "https://www.tendaatacado.com.br/dicas/wp-content/uploads/2023/11/Interna-TEN-corrida-para-iniciantes-ok.jpg",
            promocao: "Corra com",
            pessoa: "Manoel",
            preco: "100,00"
        },
    ]

  return (
    <div>
        <h1 className='titulo'>Cursos</h1>
        <div className='cursos'>
            {info.map((curso) => (
                <Card key={curso.pessoa} imagem={curso.imagem} promocao={curso.promocao} pessoa={curso.pessoa} preco={curso.preco} className='curso' />
            ))}
        </div>
    </div>
  )
}

export default Cursos