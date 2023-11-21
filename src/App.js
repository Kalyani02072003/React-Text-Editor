
// src/App.js
import React from 'react';
import './App.css';
import Editor from './components/Editor/Editor';
import Home from './components/Home/Home';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div >
        
        <Router>
            <Routes>
            <Route path="/editor" element={<Editor />} />
            <Route path="/" element={<Home />} />
            </Routes>
        </Router>
    </div>
  );
};

export default App;
