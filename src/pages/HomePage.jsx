import styled from "styled-components";
import Gallery from "../components/Gallery";
import Section from "../components/Section";



const ConteinerPrincipal = styled.header`
    display:flex;
    flex-direction:column;
    width:1440px;
    height:2300px;
`
const HomeConteiner = styled.header`
    display:flex;
    width:1440px;
    height:681px;
    flex-direction: column;
    justify-content:flex-start;
    align-items:center;
    
    && div{
        display:flex;
        width: 1440px;
        height: 681px;
        flex-direction: column;
        justify-content:center;
        align-items:center;        
    };
    &&
    h2{
        display:flex;
        flex-wrap:wrap;
        justify-content:center;
        height: 132px;
        width: 361px;
        font-size: xxx-large;
    };
    && h4{
        display: flex;
        flex-wrap: wrap;
        width: 280px;
        height: 24px;
        position: relative;
        top: 230px;
        left: 182px;
        color: #F6AA1C;
    };
`
const Galeria2Conteiner = styled.header`
    display:flex;
    flex-wrap:wrap;
    width: 1440px;
    height:400px;
    margin-top: 10px;
    margin-bottom: 10px;
    background-color:aqua;
 `
 const ItemGaleria1 = styled.li`
    display:flex;
    flex-direction: column;
    flex-wrap: wrap;
    &&
    p{
        display:flex;
        width: 350px;
        height: 50px;
        text-align: justify;
        position: relative;
        top: -40px;  
    };
    &&
    button{
    display: flex;
    width: 220px;
    height: 48px;
    justify-content: center;
    align-items: center;
    font-size:16px;
    font-weight:bold;
    border-radius: 4px;
    background: #C92071;
    position: relative;
    top: -36px;
    right: 66px;
    };
    &&
    li{
        display:flex;
        width: 1440px;
        height: 681px;
    };
    &&
    img{
    display: flex;
    position: relative;
    top: 11px;
    right: 261px;
    }   
 `


const HomePage = () => {

    const Galeria =[
        {title:'Consequat culpa exercitation mollit nisi excepteur do do tempor laboris eiusmod irure consectetur.' ,
        text:'Ver Ofertas',
        imagem:'./src/assets/tenis.png'},
    ];
    const Galeria2 =[
        {title:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip' ,
        text:'Ver Ofertas',
        imagem:'./public/jordanAir.png'},
    ];

    return (
      <ConteinerPrincipal>
          <HomeConteiner>
            <ItemGaleria1>
            <h4>Melhores ofertas personalizadas</h4>
              <Gallery
               title="Queima de stoque Nike 🔥" 
              images={Galeria}/>
            </ItemGaleria1>
          </HomeConteiner>
          
          <Section/>

          <Galeria2Conteiner>
              <h4>Oferta especial</h4>
          <div>
              <Gallery title="Air Jordan edição de colecionador" 
              images={Galeria2}/>
          </div> 
          </Galeria2Conteiner>
      </ConteinerPrincipal>    
      );
}
 
export default HomePage;