import Card from "./card";
import { ContainerList, Carousel, Arrow, ArrowLeft, DivArrow, SubTitle } from "./styles/styleIndex";
import ArrowRight from "./img/arrow-right.svg"
import { useRef } from "react";
import cardList from "./cardList";

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
      <SubTitle >Minha lista: </SubTitle>
      <DivArrow>
      <ArrowLeft onClick={handleLeftClick}><img src={ArrowRight} alt="ArrowLeft" /></ArrowLeft>
      <Carousel className="carousel" ref={carousel}>
        
        {cardList.map((i, index) => {
          return(
            <Card key={index} src={i.src} alt={i.alt} />
          )
        })}
      </Carousel>
      <Arrow onClick={handleRightClick}><img src={ArrowRight} alt="ArrowRight" /></Arrow>
      </DivArrow>
    </ContainerList>
  )
}

export default MovieList;