import './App.css';
import Home from './components/pages/Home';
import News from './components/pages/News';
import Login from './components/pages/Login';
import GovtMeasures from "./components/pages/GMeasures";

import Signup from './components/pages/SignUp';
// import Forum from "./components/pages/Forum";
import Navbar from './components/navbar';
import Footer from './components/footer';
import ContactUs from './components/pages/ContactUs';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <Router>
      <div className="w-full">
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/news' element={<News />} />
          <Route exact path='/login' element={<Login />} />
          <Route exact path="/GovtMeasures" element={<GovtMeasures />} />

          <Route exact path="/signup" element={<Signup />} />
          
          <Route exact path="/ContactUs" element={<ContactUs />} />
          {/* <Route exact path="/Forum" element={<Forum />} /> */}

          {/* Add more routes here */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
