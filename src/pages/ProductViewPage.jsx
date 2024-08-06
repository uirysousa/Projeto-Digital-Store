import React from 'react';
import styled from 'styled-components';
import Tenis from '../assets/tenis.png';



const ProductViewPageContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 20px auto;
  max-width: 1920px;
  height: 580px;
  padding: 20px;
`;

const ProductImage = styled.div`
  flex: 1;
  padding: 20px;
  img {
    width: 100%;
    height: auto;
  }
`;

const ProductInfo = styled.div`
  flex: 1;
  padding: 20px;
  margin-right: 200px;
  .price {
    color: #f00;
    font-size: 24px;
    text-decoration: line-through;
  }
  .discounted-price {
    font-size: 32px;
    color: #000;
  }
  .size-selector {
    display: flex;
    gap: 10px;
  }
  .color-selector {
    display: flex;
    gap: 10px;
  }
`;
const ProductViewPage = () => {
  return (
    <ProductViewPageContainer>
      <ProductImage>
        <img src={Tenis} alt="Product" />
      </ProductImage>
      <ProductInfo>
      <h1>
        Tênis Nike Revolution 6<br />
        Next Nature Masculino
      </h1>
        <p>Descrição do produto: Lorem ipsum dolor sit amet...</p>
        <div className="price">R$ 300,00</div>
        <div className="discounted-price">R$ 219,90</div>
        <div className="size-selector">
          <button>38</button>
          <button>39</button>
          <button>41</button>
          <button>42</button>
          <button>43</button>
          <button>44</button>
         
        </div>
        <div className="color-selector">
         
          <button style={{ backgroundColor: '#000' }} />
          <button style={{ backgroundColor: '#fff' }} />
          
        </div>
        <button>Comprar</button>
      </ProductInfo>
    </ProductViewPageContainer>
  );
};


export default ProductViewPage;