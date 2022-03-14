import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
import Sw2 from "../img/star-wars-episodio-2-ataque-dos-clones.jpg";

/**GLOBAL */

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    width: 100%;
    min-height: 100vh;
  }
`;

/** NAV */

export const Nav = styled.nav`
  background-image: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.7) 10%,
    rgba(0, 0, 0, 0)
  );
  color: #fff;
  display: flex;
  justify-content: space-between;
  position: absolute;
  top: 0;
  z-index: 10;
  width: 100%;
`;

export const DivList = styled.div`
  display: flex;
`;

export const Title = styled.h1`
  color: red;
  margin: 0.938rem;
  width: 9.375rem;
`;

export const Ul = styled.ul`
  width: 18.75rem;
  padding-left: 0;
  display: flex;
  justify-content: space-between;
`;

export const Link = styled.a`
  color: #fff;
  text-decoration: none;
`

export const Li = styled.li`
  list-style: none;
`;

export const IconSvg = styled.img`
  width: 1.375rem;
  margin-top: 1.563rem;
`;

export const DivImgs = styled.div`
  width: 9.375rem;
  display: flex;
  justify-content: space-between;
`;

/**BANNER */

export const Section = styled.section`
  background: url(${Sw2});
  background-repeat: no-repeat;
  background-size: cover;
  z-index: -1;
  color: #fff;
`;

export const Content = styled.div`
  padding: 9.375rem 0 6.25rem 3.125rem;
`;

export const ContentTitle = styled.h1`
  font-size: 3.75rem;
`;

export const ContentP = styled.p`
  font-size: 1.4vw;
  width: 32.5rem;
  text-shadow: 0.125rem 0.125rem 0.25rem rgb(0 0 0 / 45%);
`;

export const BtnAssistir = styled.a`
  padding: 0.75rem 1.563rem;
  color: #000;
  background: white;
  width: 9rem;
  border: 0;
  border-radius: 0.25rem;
  text-decoration: none;
  cursor: pointer;
  &:hover {
    background: #d5dadb;
  }
`;

export const BtnInfo = styled.a`
  padding: 0.8rem;
  color: white;
  font-weight: bold;
  background: #6d6d6eb3;
  width: 9rem;
  border: 0;
  border-radius: 0.25rem;
  text-decoration: none;
  cursor: pointer;
  margin-left: 0.938rem;
  &:hover {
    background: #6f7672;
  }
`;

/**CARD */

export const Movie = styled.img`
  //width: ${props => props.width};
  //height: ${props => props.height};

  width: 12.5rem;
  
  margin-right: 0.938rem;
  transition: transform 0.2s;
  &:hover {
    transform: scale(1.1);
    height: auto;
  }
`;

/**MOVIE LIST */

export const ContainerList = styled.section`
  background-color: #141414;
  padding: 1.25rem 0;
`;

export const SubTitle = styled.h3`
  color: #fff;
  font-size: 1.4vw;
  line-height: 1.25vw;
  margin-left: 6.25rem;
`

export const Carousel = styled.div`
  display: flex;
  align-items: center;
  overflow-x: hidden;
  max-width: 85vw;
  margin: 0 auto;
  scroll-behavior: smooth;
  height: 350px;
`;

export const DivArrow = styled.div`
  display: flex;
  align-items: center;
`

export const Arrow = styled.button`
  width: 3.438rem;
  height: 2.5rem;
  background-color: transparent;
  border: none;
  cursor: pointer;
`;

export const ArrowLeft = styled.button`
  width: 3.438rem;
  height: 2.5rem;
  background-color: transparent;
  border: none;
  cursor: pointer;
  transform: rotate(180deg);
`;