import { useState } from "react";
import "./nav.css";
import EditMovie from "../EditMovie/EditMovie";

export default function Nav({ movies, onSelectMovie }) {

    const [listedMovies, setListedMovies] = useState(movies);

    function handleDelete(movie) {

        const indexOfDeleted = listedMovies.findIndex(m => m.id === movie.id);
        const newMovieList = [...listedMovies];
        newMovieList.splice(indexOfDeleted, 1);

        setListedMovies(newMovieList);
    }

    function handleSearch(event) {

        const listedMovies = event.target.value;
        const foundMovies = movies.filter((movie) => {
            return movie.title.toLowerCase().includes(listedMovies.toLowerCase());
        });

        setListedMovies(foundMovies);

    }

    const movieList = listedMovies.map((movie, index) => {
        return <li key={index} className="film item flex">
            <a href="#" onClick={() => onSelectMovie(movie)}>{movie.title}</a>
            <span>{movie.capacity - movie.tickets_sold}</span>
            <button onClick={() => handleDelete(movie)}>&times;</button>
        </li>
    });

    return (<div className="four wide column">
        <input type="text" placeholder="Search Movie" onChange={handleSearch} />
        <div className="list-container">
            <ul className="ui divided list" id="films">
                {movieList}
            </ul>
        </div>
    </div>);
}