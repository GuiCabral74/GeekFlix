import Pokemon from "./img/Pokemon.jpg"
import { Movie } from "./styles/styleIndex";

const CardPokemon = () => {
  return(
    <>
      <Movie src={Pokemon} alt="Pokemon"/>
    </>
  )
}

export default CardPokemon;