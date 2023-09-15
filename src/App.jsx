//COMPONENTS
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';

//PAGES
import Home from './Pages/Home';
import Blog from './Pages/Blog';
import Shop from './Pages/Shop';

//REACT ROUTER DOM
import { Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <div>
     <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />   
        <Route path="/Blog" element={<Blog />} />   
        <Route path="/Shop" element={<Shop />} />   
      </Routes>
      <Footer />
    </div>
  )
}

export default App
