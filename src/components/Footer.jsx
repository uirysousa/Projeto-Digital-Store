import 'primeicons/primeicons.css';
import styled from "styled-components";
import { FooterLogo } from './Logo';
import Informations from './Information';


const FooterContainer = styled.header`
    background-color:#1F1F1F;
    width:100%;
    height:370px;
    color:white;
    & div{
        display:flex;
        justify-content: flex-start;
        gap: 50px;
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
        text-align: justify;
        width: 307px;
        height: 78px;
        padding: 58px;
        position: relative;
        top: 50px;
    }

    & .autorais{
        display:flex;
        justify-content:center;
        width: 1440px;
        position: relative;
        top: -17px;
    }
    & hr{
        position: relative;
        top: 45px;
    };
    & img{
        display: flex;
        position: relative;
        top: 100px;
        right: -55px;
    };

`;  
const Icones = styled.header`
    display:flex;
    width:124px;
    height:20px;
    gap:20px;
    position:relative;
    top:100px;
    right:400px;
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
                <Icones>
                    <img src="./src/assets/facebook.svg" alt="logo Facebook" />
                    <img src="./src/assets/instagram.svg" alt="logo Instagram" />
                    <img src="./src/assets/twitter.svg" alt="logo Twitter" />
                </Icones>
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