

export default function MovieDetails({ movie, onEdit }) {
  return (<div className="four wide column">
    <h3>{movie.title}</h3>
    <img
      id={movie.id}
      src={movie.poster}
      alt={movie.title}
    />
    <button onClick={onEdit}>Edit</button>
  </div>)
}