import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import Filme from "./Filme";

export default function App() {
    return (
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path="/" element={<Home/>}></Route>
                <Route path="/filme/:idFilme" element={<Filme/>}></Route>
                <Route path="/sessao/:idSessao" /*element={<Contato />}*/></Route>
                <Route path="/sucesso" /*element={<Contato />}*/></Route>
            </Routes>
        </BrowserRouter>
    );
}