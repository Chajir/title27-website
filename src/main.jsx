import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // This imports the Tailwind CSS styles
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Title27HomePage from './Title27HomePage';
import Blog from './Blog';
import WhatIsTitleInsurance from './posts/WhatIsTitleInsurance';
import ImportanceOfTitleCompany from './posts/ImportanceOfTitleCompany';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Router>
    <Routes>
      <Route path="/" element={<Title27HomePage />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/blog/what-is-title-insurance" element={<WhatIsTitleInsurance />} />
      <Route path="/blog/importance-of-title-company" element={<ImportanceOfTitleCompany />} />
    </Routes>
  </Router>
);
