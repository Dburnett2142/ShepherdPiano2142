import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './components/Home';
import About from './components/About';
import Studio from './components/Studio';
import Video from './components/Video';
import Scheduling from './components/Scheduling';
import Contact from './components/Contact';
import Header from './components/Header';
import './global.css';

function App() {
    return (
        <Router>
            <div className="App">
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/studio" element={<Studio />} />
                    <Route path="/video" element={<Video />} />
                    <Route path="/scheduling" element={<Scheduling />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;