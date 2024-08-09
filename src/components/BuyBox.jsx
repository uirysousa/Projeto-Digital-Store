import React from 'react';
import styled from 'styled-components';

const BuyBoxContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const ProductName = styled.h1`
  font-size: 32px;
  color: darkgray;
`;

const ProductReference = styled.span`
  font-size: 12px;
  color: darkgray;
`;

const StarsContainer = styled.div`
  display: flex;
  align-items: center;
  font-size: 14px;
  color: lightgray;
`;

const Star = styled.div`
  background: url('/src/assets/star-icon.svg') no-repeat center center;
  background-size: contain;
  width: 14px;
  height: 14px;
  margin-left: 5px;
`;

const Price = styled.div`
  font-size: ${props => (props.discounted ? '16px' : '32px')};
  color: ${props => (props.discounted ? 'lightgray' : 'darkgray')};
  text-decoration: ${props => (props.discounted ? 'line-through' : 'none')};
`;

const DiscountedPrice = styled.div`
  font-size: 32px;
  color: darkgray;
`;

const ProductDescription = styled.p`
  font-size: 14px;
  color: darkgray;
  width: 440px;
  height: 66px;
`;

const SectionTitle = styled.h4`
  font-size: 18px;
  color: darkgray;
  margin-top: 20px;
  margin-bottom: 10px;
`;

const SectionTitle2 = styled.h4`
  font-size: 18px;
  color: darkgray;
  margin-top: -10px;
  margin-bottom: 10px;
`;

const BuyButton = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  color: white;
  background-color: var(--warning-color);
  border: none;
  cursor: pointer;
  margin-top: 20px;
`;

const BuyBox = ({ name, reference, stars, rating, price, priceDiscount, description, children }) => {
  return (
    <BuyBoxContainer>
      <ProductName>{name}</ProductName>
      <ProductReference>{reference}</ProductReference>
      
      <StarsContainer>
        <span>{stars}</span>
        <Star />
        <span>({rating})</span>
      </StarsContainer>

      <div>
        <Price discounted={!!priceDiscount}>{price}</Price>
        {priceDiscount && <DiscountedPrice>{priceDiscount}</DiscountedPrice>}
      </div>

      <SectionTitle>Descrição</SectionTitle>
      <ProductDescription>{description}</ProductDescription>

      <SectionTitle2>Tamanhos</SectionTitle2>
      {children}
      
      <BuyButton>Comprar</BuyButton>
    </BuyBoxContainer>
  );
};

export default BuyBox;
