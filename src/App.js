import './App.css';
import './index.css';
// import AboutMe from './Components/AboutMe';
import ContactMe from './Components/ContactMe';
import Education from './Components/Education';
import HeroPortion from './Components/HeroPortion';
import Navbar from './Components/Navbar';
import Skills from './Components/Skills';

function App() {
  return (
    <div className="App">
      
      <Navbar/>
      <hr></hr>
      <HeroPortion/>
      <hr></hr>
      <Education/>
      <hr></hr>
      <Skills/>
      <hr></hr>
      {/* <AboutMe/> */}
      <ContactMe/>

    </div>
  );
}

export default App;
