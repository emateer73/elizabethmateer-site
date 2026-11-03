import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Writing from './pages/Writing';
import Books from './pages/Books';
import Speaking from './pages/Speaking';
import Contact from './pages/Contact';

import SearchingForHome from './pages/SearchingForHome';
import ANewTypeOfBreakfast from './pages/ANewTypeOfBreakfast';

import Links from './pages/Links';

import FoundersMind from './pages/FoundersMind';
import BuildWithYourBrain from './pages/BuildWithYourBrain';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/links" element={<Links />} />
        <Route path="*" element={
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/writing" element={<Writing />} />
              <Route path="/poetry" element={<Books />} />
              <Route path="/books" element={<Navigate to="/poetry" replace />} />
              <Route path="/books/searching-for-home" element={<SearchingForHome />} />
              <Route path="/books/a-new-type-of-breakfast" element={<ANewTypeOfBreakfast />} />
              <Route path="/poetry/searching-for-home" element={<Navigate to="/books/searching-for-home" replace />} />
              <Route path="/poetry/a-new-type-of-breakfast" element={<Navigate to="/books/a-new-type-of-breakfast" replace />} />
              <Route path="/speaking" element={<Speaking />} />
              <Route path="/contact" element={<Contact />} />
              {/* Research folded into About; Consulting retired; redirects preserve inbound links */}
              <Route path="/research" element={<Navigate to="/about" replace />} />
              <Route path="/consulting" element={<Navigate to="/contact" replace />} />
              <Route path="/consulting-inquiry" element={<Navigate to="/contact" replace />} />
              <Route path="/private-work" element={<Navigate to="/contact" replace />} />
              <Route path="/private-work-inquiry" element={<Navigate to="/contact" replace />} />
              <Route path="/founders-mind" element={<FoundersMind />} />
              <Route path="/build-with-your-brain" element={<BuildWithYourBrain />} />
            </Routes>
          </Layout>
        } />
      </Routes>
    </Router>
  );
}

export default App;
