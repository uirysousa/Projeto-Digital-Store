import 'primeicons/primeicons.css';
import styled from "styled-components";
import { FooterLogo } from './Logo';
import Informations from './Information';


const FooterContainer = styled.header`
    background-color:#1F1F1F;
    width:1440px;
    height:454px;
    color:white;
    & div{
        display:flex;
        justify-content: flex-start;
        gap: 80px;
    }
    &  h2{
        display:flex;
        height:30px;
    }
    & ul{
        display:flex;
        flex-direction:column;
        list-style:none;
        justify-content:center;
        align-items: baseline;
        flex-wrap:wrap;
    } 
    & a{
        display:flex;
        color:white;
        position:relative;
        top: 43px;
        left: -200px; 
    }  
    & p{
        display:flex;
    }

    & .autorais{
        display:flex;
        justify-content:center;
    }
`;  

const Footer = () => {
    const infos = [
        {text:'Sobre Drip Store',link:'/sobre'},
        {text:'Segurança',link:'/segurança'},
        {text:'Wishlist',link:'/Wishlist'},
        {text:'Blog',link:'/Blog'},
        {text:'Trabalhe conosco',link:'/trabalhe'},
        {text:'Meus Pedidos',link:'/meuspedidos'},
    ];
    const infos2 = [
        {text:'Camisetas',link:'/camisetas'},
        {text:'Calças',link:'/calcas'},
        {text:'Bonés',link:'/bones'},
        {text:'Headphones',link:'/headphones'},
        {text:'Tênis',link:'/tenis'},
    ];
    const infos3 = [
        {text:'Av. Santos Dumont, 1510 - 1 andar - Aldeota, Fortaleza - CE, 60150-161',link:'/endereço'},
    ];
    
    return (
        <FooterContainer>
            <FooterLogo/>  
           <div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.
                </p>

                <div>
                    <Informations title="Informação" informations={infos}/>
                </div>

                <div>
                    <Informations title="Categorias" informations={infos2}/>
                </div>

                <div>
                    <Informations title="Contato" informations={infos3}/>
                </div>  

            </div>
            <hr/>
        <div>
            <p className='autorais'>© {new Date().getFullYear()} Digital Store</p>  
        </div>            
        </FooterContainer>
      );
}
 
export default Footer;