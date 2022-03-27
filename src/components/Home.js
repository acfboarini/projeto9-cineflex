import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import axios from "axios";

export default function Home() {

    const [filmes, setFilmes] = useState([]);

    useEffect(() => {
        const promise = axios.get("https://mock-api.driven.com.br/api/v5/cineflex/movies");

        promise.then(response => {
            const {data} = response;
            console.log(data);
            setFilmes(data);
        })
    }, []);

    return filmes.length !== 0? (
        <main className="home">
            <h2>Selecione o filme</h2>
            <section className="lista-filmes">
                {
                    filmes.map(filme => {
                        const {id, title, posterURL, overview, releaseDate} = filme;
                        return (
                            <article className="filme" key={id}>
                                <Link to={`filme/${id}`}>
                                    <img src={posterURL} alt={overview}/>
                                </Link>
                            </article>
                        )
                    })
                }
            </section>
        </main>
    ): <p>carregando</p>;
}