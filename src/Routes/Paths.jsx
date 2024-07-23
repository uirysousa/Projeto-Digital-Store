import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "../pages/Layout";
import HomePage from "../pages/HomePage";
import Header from "../components/Header";
import Footer from "../components/Footer";



const Paths = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    {/*<Route path="/" element={<Layout/>}/>*/}
                        <Route path="/" element={<Header/>}/>  
                        <Route path="/" element={<Footer/>}/>  
                </Routes>
            </BrowserRouter>
        </>
      );
}
 
export default Paths;