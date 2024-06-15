import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main from './components/Main';

import './App.css';

function App() {
  return (
    
    <main>
      <Router>
          <Routes>
            <Route path="/main" element={<Main />} />
          </Routes>
      </Router>
    </main>
  );
}

export default App;
