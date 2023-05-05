import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navigation from './components/Navigation';
import PremierLeagueTable from './components/Table';
import ResultsList from './components/Results';
import TeamStatistic from './components/Teams';
import Home from './components/Home';

function App(){
  return (
    <>
    <Navigation />
    <Routes>

      <Route path="/" element={<Home />} />
      <Route path="/table" element={<PremierLeagueTable />} />
      <Route path="/results" element={<ResultsList />} />
      <Route path="/teams" element={<TeamStatistic />} />
    </Routes>
    </>
  );
}

export default App;
