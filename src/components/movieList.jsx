import Avenger from "./cardAvenger"
import CardLor from "./cardLor";
import CardSw from "./cardSw";
import CardJurassic from "./cardJurassic";
import CardJusticeLeague from "./cardJusticeLeague";
import CardEragon from "./cardEragon";
import CardRp1 from "./cardRp1";
import CardPokemon from "./cardPokemon";
import CardInterstellar from "./cardInterstellar";
import CardTransformers from "./cardTransformers";
import { ContainerList, Carousel, Arrow, ArrowLeft, DivArrow } from "./styles/styleIndex";
import ArrowRight from "./img/arrow-right.svg"
import { useRef } from "react";

const MovieList = () => {

  const carousel = useRef(null);

  const handleLeftClick = (e) => {
    e.preventDefault();
    carousel.current.scrollLeft -= carousel.current.offsetWidth;
  }

  const handleRightClick = (e) => {
    e.preventDefault();
    carousel.current.scrollLeft += carousel.current.offsetWidth;
  }

  return(
    <ContainerList>
      <DivArrow>
      <ArrowLeft onClick={handleLeftClick}><img src={ArrowRight} alt="" /></ArrowLeft>
      <Carousel className="carousel" ref={carousel}>
        <Avenger />
        <CardLor />
        <CardSw />
        <CardJurassic />
        <CardJusticeLeague />
        <CardEragon />
        <CardRp1 />
        <CardPokemon />
        <CardInterstellar />
        <CardTransformers />
      </Carousel>
      <Arrow onClick={handleRightClick}><img src={ArrowRight} alt="" /></Arrow>
      </DivArrow>
    </ContainerList>
  )
}

export default MovieList;