import React from 'react';
import styled from 'styled-components';

const ProductList = styled.ul`
    list-style: none;
    padding: 0;
    display: flex;
    gap: 20px;
    flex-wrap: wrap;
`;

const ProductItem = styled.li`
    border: 1px solid #ddd;
    border-radius: 8px;
    padding: 10px;
    width: 200px;
    text-align: center;
    background-color: #fff;
`;

const ProductImage = styled.img`
    width: 100%;
    height: auto;
    border-bottom: 1px solid #ddd;
    margin-bottom: 10px;
`;

const ProductName = styled.h3`
    font-size: 16px;
    margin: 0;
`;

const ProductPrice = styled.p`
    font-size: 18px;
    margin: 0;
    color: #C92071;
    text-decoration: ${props => (props.discount ? 'line-through' : 'none')};
`;

const ProductDiscount = styled.p`
    font-size: 18px;
    margin: 0;
    color: #C92071;
`;

const ProductListing = ({ products }) => (
    <ProductList>
        {products.map((product, index) => (
            <ProductItem key={index}>
                <ProductImage src={product.image} alt={product.name} />
                <ProductName>{product.name}</ProductName>
                <ProductPrice discount={product.priceDiscount}>
                    {product.priceDiscount ? `R$ ${product.price}` : `R$ ${product.price}`}
                </ProductPrice>
                {product.priceDiscount && <ProductDiscount>R$ {product.priceDiscount}</ProductDiscount>}
            </ProductItem>
        ))}
    </ProductList>
);

export default ProductListing;
