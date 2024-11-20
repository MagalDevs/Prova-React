import Footer from "../components/Footer/Footer"
import Header from "../components/Header/Header"
import "./css/global.css"
import "./css/sobre.css"

const Sobre = () => {
  return (
    <>
      <Header/>
        <h1>Sobre Nós</h1>
        <div className="texto-sobre">
          <p>A IndaiaSports é muito mais do que uma loja de artigos esportivos. Ela é o resultado de um sonho, de uma amizade e de uma paixão inabalável pelo esporte. Tudo começou em Indaiatuba, em meio a conversas descontraídas entre Gabriel Ribeiro e Daniel Galvão, dois amigos que sempre acreditaram que o esporte é uma ponte que conecta pessoas, promove saúde e transforma vidas.</p>
          <br />
          <p>Desde jovens, Gabriel e Daniel viviam envolvidos no universo esportivo. Eles sentiam na pele a dificuldade de encontrar produtos de qualidade, que realmente atendiam às necessidades de quem pratica esportes com dedicação e amor. Foi nesse contexto que surgiu a ideia de criar algo novo, algo especial: um e-commerce de artigos esportivos que fosse mais do que um negócio, mas um ponto de encontro para quem ama o esporte em todas as suas formas.</p>
          <br />
          <h3>O que nos move</h3>
          <p>A IndaiaSports nasceu com a missão de oferecer o melhor para atletas de todos os níveis, sejam amadores ou profissionais, sejam corredores, jogadores, ciclistas ou apaixonados por qualquer modalidade esportiva. Aqui, entendemos que cada cliente tem uma história, um objetivo e uma paixão única, e por isso nos comprometemos a entregar não apenas produtos, mas experiências.</p>
          <br />
          <p>Nosso portfólio é cuidadosamente selecionado para atender às exigências do mercado esportivo. Trabalhamos com marcas reconhecidas pela qualidade e inovação, trazendo roupas, calçados, acessórios e equipamentos que impulsionam o desempenho e oferecem conforto, segurança e estilo. Além disso, nosso e-commerce foi projetado para ser prático e acessível, proporcionando uma experiência de compra intuitiva e confiável.</p>
          <br />
          <h3>Mais do que uma loja</h3>
          <p>Para nós, esporte é vida, é superação, é conexão. Por isso, a IndaiaSports vai além de vender produtos. Queremos inspirar, motivar e fazer parte da jornada de nossos clientes. Acreditamos no poder transformador do esporte e estamos aqui para apoiar cada passo, cada treino e cada conquista.</p>
          <br />
          <p>Seja você um iniciante que está dando os primeiros passos no mundo esportivo ou um atleta experiente em busca de novos desafios, a IndaiaSports é o seu lugar. Juntos, vamos construir histórias de determinação, superação e vitória.</p>
          <br />
          <h3>Nosso compromisso com você</h3>
          <p style={{marginBottom: "3rem"}}>Na IndaiaSports, excelência não é um diferencial, é um padrão. Desde a curadoria de produtos até o atendimento ao cliente, trabalhamos incansavelmente para garantir sua satisfação. Estamos sempre atentos às inovações do mercado esportivo e abertos ao feedback dos nossos clientes para evoluir constantemente.</p>
          <h2>IndaiaSports: movidos pela paixão, comprometidos com o esporte.</h2>
          <br />
          <p style={{textAlign: "center"}}>Venha fazer parte dessa história. Aqui, seu amor pelo esporte encontra o que há de melhor para transformar cada treino em conquista e cada jogo em um momento inesquecível.</p>
        </div>
      <Footer/>
    </>
  )
}

export default Sobre