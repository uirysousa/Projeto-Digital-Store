import ProductCard from './caminho/do/arquivo/ProductCard'; // Corrija o caminho do import

const ProductListing = () => {
  return (
    <div className="product">
      <ProductCard 
        imageSrc="../" 
        title="Tênis" 
        text="K-Swiss V8 - Masculino."
        price="$300,00  $200,00" 
      />
      <ProductCard 
        imageSrc=" " 
        title="Tênis" 
        text="K-Swiss V8 - Masculino."
        price="$300,00  $200,00" 
      />
      <ProductCard 
        imageSrc=" " 
        title="Produto 3" 
        text="K-Swiss V8 - Masculino."
        price="$300,00  $200,00" 
      />
      <ProductCard 
        imageSrc=" " 
        title="Produto 4" 
        text="DK-Swiss V8 - Masculino."
        price="$300,00  $200,00" 
      />
      <ProductCard 
        imageSrc=" " 
        title="Produto 5" 
        text="K-Swiss V8 - Masculino."
        price="$300,00  $200,00" 
      />
      <ProductCard 
        imageSrc=" " 
        title="Produto 6" 
        text="K-Swiss V8 - Masculino."
        price="$300,00  $200,00" 
      />
      <ProductCard 
        imageSrc=" " 
        title="Produto 7" 
        text="K-Swiss V8 - Masculino."
        price="$300,00  $200,00" 
      />
      <ProductCard 
        imageSrc=" " 
        title="Produto 8" 
        text="K-Swiss V8 - Masculino."
        price="$300,00  $200,00" 
      />
    </div>
  );
};

export default ProductListing;
