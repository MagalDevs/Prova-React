import './faixaproduto.css'
import { FaBasketballBall } from "react-icons/fa";
import { IoFootballSharp } from "react-icons/io5";
import { MdOutlineSportsTennis } from "react-icons/md";
import { FaSwimmer } from "react-icons/fa";
import CardProdutos from '../Card-produtos/Card-Produtos';

const faixaproduto = () => {

  const basquete = [
    {
      img: "https://imgcentauro-a.akamaihd.net/1366x1366/96542015.jpg",
      nome: "Bola de Basquete Wilson NBA DRV",
      preco:'110,99',
      avaliacao: 4
    },
    {
      img: "https://imgcentauro-a.akamaihd.net/768x768/96645519.jpg",
      nome: "Bola de Basquete Spalding Graffiti",
      preco:'120,00',
      avaliacao: 5
    },
    {
      img: "https://imgcentauro-a.akamaihd.net/1366x1366/M103O13Q.jpg",
      nome: "Tênis Under Armour Jet 21 - Masculino",
      preco:'239,99',
      avaliacao: 4
    },
    {
      img: "https://imgcentauro-a.akamaihd.net/768x768/M161P8D9A1.jpg",
      nome: "Tênis 361º Ag III Pro Low - Masculino",
      preco:'699,00',
      avaliacao: 5
    },
    {
      img: "https://imgnike-a.akamaihd.net/1920x1920/0231590VA3.jpg",
      nome: "Regata Nike Los Angeles Lakers 2022/23 Masculina",
      preco:'399,99',
      avaliacao: 5
    },
    {
      img: "https://imgnike-a.akamaihd.net/1920x1920/028786IDA2.jpg",
      nome: "Camiseta NBA Ja Morant Select Series Masculina",
      preco:'189,99',
      avaliacao: 5
    },
    {
      img: "https://decathlonpro.vtexassets.com/arquivos/ids/8531158-628-628/tabela-basquete-b1001.jpg?v=637780203500430000",
      nome: "Tabela De Basquete B100 Tarmak",
      preco:'1.200,00',
      avaliacao: 4
    },
    {
      img: "https://imgcentauro-a.akamaihd.net/768x768/990945QF.jpg",
      nome: "Tênis Nike Giannis Immortality 4 Masculino",
      preco:'599,99',
      avaliacao: 5
    },
    {
      img: "https://m.media-amazon.com/images/I/81WqjoNP6DL.__AC_SX300_SY300_QL70_ML2_.jpg",
      nome: "BOLA BASQUETE NBA DRV PRO 7",
      preco:'170,99',
      avaliacao: 4
    },
    {
      img: "https://flamengo.vteximg.com.br/arquivos/ids/170624-473-473/JJ0663_FR_Torso_eCom-3-removebg-preview.png?v=638597858427800000",
      nome: "Regata Flamengo Basquete 2 Adidas 24/25",
      preco:'289,99',
      avaliacao: 5
    },
  ]

  const futebol = [
    {
      img: "https://decathlonstore.vtexassets.com/unsafe/1256x1256/center/middle/https%3A%2F%2Fdecathlonpro.vtexassets.com%2Farquivos%2Fids%2F127961399-628-628%2Fnew-f100-size-5-white-yellow-5-branco-41.jpg%3Fv%3D638488786717870000",
      nome: "Bola de Futebol Kipsta F500",
      preco: "100,90",
      avaliacao: 4
    },
    {
      img: "https://sportbras.vtexassets.com/arquivos/ids/1176627/CHUTEIRA-DE-CAMPO-ADIDAS-PREDATOR-ACCURACY-4-0.jpg?v=638622837672500000?width=800",
      nome: "Chuteira Campo Adidas Predator Accuracy",
      preco: "179,99",
      avaliacao: 5
    },
    {
      img: "https://images.tcdn.com.br/img/img_prod/1155506/caneleira_nike_charge_2_0_1023_2_6b27909bd48cb4f78d6a6c9c4cd83626.jpg",
      nome: "Par de Caneleiras Nike Charge 2.0",
      preco: "69,99",
      avaliacao: 4
    },
    {
      img: "https://decathlonstore.vtexassets.com/unsafe/1256x1256/center/middle/https%3A%2F%2Fdecathlonpro.vtexassets.com%2Farquivos%2Fids%2F162668569-628-628%2F17277990421575.jpg%3Fv%3D638646061216430000",
      nome: "Chuteira Society Nike Mercurial Vapor 15 Club",
      preco: "159,99",
      avaliacao: 4
    },
    {
      img: "https://m.media-amazon.com/images/I/61sqmNJs2vL._AC_SX569_.jpg",
      nome: "Conjunto de Treinamento de Futebol",
      preco: "149,99",
      avaliacao: 5
    },
    {
      img: "https://imgcentauro-a.akamaihd.net/768x768/9857485G.jpg",
      nome: "Luvas de Goleiro Nike GK Match",
      preco: "129,99",
      avaliacao: 4
    },
    {
      img: "https://decathlonstore.vtexassets.com/unsafe/1256x1256/center/middle/https%3A%2F%2Fdecathlonpro.vtexassets.com%2Farquivos%2Fids%2F19927391-628-628%2Fball-futsal-500-no-size2.jpg%3Fv%3D637977471964100000",
      nome: "Bola de Futsal Kipsta FS500",
      preco: "109,90",
      avaliacao: 5
    },
    {
      img: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/b610dac406444637ac6eafa800e51a22_9366/Chuteira_X_Speedportal.3_Futsal_Ouro_GZ5069_01_standard_hover.jpg",
      nome: "Chuteira Futsal Adidas X Speedportal",
      preco: "299,99",
      avaliacao: 4
    },
    {
      img: "https://flamengo.vteximg.com.br/arquivos/ids/169036-473-473/IP8199_1_APPAREL_Photography_Front-View_white.jpg?v=638416186439730000",
      nome: "Manto Flamengo Jogo 1 Adidas 2024",
      preco: "299,99",
      avaliacao: 5
    },
    {
      img: "https://lojapalmeiras.vtexassets.com/arquivos/ids/187826-800-auto?v=638657305729770000&width=800&height=auto&aspect=true",
      nome: "Camisa Palmeiras Puma I 24/25 - Jogador",
      preco: "429,99",
      avaliacao: 5
    }
  ];  

  const tenis = [
    {
      img: "https://static.prospin.com.br/media/catalog/product/cache/0e3f1fa1e1f5782c73be0e8cb4ab3f9d/w/r/wrt7417-raquete-de-tenis-wilson-pro-staff-rf97-autograph-2018-preta-e-branca.jpg",
      nome: "Raquete Wilson Pro Staff RF97 Autograph",
      preco: "1.499,99",
      avaliacao: 5
    },
    {
      img: "https://static.prospin.com.br/media/catalog/product/cache/0e3f1fa1e1f5782c73be0e8cb4ab3f9d/1/0/1041a408-103-tenis-asics-gel-dedicate-8-all-court-masc-branco-e-azul.jpg",
      nome: "Tênis Asics Gel Dedicate 8",
      preco: "699,99",
      avaliacao: 4
    },
    {
      img: "https://static.prospin.com.br/media/catalog/product/cache/0e3f1fa1e1f5782c73be0e8cb4ab3f9d/5/7/575953-pack-bola-de-tenis-head-master-pack-com-6tubos.jpg",
      nome: "Bola de Tênis Head Master",
      preco: "79,99",
      avaliacao: 4
    },
    {
      img: "https://static.prospin.com.br/media/catalog/product/cache/6e59e4946046b080cb91aa3230980e44/1/0/101516-100-raquete-de-tenis-babolat-pure-drive-wimbledon-300g-branca-e-verde.jpg",
      nome: "Raquete Babolat Pure Drive",
      preco: "1.299,99",
      avaliacao: 4
    },
    {
      img: "https://imagesa1.lacoste.com/dw/image/v2/BCWL_PRD/on/demandware.static/-/Sites-master/default/dwa5abd04a/DH2614_I6W_20.jpg?imwidth=615&impolicy=pctp",
      nome: "Camisa Polo Regular Fit Lacoste Tennis x Novak Djokovic",
      preco: "299,99",
      avaliacao: 5
    },
    {
      img: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQqIZ0VUTVs7_hcs5ZBXdbOJrO8ReMyjgU5ImZPyPi6jy026ZlK_ymh5uYEs92aa7s7J7OvqNLh3_GZWOwkFVUYgBmKgcRCWf5gTmj4zes&usqp=CAE",
      nome: "Camiseta de tênis respirável",
      preco: "49,99",
      avaliacao: 4
    },
    {
      img: "https://http2.mlstatic.com/D_NQ_NP_776963-MLB76171424149_052024-O.webp",
      nome: "Kit Com 10 Bolinhas Bola De Beach Tennis Shark Premium Pro",
      preco: "89,99",
      avaliacao: 5
    }
  ];

  const natacao = [
    {
      img: "https://lojaspeedo.vtexassets.com/arquivos/ids/196702/509218_180431_1-OCULOS-HYDROVISION-MR.jpg?v=637369117615000000",
      nome: "Óculos de natação espelhado Hydrovision Mr",
      preco: "199,99",
      avaliacao: 5
    },
    {
      img: "https://m.media-amazon.com/images/I/51HX3pc-PTL.__AC_SX300_SY300_QL70_ML2_.jpg",
      nome: "Touca de Natação Arena Silicone",
      preco: "39,99",
      avaliacao: 4
    },
    {
      img: "https://www.tradeinn.com/f/13792/137927459/speedo-oculos-de-natacao-espelhados-fastskin-hyper-elite.webp",
      nome: "Speedo Óculos de natação Fastskin",
      preco: "249,99",
      avaliacao: 5
    },
    {
      img: "https://m.media-amazon.com/images/I/61x3qweX+DL._AC_SX569_.jpg",
      nome: "Nadadeira Speedo Power Fin",
      preco: "179,99",
      avaliacao: 4
    },
    {
      img: "https://images.tcdn.com.br/img/img_prod/1098100/roupa_neoprene_natacao_smootskin_longa_emborrachada_2_2_competition_ponta_estoque_2015_1_ebb1e8b6bcb0ae0220f822142509d50c.jpg",
      nome: "Roupa Neoprene Natação Smootskin Longa",
      preco: "399,99",
      avaliacao: 5
    },
    {
      img: "https://imgcentauro-a.akamaihd.net/768x768/92319331.jpg",
      nome: "Bermuda de Natação Masculina",
      preco: "109,99",
      avaliacao: 4
    },
    {
      img: "https://http2.mlstatic.com/D_NQ_NP_2X_965106-MLB78362720520_082024-F.webp",
      nome: "Sunga adidas Flamengo Masculina",
      preco: "129,99",
      avaliacao: 5
    },
    {
      img: "https://lojaspeedo.vtexassets.com/arquivos/ids/209696/561646_080_1-FLUTUADOR-SWIM.jpg?v=638012808899030000",
      nome: "Flutuador para treino de natação",
      preco: "49,99",
      avaliacao: 4
    },
    {
      img: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQD4rajgASa8IXVwfAhW4AUtrLouHYrtT6xtDdjt0QdJJ-MGQvOhUEQ978C7vMRo_8OtM5rcGnLgMU-aCyt9817NYglmt_DjXhTd0n_BgWFyBwBWD9WcxAk&usqp=CAE",
      nome: "Kit Sungão Xtra Life, Óculos e Touca",
      preco: "149,99",
      avaliacao: 5
    }
];


  return (
    <div className='todosprodutos'>
      <div className='produtos'>
          <div className="enunciado">
            <h1>Basquetebol</h1>
            <FaBasketballBall />
          </div>
          <div className='cards'>
            {basquete.map((produto) => <CardProdutos key={produto.nome} img={produto.img} nome={produto.nome} preco={produto.preco} avaliacao={produto.avaliacao}/>)}
          </div>
      </div>
      <div className='produtos'>
          <div className="enunciado">
            <h1>Futebol</h1>
            <IoFootballSharp />
          </div>
          <div className='cards'>
            {futebol.map((produto) => <CardProdutos key={produto.nome} img={produto.img} nome={produto.nome} preco={produto.preco} avaliacao={produto.avaliacao}/>)}
          </div>
      </div>
      <div className='produtos'>
          <div className="enunciado">
            <h1>Tênis</h1>
            <MdOutlineSportsTennis />
          </div> 
          <div className='cards'>
            {tenis.map((produto) => <CardProdutos key={produto.nome} img={produto.img} nome={produto.nome} preco={produto.preco} avaliacao={produto.avaliacao}/>)}
          </div>
      </div>
      <div className='produtos'>
          <div className="enunciado">
            <h1>Natação</h1>
            <FaSwimmer />
          </div>
          <div className='cards'>
            {natacao.map((produto) => <CardProdutos key={produto.nome} img={produto.img} nome={produto.nome} preco={produto.preco} avaliacao={produto.avaliacao}/>)}
          </div>
      </div>
    </div>
  )
}

export default faixaproduto