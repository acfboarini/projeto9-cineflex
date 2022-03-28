import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import Filme from "./Filme";
import Sessao from "./Sessao";
import Sucesso from "./Sucesso";

import { useState } from "react";

export default function App() {

    const [parametros, setParametros] = useState({});

    function recebeDados(sessao, {name, cpf}, assentos) {
        const horario = sessao.name
        const {date} = sessao.day;
        const {title} = sessao.movie;
        const numeros = 
            assentos.map(assento => {
                return assento.numero
            })

        const objeto = {
            titulo: title,
            data: date,
            horario: horario,
            nome: name,
            cpf: cpf,
            numeros: numeros
        }
        setParametros(objeto);
    }

    return (
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path="/" element={<Home/>}></Route>
                <Route path="/filme/:idFilme" element={<Filme/>}></Route>
                <Route path="/sessao/:idSessao" element={<Sessao recebeDados={recebeDados}/>}></Route>
                <Route path="/sucesso" element={<Sucesso parametros={parametros}/>}></Route>
            </Routes>
        </BrowserRouter>
    );
}