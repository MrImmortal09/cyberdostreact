import './App.css';
import Home from './components/pages/Home';
import News from './components/pages/News';
import Login from './components/pages/Login';
import GovtMeasures from "./components/pages/GMeasures";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="w-full">
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/news' element={<News />} />
          <Route exact path='/login' element={<Login />} />
          <Route exact path="/GovtMeasures" element={<GovtMeasures />} />
          {/* Add more routes here */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
