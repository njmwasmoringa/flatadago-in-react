import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import MovieDetails from './components/moviedetal/MovieDetail';
import TicketBooking from './components/TicketBooking/TicketBooking';
import db from './data/db';
import { useEffect, useRef, useState } from 'react';
import EditMovie from './pages/EditMovie/EditMovie';

import apiClient from './services/api-client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Movies from './pages/Movies/Movies';
import Layout from './components/Layout';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path="/" element={<Movies />} />
          <Route path="/details/:id" element={<MovieDetails />} />
          <Route path="/edit/:id" element={<EditMovie />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}


export default App;
