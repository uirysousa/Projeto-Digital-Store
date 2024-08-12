import sapato from '../../public/sapato.png';
import ProductListing from '../components/ProductListing';
import React from 'react';
import styled from 'styled-components';


const ConteinerPrincipal = styled.header`
  display: flex;
  margin: 50px;
  height:100%;
  background-color: #F9F8FE;
`
const Filtro = styled.header`
  display: flex;
  justify-content: baseline;
  align-items: baseline;
  flex-direction: column;
  margin:20px;
  & fieldset{
    width:200px;
    margin-top:30px;
    background-color:#FFFFFF;
    border:none;
  }
`
const Container = styled.div`
  width: 308px;
  height: 60px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;
const Label = styled.label`
  font-size: 16px;
  font-weight:bold;
  color: #474747; 
`;

const Select = styled.select`
  width: 200px;
  height: 36px;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 8px;
  font-size: 14px;
  color: #474747; 
  appearance: none; 
`;

const Option = styled.option`
  color: #474747; 
`;

const CheckboxInput = styled.input`
    display: inline-block;
    width: 16px;
    height: 16px;
    border: 1px solid #ccc;
    border-radius: 3px;
    margin-right: 8px;
    background-color: white; 
  &:checked + label::before {
    background-color: #C92071; /* Cor de fundo quando marcado */
  }
`;

const relatedProducts = [

  {
    name: "K-Swiss V8 - Masculino",
    image: `${sapato}`,
    price: 200,
    priceDiscount: 149.9,
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
  },
  {
    name: "K-Swiss V8 - Masculino",
    image: `${sapato}`,
    price: 200,
    priceDiscount: 149.9,
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
  },

];

const ProductListPage = () => {
  

  return (
    <ConteinerPrincipal>

      <Filtro>


        <fieldset>
      <Container>
        <Label>Ordenar por</Label>
        <Select>
          <Option value="menor_preco">Menor preço</Option>
          <Option value="maior_preco">Maior preço</Option>
        </Select>
      </Container>
        <h2>Filtrar por</h2>
          <hr/>
          <h3>Marka</h3>
          <div class="field-checkbox">
          <CheckboxInput type="checkbox" ></CheckboxInput>
            <label> Addidas</label>
          </div>

          <div class="field-checkbox">
          <CheckboxInput type="checkbox" ></CheckboxInput>
            <label> Canlenciaga</label>
          </div>

          <div class="field-checkbox">
          <CheckboxInput type="checkbox" ></CheckboxInput>
            <label >K-Swiss</label>
          </div>
          <div class="field-checkbox">
          <CheckboxInput type="checkbox" ></CheckboxInput>
            <label >Nike</label>
          </div>
          <div class="field-checkbox">
          <CheckboxInput type="checkbox" ></CheckboxInput>
            <label>Puma</label>
          </div>


          <h3>Categoria</h3>
          <div class="field-checkbox">
          <CheckboxInput type="checkbox" ></CheckboxInput>
            <label > Esporte e lazer</label>
          </div>

          <div class="field-checkbox">
          <CheckboxInput type="checkbox" ></CheckboxInput>
            <label>Casual</label>
          </div>

          <div class="field-checkbox">
          <CheckboxInput type="checkbox" ></CheckboxInput>
            <label> Ultilitario</label>
          </div>

          <div class="field-checkbox">
          <CheckboxInput type="checkbox" ></CheckboxInput>
            <label>Corrida</label>
          </div>

          <h3>Genêro</h3>
          <div class="field-checkbox">
          <CheckboxInput type="checkbox" ></CheckboxInput>
            <label> Masculino</label>
          </div>
          <div class="field-checkbox">
          <CheckboxInput type="checkbox" ></CheckboxInput>
            <label>Feminino</label>
          </div>

          <h3>Estado</h3>
          <div class="field-radiobutton">
          <CheckboxInput type="checkbox" ></CheckboxInput>
            <label > Novo</label>
          </div>
          <div class="field-radiobutton">
          <CheckboxInput type="checkbox" ></CheckboxInput>
            <label  >Usado</label>
          </div>
        </fieldset>
      </Filtro>

      <ProductListing products={relatedProducts} />


    </ConteinerPrincipal>
  );
}

export default ProductListPage;
