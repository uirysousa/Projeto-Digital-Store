import styled from "styled-components";
import Gallery from "../components/Gallery";

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
        {title:'este texto tem que aparecer' ,
        text:'Consequat culpa exercitation mollit nisi excepteur do do tempor laboris eiusmod irure consectetur.',
        imagem:'./src/assets/tenis.png'},
    ];

    return (
        <HomeConteiner>
            <h4>Melhores ofertas personalizadas</h4>
        <div>
            <Gallery title="Queima de stoque Nike 🔥" 
            images={Galeria}/>
        </div>
        </HomeConteiner>
      );
}
 
export default HomePage;