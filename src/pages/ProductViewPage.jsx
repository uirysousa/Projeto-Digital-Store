import React from 'react';
import styled from 'styled-components';
import Gallery from '../components/Gallery';
import BuyBox from '../components/BuyBox';
import ProductOptions from '../components/ProductOptions';
import Section2 from '../components/Section2';
import ProductListing from '../components/ProductListing';

const ProductViewPageContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 20px auto;
  max-width: 1200px;
  padding: 20px;
`;

const Sidebar = styled.div`
  width: 60%;
`;

const Content = styled.div`
  width: 35%;
`;

const BuyButton = styled.button`
  background-color: #f5a623;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 8px 0;
  width: 150px;
  font-size: 16px;
  cursor: pointer;
  margin-top: 20px;
  text-align: center;
`;

const relatedProducts = [
  {
    name: "K-Swiss V8 - Masculino",
    image: "https://url.imagem/do/produto1.png",
    price: 200,
    priceDiscount: 149.9
  },
  {
    name: "K-Swiss V8 - Masculino",
    image: "https://url.imagem/do/produto2.png",
    price: 200,
    priceDiscount: 149.9
  },
  {
    name: "K-Swiss V8 - Masculino",
    image: "https://url.imagem/do/produto3.png",
    price: 200,
    priceDiscount: 149.9
  },
  {
    name: "K-Swiss V8 - Masculino",
    image: "https://url.imagem/do/produto4.png",
    price: 200,
    priceDiscount: 149.9
  }
];

const ProductViewPage = () => {
  const images = [
    { src: '/public/product-image-1.png' },
    { src: '/public/product-image-2.png' },
    { src: '/public/product-image-3.png' },
    { src: '/public/product-image-4.png' },
  ];

  return (
    <>
      <ProductViewPageContainer>
        <Sidebar>
          <Gallery images={images} />
        </Sidebar>
        <Content>
          <BuyBox
            name="Tênis Nike Revolution 6 Next Nature Masculino"
            reference="Casual | Nike | REF:38416711"
            price="R$ 300,00"
            priceDiscount="R$ 219,90"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco."
            rating={4.5}
            reviews={100}
          >
            <ProductOptions
              options={["39", "40", "41", "42", "43"]}
              shape="square"
              type="text"
              radius="4px"
              margin="10px 0"
            />
            <ProductOptions
              options={["#000000", "#ffffff", "#ff1493", "#00ffff"]}
              shape="circle"
              type="color"
              margin="10px 0"
            />
            <BuyButton>Comprar</BuyButton>
          </BuyBox>
        </Content>
      </ProductViewPageContainer>

      <Section2
        title="Produtos Recomendados"
      >
        <ProductListing products={relatedProducts} />
      </Section2>
    </>
  );
};

export default ProductViewPage;
