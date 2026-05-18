import React from 'react'
import { useState } from 'react';
import { HashRouter,Routes,Route } from 'react-router-dom';
import './App.css'
import Meme from './components/Meme';

function App() {
  return (
    <HashRouter>
    <Routes>
      <Route path='/' element={<Meme/>}/>
    </Routes>
    
    </HashRouter>
  );
}

export default App
