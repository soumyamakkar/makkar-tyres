import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import GenerateEmail from './components/GenerateEmail';
import NotFound from './components/NotFound'; // Import the NotFound component
import './App.css';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/generate-email" element={<GenerateEmail />} />
                
                {/* Fallback route for 404 */}
                <Route path="*" element={<NotFound />} />
            </Routes>
        </Router>
    );
}

export default App;
