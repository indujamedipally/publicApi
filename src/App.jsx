import React from 'react'
import { useState } from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './App.css'
import Meme from './components/Meme';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Meme/>}/>
    </Routes>
    
    </BrowserRouter>
  );
}

export default App
