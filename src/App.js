import './App.css';
import Sidebar from './components/Sidebar/Sidebar';
import Services from './components/Services/Services';
import Resume from './components/Resume/Resume';
import Portfolio from './components/Portfolio/Portfolio';
import Home from './components/Home/Home';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Skills from './components/Skills/Skills';

function App() {
  return (
    <>
      <Sidebar/>
      <main className='main'>
        <Home/>
        <About/>
        <Services/>
        <Resume/>
        <Skills/>
        <Portfolio/>
        <Contact/>
      </main>
    </>
  );
}

export default App;
