import Card from '../Card-curso/Card'
import './Cursos.css'

const Cursos = () => {

    const info = [
        {
            imagem: "https://boxingjunkie.usatoday.com/wp-content/uploads/sites/6/2022/10/anderson-silva-training-october-2022-62-e1666717743101.gif?w=997&h=600&crop=1",
            promocao: "Lute com",
            pessoa: "Anderson Silva",
            preco: "579,99"
        },
        {
            imagem: "https://atlantablackstar.com/wp-content/uploads/2022/02/GettyImages-1292326780-600x400.jpg",
            promocao: "Treine com",
            pessoa: "Kyrie Irving",
            preco: "699,99"
        },
        {
            imagem: "https://lncimg.lance.com.br/cdn-cgi/image/width=3840,quality=75,format=webp/uploads/2023/08/Flamengo-Arrascaeta-scaled-aspect-ratio-512-320-1.jpg",
            promocao: "Jogue como o",
            pessoa: "Arrascaeta",
            preco: "499,99"
        }
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