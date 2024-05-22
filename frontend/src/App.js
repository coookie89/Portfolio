import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import AboutMe from './components/AboutMe';
import Resume from './components/Resume';
import Projects from './components/Projects';
import './App.css';

function App() {
  return (

    
    <div>
      <Router>

        <Navbar />

        <main>
          <Routes>
            <Route path="/" element={<AboutMe />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
        </main>

      </Router>
      
    </div>
  );
}

export default App;
