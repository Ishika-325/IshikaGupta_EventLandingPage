import {useState , useEffect} from 'react'


export function Home(){
    
    const [value ,set] = useState(false)

    useEffect(()=>{
        const timer = setTimeout(() => {
            set(true);
          }, 500);
      
          return () => clearTimeout(timer);
    } , [])

    return(
        <div id='home'>
            <div className="mainImg">
                 <img src="https://media.istockphoto.com/id/1312284948/photo/planet-earth-on-a-green-background.jpg?s=612x612&w=0&k=20&c=Pm5DCjxa3UYhHghVFF7UD5tvY17QPpM7UyYDkzFDVDY="></img>
                 <div className={`slogan ${value ? "active" : ' '}`}>One Earth, One Chance: let's make it count!</div>
            </div>
            <hr className="boundary"></hr>
        </div>
    )
}