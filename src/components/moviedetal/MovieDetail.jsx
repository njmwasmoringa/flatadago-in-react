import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import apiClient from "../../services/api-client";


export default function MovieDetails() {

  const [movie, setMovie] = useState();
  const { id } = useParams();
  console.log(id);

  useEffect(() => {
    console.log(`/films/${id}`);
    apiClient.get(`/films/${id}`).then(responce => {
      console.log(responce);
      setMovie(responce.data);
    });
  }, []);


  return (<div className="four wide column">
    {movie && <>
      <h3>{movie.title || ""}</h3>
      <img
        id={movie.id || ""}
        src={movie.poster || ""}
        alt={movie.title || ""}
      />
      <button>Edit</button>
    </>}
  </div>)
}