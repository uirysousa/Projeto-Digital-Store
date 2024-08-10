import { Navigate } from 'react-router-dom';
import sapato from '../../public/sapato.png';
import ProductListing from '../components/ProductListing';


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
    <h1>lista de produtos</h1>
    <ProductListing products ={relatedProducts}/>
    </>
   );
}
 
export default ProductListPage;

