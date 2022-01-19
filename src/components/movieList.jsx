import Card from "./card";
import { ContainerList, Carousel, Arrow, ArrowLeft, DivArrow, SubTitle } from "./styles/styleIndex";
import ArrowRight from "./img/arrow-right.svg"
import { useRef, useState } from "react";
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

  const [myTitle, setMyTitle] = useState(true);


  return(
    <ContainerList>
      <SubTitle color={myTitle ? "red" : "#fff"} onMouseOver={() => setMyTitle(true)} onMouseOut={() => setMyTitle(false)}>Minha lista: </SubTitle>
      <DivArrow>
      <ArrowLeft onClick={handleLeftClick}><img src={ArrowRight} alt="" /></ArrowLeft>
      <Carousel className="carousel" ref={carousel}>
        
        {cardList.map((i, index) => {
          return(
            <Card key={index} src={i.src} alt={i.alt} />
          )
        })}
      </Carousel>
      <Arrow onClick={handleRightClick}><img src={ArrowRight} alt="" /></Arrow>
      </DivArrow>
    </ContainerList>
  )
}

export default MovieList;