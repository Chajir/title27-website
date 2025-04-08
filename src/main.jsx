import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // This imports the Tailwind CSS styles
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Title27HomePage from './Title27HomePage';
import Blog from './Blog';
import BlogPost from './components/BlogPost'; // we’ll create this now


ReactDOM.createRoot(document.getElementById('root')).render(
  <Router>
    <Routes>
      <Route path="/" element={<Title27HomePage />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/blog/what-is-title-insurance" element={<BlogPost postPath="/posts-md/what-is-title-insurance.md" />} />
      <Route path="/blog/importance-of-title-company" element={<BlogPost postPath="/posts-md/importance-of-title-company.md" />} />
    </Routes>
  </Router>
);
