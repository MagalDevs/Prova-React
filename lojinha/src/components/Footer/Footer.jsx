import './Footer.css';
import { SlSocialInstagram } from "react-icons/sl";
import { SlSocialFacebook } from "react-icons/sl";
import { MdOutlineMail } from "react-icons/md";
import { BsTelephone } from "react-icons/bs";

const Footer = () => {
  return (
    <footer>
      <div className='nossas-redes'>
        <h1>Nossas redes</h1>
      </div>
      <div className='redes'>
        <div className='rede-item'>
          <SlSocialInstagram className='icone' />
          <span>@indaiasports</span>
        </div>
        <div className='rede-item'>
          <SlSocialFacebook className='icone' />
          <span>@indaiasports</span>
        </div>
        <div className='rede-item'>
          <MdOutlineMail className='icone' />
          <span>indaiasportscontato@gmail.com</span>
        </div>
        <div className='rede-item'>
          <BsTelephone className='icone' />
          <span>1940028922</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
