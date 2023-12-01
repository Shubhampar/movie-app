import React, { useState } from 'react'
import { Routes,Route } from 'react-router-dom'
// import SearchBar from '../components/SearchBar';
import MovieList from '../components/MovieList';
import MovieCard from '../components/MovieCard';
// import Favorites from '../components/Favorites';
import ErrorMessage from '../components/ErrorMessage';
import LoginForm from '../components/LoginForm';
import SignupForm from '../components/SignupForm';
import NavBar from "../components/NavBar";


function AllRoutes() {

  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    // Logic to handle successful login
    setLoggedIn(true);
  };

  const handleLogout = () => {
    setLoggedIn(false);
  };
  return (
    <>
    <NavBar loggedIn={loggedIn} handleLogout={handleLogout} />
        <Routes>
          <Route path="/login" element={<LoginForm onLogin={handleLogin} />} />
          <Route path="/signup" element={<SignupForm />} />
          {loggedIn ? (
            <Route path="/" element={<MovieList />} />
          ) : (
            <Route path="/" element={<div>Home Page (Not logged in)</div>} />
          )}
           <Route path="/movies/:movieId" element={<MovieCard/>} />
          <Route path="/error" element={ErrorMessage} />
    </Routes>
    </>
  )
}

export default AllRoutes