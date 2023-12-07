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

  const [movies, setMovies] = useState(db.films);
  const [selectedMovie, setSelectedMovie] = useState(movies[0]);
  const dialogRef = useRef();

  function handleEdit() {
    dialogRef.current.showModal();
  }

  function handleCancel() {
    dialogRef.current.close();
  }

  const [gpsLocation, setGPSLocation] = useState({lat:8379, lon:3492837});

  useEffect(() => {
    apiClient.post('/films', gpsLocation).then(films => {
      console.log(films);
    });
  }, [gpsLocation]);

  function handleCarMovement(){
    setGPSLocation({lat:8379, lon:3492837});
  }


  return (
    <div className="App">

      <Header />

      {selectedMovie && <dialog ref={dialogRef} style={{ width: "300px", minHeight: "300px" }}>
        <EditMovie movie={selectedMovie} onClose={handleCancel} />
      </dialog>}

      <div className="ui centered grid">

        <Nav movies={movies} onSelectMovie={setSelectedMovie} />

        {selectedMovie && <>

          <MovieDetails movie={selectedMovie} onEdit={handleEdit} />

          <TicketBooking />

        </>}



      </div>
    </div>
  );
}


export default App;
