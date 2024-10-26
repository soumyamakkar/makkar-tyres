import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import Home from './components/Home';
import GenerateEmail from './components/GenerateEmail';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/generate-email" element={<GenerateEmail />} />
      </Routes>
    </Router>
  );
}

export default App;
