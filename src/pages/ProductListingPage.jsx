import ProductListing from "../components/ProductListing";
import Produto from '../../public/sapato.png'
const ProductListingPage = () => {
 
    return (
    <>
      <h1>ProductListingPage</h1>
      <ProductListing/>
      <img src={Produto} alt=""/>
      
    </>
    )
};
 
export default ProductListingPage;