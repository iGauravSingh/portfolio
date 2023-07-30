import Contacts from "./components/Contacts";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Who from "./components/Who";
import './App.css'
import { useRef } from "react";

function App() {
 

  return (
    <div className="main-container">
      <Hero/>
      {/* <Who /> */}
      <Projects />
      <Contacts />
    </div>

  );
}

export default App;
