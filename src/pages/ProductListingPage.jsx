import { Navigate } from 'react-router-dom';
import sapato from '../../public/sapato.png';
import ProductListing from '../components/ProductListing';
 import React from 'react';

  
 
  
 

const handleSearch = () => {
  Navigate(`/ProductViewPage`);
};

const ProductListPage = () => {
  const relatedProducts  = [

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
    }
    
];


  return ( 
    <> 
  <h1>Filtrar por</h1>
 
<fieldset>
<h2>Marka</h2>
<div  class="field-checkbox">
    <input type="checkbox" ></input>
    <label> Addidas</label>
</div>
 
<div class="field-checkbox">
    <input type="checkbox" ></input>
    <label> Canlenciaga</label>
</div>

<div class="field-checkbox">
    <input type="checkbox"></input>
    <label >K-Swiss</label>
</div>
<div class="field-checkbox">
    <input type="checkbox"></input>
    <label >Nike</label>
</div>
<div class="field-checkbox">
    <input type="checkbox"  ></input>
    <label>Puma</label>
</div>


<h3>Categoria</h3>
<div class="field-checkbox">
    <input type="checkbox" ></input>
    <label > Esporte e lazer</label>
</div>

<div class="field-checkbox">
    <input type="checkbox"  ></input>
    <label>Casual</label>
</div>

<div class="field-checkbox">
    <input type="checkbox"  ></input>
    <label> Ultilitario</label>
</div>

<div class="field-checkbox">
    <input type="checkbox"></input>
    <label>Corrida</label>
</div>

<h4>Genêro</h4>
<div class="field-checkbox">
    <input type="checkbox" ></input>
    <label> Masculino</label>
</div>
<div class="field-checkbox">
    <input type="checkbox"></input>
    <label>Feminino</label>
</div>

       <h5>Estado</h5>
<div class="field-radiobutton">
    <input type="radio"></input>
    <label > Novo</label>
</div>
<div class="field-radiobutton">
    <input type="radio" ></input>
    <label  >Usado</label>
</div>
</fieldset>
  
 

 
    <ProductListing products ={relatedProducts}/>
  
 
    </>
   );
}
 
export default ProductListPage;
