import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // This imports the Tailwind CSS styles
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Title27HomePage from './Title27HomePage';
import Blog from './Blog';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Router>
    <Routes>
      <Route path="/" element={<Title27HomePage />} />
      <Route path="/blog" element={<Blog />} />
    </Routes>
  </Router>
);
