import Navbar from './components/Navbar';
import AboutMe from './components/AboutMe';

function App() {
  return (
    <div>
      <Navbar />
      <div style={{position: 'relative', width:'100%', height: '90vh', backgroundColor: 'grey', padding: '20px'}}>
        <AboutMe />
      </div>
    </div>
  );
}

export default App;
