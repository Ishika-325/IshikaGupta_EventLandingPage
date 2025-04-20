import {Navbar} from './Navbar'
import {Home} from './Home'
import {About} from './About'
import {Schedule} from './Schedule'
import {Register} from './Register'
import {Contact } from './Contact'
import {Footer} from './Footer'
import './style.css'

export function App(){

  function ToggeleMode(){
    document.body.classList.toggle('dark');
    document.querySelector(".form").classList.toggle('dark');
    document.querySelectorAll(".navib").forEach( e => {
      e.classList.toggle('white');
    })
    document.querySelector('.menu').classList.toggle('white');
    document.querySelectorAll(".mention").forEach( e => {
      e.classList.toggle('green');
    })

  }


      return(
        <>
        <Navbar mode={ToggeleMode} />
        <Home />
        <About />
        <Schedule />
        <Register />
        <Contact />
        <Footer />
        </>
      )
}