import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import AboutMe from './components/AboutMe';
import Resume from './components/Resume';
import Projects from './components/Projects';
import Scroll from './components/Overview';
import Main from './components/Main';

import './App.css';

function App() {
  return (
    
    <div>
      <Router>
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<AboutMe />} />
            <Route path="/main" element={<Main />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/scroll" element={<Scroll />} />
          </Routes>
        </main>

      </Router>
      
    </div>
  );
}

export default App;
