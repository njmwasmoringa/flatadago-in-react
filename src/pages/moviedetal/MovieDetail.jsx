import { Link } from "react-router-dom";


export default function MovieDetails({ movie, onEdit }) {
  return (<div className="one wide centered column">
    <h3>{movie.title}</h3>
    <img
      id={movie.id}
      src={movie.poster}
      alt={movie.title}
    />
    <Link to={`/edit/${movie.id}`}>Edit</Link>
  </div>)
}