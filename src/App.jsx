import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './CSS/App.css';
import Favourites from "./Pages/Favourites";
import NavBar from "./myComponents/NavBar";
import  Home  from "./Pages/Home";
import { Routes, Route } from "react-router-dom";
import { MovieProvider } from "./Contexts/MovieContext";
function App() {
     
  return (
    <>
    <MovieProvider>
          <NavBar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/Favourites" element={<Favourites/>}/>
        </Routes>
      </main>
      </MovieProvider>
    </>
  );
}

export default App
