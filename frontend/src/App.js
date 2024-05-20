import Navbar from './components/Navbar';
import AboutMe from './components/AboutMe';
import Resume from './components/Resume';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (

    
    <div>
      <Router>

      <Navbar />

      <main style={{position: 'relative', width:'100%', height: '90vh', backgroundColor: 'grey', padding: '20px'}}>
        <Routes>
          <Route path="/" element={<AboutMe />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
      </main>

      </Router>
      
    </div>
  );
}

export default App;
