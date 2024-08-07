import styled from "styled-components";
import Gallery from "../components/Gallery";
import Section from "../components/Section";

const HomeConteiner = styled.header`
    display:flex;
    background-color:#F5F5F5;
    width:1440px;
    height:681px;
    justify-content:center;
    align-items:center;
    
    && div{
        display:flex;
        width:733.51px;
        height:431.61px;
    }
    && h4{
        display:flex;
        background-color:blue;
    };

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
      <>
          <HomeConteiner>
              <h4>Melhores ofertas personalizadas</h4>
          <div>
              <Gallery title="Queima de stoque Nike 🔥" 
              images={Galeria}/>
          </div>
          </HomeConteiner>
          
          <Section/>

          <HomeConteiner>
              <h4>Oferta especial</h4>
          <div>
              <Gallery title="Air Jordan edição de colecionador" 
              images={Galeria2}/>
          </div> 
          </HomeConteiner>
      </>    
      );
}
 
export default HomePage;