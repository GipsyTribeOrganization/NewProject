import './App.css'
import {BrowserRouter, Link, Route, Router, Routes} from "react-router-dom";
import Navbar from "./pages/Home/Navbar/navbar";
import home from "./pages/Home/home";
import about from "./pages/About/about";
import Home from "./pages/Home/home";
import About from "./pages/About/about";
import Login from "./pages/Login/login";
function App() {
    return (
        <BrowserRouter>
            <div>
                <Navbar />
                <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/login" element={<Login/>}/>
                </Routes>
            </div>
        </BrowserRouter>
    );
}
export default App;