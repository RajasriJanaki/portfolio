import Header from './components/Header';
import { Divider } from '@chakra-ui/react'
import './App.css';
import Landing from './components/Landing';
import Footer from './components/Footer';
import Projects from './components/Projects';

function App() {
  return (
    <div className="App">
        <Header />
        <Landing />
        <Divider width={'80%'} ml={'auto'} mr={'auto'} mt={'0'}/>
        <Projects />
        <Footer />
    </div>
  );
}

export default App;
