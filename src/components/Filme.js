import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import axios from "axios";

export default function Filme() {
    
    const { idFilme } = useParams();
    const [dias, setDias] = useState({});

    useEffect(() => {
        const promise = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/movies/${idFilme}/showtimes`);

        promise.then(response => {
            const {data} = response;
            console.log(data);
            setDias(data);
        })
    }, []);

    const {days} = dias;
    console.log(days);
    
    /*return dias.length !== 0? (
        <main className="filme-page">
            <h2>Selecione um horario</h2>
            <section className="lista-dias">
                {
                    days.map(day => {
                        const {id, date, weekday, showtimes} = day
                        return (
                            <h2 key={id}>{weekday} - {date}</h2>
                        );
                    })
                }
            </section>
        </main>
    ): <p>Carregando...</p>;*/
    return <></>
}