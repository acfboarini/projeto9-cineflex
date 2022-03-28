import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import axios from "axios";

import Horarios from "./Horarios";
import FooterFilme from "./FooterFilme";

export default function Filme() {
    
    const { idFilme } = useParams();
    const [dias, setDias] = useState({});

    useEffect(() => {
        const promise = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/movies/${idFilme}/showtimes`);

        promise.then(response => {
            const {data} = response;
            setDias(data);
        })
    }, []);

    const {days} = dias;
    
    return days !== undefined? (
        <main className="filme-page">
            <h2>Selecione um horario</h2>
            <section className="lista-dias">
                {
                    days.map(day => {
                        return <Horarios key={day.id} day={day}/>
                    })
                }
            </section>
            <FooterFilme dias={dias}/>
        </main>
    ): <p>Carregando...</p>;
}