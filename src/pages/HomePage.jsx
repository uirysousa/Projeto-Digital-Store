import styled from "styled-components";
import nike from "../assets/nike.png";

const Content = styled.div`
  display: flex;
  max-width: 1340px;
  width: 100%;
  padding: 80px 0;
  justify-content: space-between;
`;

const ProductImage = styled.img`
  width: 600px;
  transform: rotate(-30deg); 
  margin-left: 0px;
  margin-top: -200px;
`;

const HomeContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 681px;
  background-color: #f5f5f5;
`;

const TextSection = styled.div`
  display: flex;
  flex-direction: column;

  & p {
    font-size: 20px;
    margin-top: 20px;
  }
  & h1 {
    font-size: 60px;
    font-weight: 700;
  }
`;

const TextHighlight = styled.span`
  color: #d82a99;

`;

const OfferButton = styled.button`
  background-color: #c2185b;
  color: white;
  border: none;
  padding: 15px 30px;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 30px;
  align-self: flex-start;
  
`;
const HomePage = () => {
  return ( 
    <HomeContainer>
      <Content>
        <TextSection>
          <TextHighlight>Melhores Ofertas personalizadas</TextHighlight>

          <h1>Queima de stoque Nike 🔥</h1>

          <p>Consequat culpa exercitation mollit nisi excepteur do do tempor laboris eiusmod irure consectetur.</p>

          <OfferButton>Compre Agora</OfferButton>
        </TextSection>
        <ProductImage src={nike}/>

        
      
      </Content>

    </HomeContainer>

   );
}
 
export default HomePage;