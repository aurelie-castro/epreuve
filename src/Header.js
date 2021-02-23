import {useRef} from "react";

function Header(){
    const musique = useRef();
    return(
        <header>
            <img src="images/logo.png"/>
            <button onClick={()=>{musique.current.play();}}>▶</button>
            <button onClick={()=>{musique.current.pause();}}>⏸ </button>
            <audio preload="auto" ref={musique}>
                <source src="audio/Jean-Jacques Perrey - in a happy moog.mp3"></source>
            </audio>
        </header>
    );
};

export default Header;