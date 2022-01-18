import Avengers from "./img/Avengers-infinity-war.JPG"
import { Movie } from "./styles/styleIndex";

const Card = () => {
  return(
    <>
      <Movie src={Avengers} alt="Avengers"/>
    </>
  )
}

export default Card;