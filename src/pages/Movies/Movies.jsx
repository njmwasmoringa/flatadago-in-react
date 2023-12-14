import { useEffect, useRef, useState } from "react";
import apiClient from "../../services/api-client";
import { Link } from "react-router-dom";

export default function Movies() {

    const [movies, setMovies] = useState([]);


    useEffect(() => {
        apiClient.get('/films').then(response => {
            setMovies(response.data);
        });
    }, []);

    return (<>
        <h3>Movies</h3>
        <div className="ui centered grid">
            {movies.map((movie) => <div className="ui four wide column">
            <div className="ui card">
                    <div className="image">
                        <img src={movie.poster} />
                    </div>
                    <div className="content">
                        <Link to={`/details/${movie.id}`}>{movie.title}</Link>
                        <div className="meta">
                            <span className="date">{movie.showtime}</span>
                        </div>
                        <div className="description">
                            {movie.description}
                        </div>
                    </div>
                    <div className="extra content">
                        <a>
                            <i className="user icon"></i>
                            {movie.capacity - movie.tickets_sold}
                        </a>
                    </div>
                </div>
            </div>)}
        </div>
    </>);
}