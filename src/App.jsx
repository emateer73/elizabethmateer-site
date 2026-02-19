import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Writing from './pages/Writing';
import Books from './pages/Books';
import Research from './pages/Research';
import Speaking from './pages/Speaking';
import Contact from './pages/Contact';

import SearchingForHome from './pages/SearchingForHome';

import Links from './pages/Links';

import Consulting from './pages/Consulting';
import ConsultingInquiry from './pages/ConsultingInquiry';

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
              <Route path="/books" element={<Books />} />
              <Route path="/books/searching-for-home" element={<SearchingForHome />} />
              <Route path="/research" element={<Research />} />
              <Route path="/speaking" element={<Speaking />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/consulting" element={<Consulting />} />
              <Route path="/consulting-inquiry" element={<ConsultingInquiry />} />
            </Routes>
          </Layout>
        } />
      </Routes>
    </Router>
  );
}

export default App;
