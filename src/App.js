import Header from './components/Header';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
          <Header />
          <div style={{ flex: 1 }}>
            <Routes>
              <Route path='/Home' Component={Home}></Route>
              <Route path='/About Me' Component={About}></Route>
              <Route path='/Projects' Component={Projects}></Route>
              <Route path='/' Component={Home}></Route>
            </Routes>
          </div>
          <Footer />
        </div>
    </div>
  );
}

export default App;
