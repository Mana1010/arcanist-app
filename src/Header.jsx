import { useState, useRef, useContext } from "react";
import { FaGlobe, FaSun, FaMoon, FaBars} from "react-icons/fa";

export default function Header(){
  const toggleRef = useRef(null);
  const togglebg = useRef(null);
  const [toggle, setToggle] = useState(false);
  function switches(){
    setToggle(!toggle);
  }
  function toggling(){
    if(toggle){
      toggleRef.current.style.color = "rgb(32, 32, 40)";
    }

    else{
      toggleRef.current.style.color = "white";
    }
  }
    return (
        <div>
            <header className="header">
              <div className="main-header">
          <img src={logo}/>
          <ul className="nav-links">
            <li><a href="#">Media</a></li>
            <li><a href="#">Story</a></li>
          </ul>
          </div>
          <div className="nav-main">
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">Characters</a></li>
              <li><a href="#">Blogs</a></li>
            </ul>
          </div>
          <div className="buttons">
          <button className="bars">{<FaBars/>}</button>
            <button onClick={() => {
              switches(),
              toggling()
            }}>{toggle ? <FaSun className="icon toggle"/> : <FaMoon className="icon toggle"/>}</button>
            <button><FaGlobe className="icon"/></button>
            <button>Sign In</button>
          </div>
            </header>
        </div>
    )
}