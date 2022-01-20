import { Movie } from "./styles/styleIndex";
import { useState } from "react";

const Card = (props) => {

const [changeSize, setChangeSize] = useState({width: "12.5rem", height: "18.75rem"})


  return(
    <>
      <Movie width={changeSize.width} height={changeSize.height} onMouseOver={() => setChangeSize({width: "15.625rem", height: "21.875rem"})} onMouseOut={() => setChangeSize({width: "12.5rem", height: "18.75rem"})} src={props.src} alt={props.alt}/>
    </>
  )
}

export default Card;