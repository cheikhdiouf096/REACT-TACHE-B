import logo from './logo.svg';
import './App.css';
import { NavBar } from "../src/components/NavBar"
import { Banner } from "../src/components/Banner"
import { Services } from "../src/components/Services"
import { Projects } from "../src/components/Projects"
import { Contact } from "../src/components/Contact"
import { Footer } from "../src/components/Footer"





function App() {
  return (
    <div className="App"> 
      <NavBar />
      <Banner />
      <Services />
      <Projects />
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
