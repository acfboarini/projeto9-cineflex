import { Link } from "react-router-dom";

export default function Sucesso({parametros}) {
    const {titulo, data, horario, numeros, nome, cpf} = parametros;
    return (
        <main className="sucesso">
            <h2>Pedido feito com sucesso!</h2>
            <section>
                <h2>Filme e sessão</h2>
                <h3>{titulo}</h3>
                <h3>{data} - {horario}</h3>
            </section>
            <section>
                <h2>Ingressos</h2>
                {
                    numeros.map(numero => {
                        return <h3 key={numero}>Assento {numero}</h3>
                    })
                }
            </section>
            <section>
                <h2>Comprador</h2>
                <h3>Nome: {nome}</h3>
                <h3>CPF: {cpf}</h3>
            </section>
            <Link to="/"><button>Voltar pra Home</button></Link>
        </main>
    );
}