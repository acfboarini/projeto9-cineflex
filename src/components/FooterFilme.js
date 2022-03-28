export default function FooterFilme({dias}) {

    const {title, posterURL} = dias;

    return (
        <footer>
            <section>
                <img src={posterURL} alt={title}/>
            </section>
            <section>
                <h3>{title}</h3>
            </section>
        </footer>
    )
}