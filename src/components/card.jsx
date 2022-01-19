import Avengers from "./img/Avengers-infinity-war.JPG"
import { Movie } from "./styles/styleIndex";
import { useState } from "react";

const Card = (props) => {

const [changeSize, setChangeSize] = useState({width: "200px", height: "300px"})


  return(
    <>
      <Movie width={changeSize.width} height={changeSize.height} onMouseOver={() => setChangeSize({width: "250px", height: "350px"})} onMouseOut={() => setChangeSize({width: "200px", height: "300px"})} src={props.src} alt={props.alt}/>
    </>
  )
}

export default Card;