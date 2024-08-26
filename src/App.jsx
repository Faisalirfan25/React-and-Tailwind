import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import { Features, Footer } from './components/Sections';

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Features />
      <Footer />
    </div>
  );
}

export default App;
