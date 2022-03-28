export default function FooterSessao({sessao}) {

    const {day, name, movie} = sessao;
    const {weekday} = day;
    const {title, posterURL} = movie;

    return (
        <footer>
            <section>
                <img src={posterURL} alt={title}/>
            </section>
            <section>
                <h3>{title}</h3>
                <h3>{weekday} - {name}</h3>
            </section>
        </footer>
    )
}