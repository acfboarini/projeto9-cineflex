import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import Assento from "./Assento";
import FooterSessao from "./FooterSessao";

export default function Sessao({recebeDados}) {
    
    const { idSessao } = useParams();
    const [sessao, setSessao] = useState({});
    const navigate = useNavigate();

    const opcoes = [
        {
            texto: "Selecionado", classe: "selecionado",
            cor: {background: "#8DD7CF", borda: "#1AAE9E"}
        },
        {
            texto: "Disponível", classe: "disponivel", 
            cor: {background: "#C3CFD9", borda: "#7B8B99"}
        },
        {
            texto: "Indisponível", classe: "indisponivel", 
            cor: {background: "#FBE192", borda: "#F7C52B"}
        }
    ]

    useEffect(() => {
        const promise = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${idSessao}/seats`);

        promise.then(response => {
            const {data} = response;
            console.log(data);
            setSessao(data);
        })
    }, []);

    const {seats} = sessao;

    return seats !== undefined? (
        <main className="sessao">
            <h2>Selecione o(s) assento(s)</h2>
            <section className="lista-assentos">
                {
                    seats.map(seat => {
                        const {id, name, isAvailable} = seat;
                        return <Assento key={id} id={id} name={name} isAvailable={isAvailable}/>
                    })
                }
            </section>

            <section className="opcoes">
                {
                    opcoes.map(opcao => {
                        const {texto, classe, cor} = opcao;
                        const {background, border} = cor;
                        const css = `assento ${texto}`;
                        return (
                            <article key={classe}>
                                <button className={classe}></button>
                                <h4>{texto}</h4>
                            </article>
                        )
                    })
                }
            </section>

            <section className="form">
                <article>
                    <h3>Nome do comprador:</h3>
                    <input type="text" placeholder="Digite seu nome..."></input>
                </article>
                <article>
                    <h3>CPF do comprador:</h3>
                    <input type="text" placeholder="Digite seu CPF..."></input>
                </article>
                <article>
                    <button onClick={() => {
                        enviarDados(recebeDados, navigate, sessao);
                    }}>Reservar assento(s)</button>
                </article>
            </section>
            <FooterSessao sessao={sessao}/>
        </main>
    ): <p>carregando...</p>
}

function enviarDados(recebeDados, navigate, sessao) {
    let assentos = [...document.querySelectorAll(".assento")];
    console.log(assentos);
    let assentos_selecionados = [];
    assentos.forEach(assento => {
        if(assento.classList.contains("selecionado")){
            const dados = {id: assento.id, numero: assento.innerText}
            assentos_selecionados.push(dados);
        }
    })
    let inputs = [...document.querySelectorAll(".form input")];

    if(validarDados(assentos_selecionados, inputs)){
        let dados = {
            ids: assentos_selecionados.map(assento => {
                return assento.id;
            }),
            name: inputs[0].value,
            cpf: inputs[1].value
        }

        const promise = axios.post("https://mock-api.driven.com.br/api/v5/cineflex/seats/book-many", dados);

        promise.then(response => {
            recebeDados(sessao, dados, assentos_selecionados);
            navigate("/sucesso");
        })

        promise.catch(() => {
            alert("Algo deu errado. Tente novamente");
        })

    } else {
        alert("preencha todos os campos corretamente!!");
    }
}

function validarDados(lista, inputs) {
    let validar = true;

    if (lista.length === 0) {
        validar = false;
    }else {
        inputs.forEach(input => {
            if (input.value === "") {
                validar = false;
            }
        })
    }
    return validar;
}