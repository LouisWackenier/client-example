//REACT
import React from 'react';

//COMPONENTS
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';

//PAGES
import Home from './Pages/Home';

const App = () => {
  return (
    <div>
      <Navbar />
         <Home />
      <Footer />
    </div>
  )
}

export default App
