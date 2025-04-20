import {useState} from 'react'

export function Navbar(prop) {

    const [isVisible , set] = useState(false)
    
    function show(){
        set(!isVisible)
    }


    return(
        <>
        <div className='nav'>
            <ul className="navbar">
                <span className='logo'>🌏 </span>
                <li><a className="navi" href="#home">Home</a></li>
                <li><a className="navi"   href="#about">About</a></li>
                <li><a  className="navi" href="#schedule">Schedule</a></li>
                <li><a className="navi"  href="#register">Register</a></li>
                <li><a className="navi"  href="#contact">Contact</a></li>
                <button id='mode' onClick={prop.mode}>🌤️ / 🌚</button>
            </ul>
        </div>
         

          <div>
                <span className="menu" onClick={show}><i className={`${isVisible?"fa-solid fa-xmark" : 'fa-solid fa-bars'}`}></i></span>
               <ul className={`sidebar ${isVisible ? 'move' :''} `} id="sidebar">
                    <li>   </li>
                    <li><a className="navib" href="#home">Home</a></li>
                    <li><a className="navib"  href="#about">About</a></li>
                    <li><a  className="navib" href="#schedule">Schedule</a></li>
                    <li><a className="navib"  href="#register">Register</a></li>
                    <li><a className="navib"  href="#contact">Contact</a></li>
                    <button  onClick={prop.mode}>🌤️ / 🌚</button>
                 </ul>
            </div> 
         


        </>

        
    )
}