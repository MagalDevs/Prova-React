import './faixaproduto.css'
import { FaBasketballBall } from "react-icons/fa";
import { IoFootballSharp } from "react-icons/io5";
import { MdOutlineSportsTennis } from "react-icons/md";
import { FaSwimmer } from "react-icons/fa";

const faixaproduto = () => {
  return (
    <div className='todosprodutos'>
      <div className='produtos'>
          <h1>Basquetebol</h1>
          <FaBasketballBall />
          
      </div>
      <div className='produtos'>
          <h1>Futebol</h1>
          <IoFootballSharp />
      </div>
      <div className='produtos'>
          <h1>Tênis</h1>
          <MdOutlineSportsTennis />
          
      </div>
      <div className='produtos'>
          <h1>Natação</h1>
          <FaSwimmer />
      </div>
    </div>
  )
}

export default faixaproduto