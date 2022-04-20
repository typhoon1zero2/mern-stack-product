import React from 'react';
import './App.css';
import { useState } from 'react';
import AuthPage from '../AuthPage/AuthPage';
import { Routes, Route } from 'react-router-dom'
import Header from  '../Headers/Header'
import MainPages from '../MainPages/MainPages'


function App() {
  const [user, setUser ] = useState(null);

  return (
    <main className="App">
      
      {
        user ?
        <Routes>
          <Route path="/" element={<Header />}/>
          <Route path="/products" element={<MainPages/>}/>
        </Routes>
        :
        <AuthPage setUser={setUser}/>
      }
    </main>
  );
}

export default App;