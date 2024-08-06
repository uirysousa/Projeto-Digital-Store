import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "../pages/Layout";
import HomePage from "../pages/HomePage";
import ProductListingPage from "../pages/ProductListingPage";
import ProductViewPage from "../pages/ProductViewPage";



const Paths = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Layout />} >
                        <Route path="/" element={<HomePage />} />
                        <Route path="/ProductListingPage" element={<ProductListingPage />} />
                        <Route path="/ProductViewPage" element={<ProductViewPage />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
      );
}
 
export default Paths;