import { useEffect, useRef, useState } from 'react';
import Button from './Button'
import './Hero.css'
import img from '../assets/proF.svg'
import Projects from './Projects';


const profession = ['Web Developer','Iot'];

const Hero = () => {

    const [text,setText] = useState('Web Developer')

  useEffect(()=>{

    const interval =  setInterval(()=>{
        if(text=== profession[0]){
            setText(profession[1])
        } else {
            setText(profession[0])
        }
    },3000)

    return ()=> clearInterval(interval)
  },[text])

  
  const handleHome = ()=>{

  }

  const handleAbout = ()=>{

  }
  const handleContact = ()=>{
    const element = document.getElementById('contacts')
    if (element) {
        // 👇 Will scroll smoothly to the top of the next section
        element.scrollIntoView({ behavior: 'smooth' });
      }
  }

  const handleProjects =()=>{
    const element = document.getElementById('projects')
    if (element) {
        // 👇 Will scroll smoothly to the top of the next section
        element.scrollIntoView({ behavior: 'smooth' });
      }
  }

  return (
    <div className="hero-container">
        <nav className='nav-container'>
            <div className='nav-logo'>gs</div>
        
                <ul className='nav-navbar'>
                    <li onClick={handleHome}>Home</li>
                    <li onClick={handleAbout}>About</li>
                    <li onClick={handleProjects}>Projects</li>
                    <li onClick={handleContact}>Contacts</li>
                    
                </ul>
            
        </nav>
        <section className='hero-section'>
            <div className='hero-content'>
                <h1>GAURAV</h1>
                <h2>{text}</h2>
                <h3>based in INDIA</h3>
                <Button style={{padding: '18px 35px 20px 35px',fontSize: '25px'}}>See Portfolio</Button>
            </div>
            <img src={img} alt='hero-img' />
        </section>
    </div>
  )
}

export default Hero