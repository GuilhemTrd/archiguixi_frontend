import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './home/Home';
import RestaurantList from './restaurant/RestaurantList';
import './App.css';

function App() {
  return (
      <Router>
        <div className="App">
          <header className="App-header">
            <h1>Welcome to React Restaurant Manager</h1>
          </header>
          {/* Utilisation de Routes au lieu de Switch pour React Router v6 */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/restaurants" element={<RestaurantList />} />
          </Routes>
        </div>
      </Router>
  );
}

export default App;
