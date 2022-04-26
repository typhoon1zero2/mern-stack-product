import React, { useContext } from 'react';
import {BrowserRouter as Router} from 'react-router-dom'
import {DataProvider} from '../../GlobalState'
import Header from '../../components/Headers/header';
import MainPages from '../../components/MainPages/Pages.js';

export default function App() {
 
  return (
    <DataProvider>
    <Router>
      <div className="App">
        <Header />
        <MainPages />
      </div>
    </Router>
  </DataProvider>
  );
}