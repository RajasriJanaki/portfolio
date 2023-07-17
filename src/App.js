import Header from './components/Header';
import './App.css';
import Landing from './components/Landing';
import Footer from './components/Footer';
import Projects from './components/Projects';

function App() {
  return (
    <div className="App">
        <Header />
        <Landing />
        <Projects />
        <Footer />
    </div>
  );
}

export default App;
