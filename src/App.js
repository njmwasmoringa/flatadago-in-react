import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import MovieDetails from './components/moviedetal/MovieDetail';
import TicketBooking from './components/TicketBooking/TicketBooking';
import db from './data/db';
import { useEffect, useRef, useState } from 'react';
import EditMovie from './components/EditMovie/EditMovie';

import apiClient from './services/api-client';

function App() {

  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState();
  const dialogRef = useRef();

  function handleEdit() {
    dialogRef.current.showModal();
  }

  function handleSelectMovie(movie){
    setSelectedMovie(movie);
  }

  function handleCancel() {
    dialogRef.current.close();
  }

  function handleSaved(updatedMovie){
    console.log(updatedMovie)
    let unpdatedMovies = [...movies];
    const updateMovieIndex = movies.findIndex(m=>m.id === updatedMovie.id);
    unpdatedMovies.splice(updateMovieIndex, 1, updatedMovie);
    setMovies(unpdatedMovies);
  }

  useEffect(() => {
    apiClient.get('/films').then(response => {
      setMovies(response.data);
      setSelectedMovie(response.data[0]);
    });
  }, []);


  return (
    <div className="App">

      <Header />



      {selectedMovie && <dialog ref={dialogRef} style={{ width: "300px", minHeight: "300px" }}>
        <EditMovie movie={selectedMovie} onClose={handleCancel} onSave={handleSaved} />
      </dialog>}

      <div className="ui centered grid">

        <Nav movies={movies} onSelectMovie={handleSelectMovie} />
        {/* {!movies && ''} */}

        {selectedMovie && <>

          <MovieDetails movie={selectedMovie} onEdit={handleEdit} />

          <TicketBooking />

        </>}



      </div>
    </div>
  );
}


export default App;
