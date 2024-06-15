import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './components/About';
import Resume from './components/Resume';
import Projects from './components/Projects';
import Main from './components/Main';

import './App.css';

function App() {
  return (
    
    <main>
      <Router>
          <Routes>
            <Route path="/main" element={<Main />} />
            <Route path="/resume" element={<Resume />} />
          </Routes>
      </Router>
    </main>
  );
}

export default App;
