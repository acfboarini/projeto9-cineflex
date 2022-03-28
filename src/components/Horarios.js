import { Link } from "react-router-dom";

export default function Horarios({day}) {
    const {id, date, weekday, showtimes} = day;

    return (
        <article>
            <h3 key={id}>{weekday} - {date}</h3>
            <div className="showtime">
                {
                    showtimes.map(showtime => {
                        const {id, name} = showtime;
                        return (
                            <Link key={id} to={`/sessao/${id}`}>
                                <button>{name}</button>
                            </Link>
                        );
                    })
                }
            </div>
        </article>
    )
}