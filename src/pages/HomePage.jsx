import React from 'react';
import styled from 'styled-components';
import Gallery from '../components/Gallery';
import Section from '../components/Section';
import ProductListing from '../components/ProductListing';
import sapato from '../../public/sapato.png';
import { Link } from 'react-router-dom';

// Styled components
const ConteinerPrincipal = styled.header`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
`;
const HomeConteiner = styled.header`
    display: flex;
    background-color: #F5F5F5;
    width: 100%;
    height: 750px;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;

    && div {
        display: flex;
        width: 1440px;
        height: 681px;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;        
    }
    && h2 {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        height: 132px;
        width: 361px;
        font-size: xxx-large;
    }
    && h4 {
        display: flex;
        flex-wrap: wrap;
        width: 280px;
        height: 24px;
        position: relative;
        top: 200px;
        left: -40px;
        color: #F6AA1C;
    }
      &&.dQLgtq.dQLgtq div{
        display:flex;
    }
`;
const ItemGaleria1 = styled.li`
    display: flex;
    justify-content:center;
    align-items:center;
    flex-direction: column;
    flex-wrap: wrap;
    && div{
        display:flex;
        justify-content:center;  
    }

    && p {
        display: flex;
        width: 350px;
        height: 50px;
        text-align: justify;
        position: relative;
        top: -40px;  
    }
    && button {
        display: flex;
        width: 150px;
        height: 48px;
        justify-content: center;
        align-items: center;
        font-size: 16px;
        font-weight: bold;
        border-radius: 4px;
        background: #C92071;
        position: relative;
        top: -36px;
        right: 66px;
    }

    && li {
        display: flex;
        flex-direction:row;
        width: 1440px;
        height: 681px;
        list-style:none;
    }
    && img {
        display:flex;
        width:800px;
        height:500px;
        position:relative;
        top:-620px;
        left:800px;
        justify-content:center;
        align-items:center;
    }   
`;
const Galeria2Conteiner = styled.header`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    align-items: center;
    width: 100%;
    height: 553px;
    margin-top: 10px;
    margin-bottom: 10px;
    background-color: #F9F8FE;
    flex-direction: row-reverse;
    gap: 80px;

    && img {
        display: flex;
        width: 573px;
        height: 330px;
    }
    && h2 {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        height: 132px;
        width: 361px;
        font-size: xxx-large;
        margin-bottom: 53px;
    }
    && p {
        display: flex;
        width: 350px;
        height: 50px;
        text-align: justify;
        margin-bottom: 40px;
    }
    && button {
        display: flex;
        width: 220px;
        height: 48px;
        justify-content: center;
        align-items: center;
        font-size: 16px;
        font-weight: bold;
        border-radius: 4px;
        background: #C92071;
        & a{
            color:black;
            text-decoration:none;
        }
    }
    && li {
        display: flex;
        width: 50%;
        height: 681px;
        flex-direction: row-reverse;
        justify-content: center;
        align-items: center;
        gap: 70px;
    }
    && h4 {
        display: flex;
        flex-wrap: wrap;
        width: 280px;
        height: 2px;
        color: #C92071;
    }
    && div{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
`;
const SectionProdutos = styled.header`

    display: grid;
    text-align: left;
    color:#474747;
    grid-template-columns: repeat(1, 1fr);
    gap: 20px;
    margin: 80px;
    width:100%;
    height:700px;
`;



const relatedProducts = [
    {
      name: "K-Swiss V8 - Masculino",
      image: `${sapato}`,
      price: 200,
      priceDiscount: 149.9
    },
    {
      name: "K-Swiss V8 - Masculino",
      image: `${sapato}`,
      price: 200,
      priceDiscount: 149.9
    },
    {
      name: "K-Swiss V8 - Masculino",
      image: `${sapato}`,
      price: 200,
      priceDiscount: 149.9
    },
    {
      name: "K-Swiss V8 - Masculino",
      image: `${sapato}`,
      price: 200,
      priceDiscount: 149.9
    },
    {
      name: "K-Swiss V8 - Masculino",
      image: `${sapato}`,
      price: 200,
      priceDiscount: 149.9
    },
    {
      name: "K-Swiss V8 - Masculino",
      image: `${sapato}`,
      price: 200,
      priceDiscount: 149.9
    },
    {
      name: "K-Swiss V8 - Masculino",
      image: `${sapato}`,
      price: 200,
      priceDiscount: 149.9
    },
    {
      name: "K-Swiss V8 - Masculino",
      image: `${sapato}`,
      price: 200,
      priceDiscount: 149.9
    }

];

const HomePage = () => {

    const Galeria = [
        { title: 'Queima de estoque Nike 🔥', paragraph:'Consequat culpa exercitation mollit nisi excepteur do do tempor laboris eiusmod irure consectetur.', text: 'Ver Ofertas', src: './src/assets/tenis.png' }
    ];


    return (
        <ConteinerPrincipal>
            <HomeConteiner>
                <ItemGaleria1>
                    <h4>Melhores ofertas personalizadas</h4>
                    <Gallery  images={Galeria} />
                </ItemGaleria1>
            </HomeConteiner>
            
            <Section />

            <SectionProdutos >

                <h3>Produtos em alta</h3>

                <ProductListing products={relatedProducts} />
            </SectionProdutos>

            <Galeria2Conteiner>
                    <div>
                        <h4>Oferta especial</h4>
                        <h2>Air Jordan edição de colecionador </h2> 
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip</p>
                        <button><Link to={"/ProductViewPage"}>Ver Ofertas</Link></button>
                    </div>
                    <img src='./public/jordanAir.png'/>
            </Galeria2Conteiner>
        </ConteinerPrincipal>
    );
}

export default HomePage;
