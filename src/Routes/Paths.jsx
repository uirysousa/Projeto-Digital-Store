import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "../components/Header";


const Paths = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Header/>}/>
                </Routes>
            </BrowserRouter>
        </>
      );
}
 
export default Paths;