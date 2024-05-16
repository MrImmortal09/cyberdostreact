import React from 'react';
import Analytics from '../Analytics';
import Cards from '../Cards';
import Footer from '../footer';
import Hero from '../Hero';
import Navbar from '../navbar';
import Newsletter from '../Newsletter';

function App() {
  return (
    <div>
      {/* <Navbar /> */}
      <Hero />
      <Analytics />
      <Newsletter />
      <Cards />
      {/* <Footer /> */}
    </div>
  );
}

export default App;