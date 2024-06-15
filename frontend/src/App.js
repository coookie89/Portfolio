import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './components/About';
import Resume from './components/Resume';
import Projects from './components/Projects';
import Scroll from './components/Overview';
import Main from './components/Main';

import './App.css';

function App() {
  return (
    
    <main>
      <Router>
          <Routes>
            <Route path="/main" element={<Main />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/scroll" element={<Scroll />} />
          </Routes>
      </Router>
    </main>
  );
}

export default App;
