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
  margin: 15px;
  width: 150px;
`;

export const Ul = styled.ul`
  width: 300px;
  padding-left: 0;
  display: flex;
  justify-content: space-between;
`;

export const Li = styled.li`
  list-style: none;
`;

export const IconSvg = styled.img`
  width: 22px;
`;

export const DivImgs = styled.div`
  width: 150px;
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
  padding: 150px 0 100px 50px;
`;

export const ContentTitle = styled.h1`
  font-size: 60px;
`;

export const ContentP = styled.p`
  font-size: 1.4vw;
  width: 520px;
  text-shadow: 2px 2px 4px rgb(0 0 0 / 45%);
`;

export const BtnAssistir = styled.button`
  padding: 0.8rem;
  color: #000;
  background: white;
  width: 144px;
  border: 0;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background: #d5dadb;
  }
`;

export const BtnInfo = styled.button`
  padding: 0.8rem;
  color: white;
  font-weight: bold;
  background: #6d6d6eb3;
  width: 144px;
  border: 0;
  border-radius: 4px;
  cursor: pointer;
  margin-left: 15px;
  &:hover {
    background: #6f7672;
  }
`;

/**CARD */

export const Movie = styled.img`
  width: 235px;
  height: 350px;
  margin-right: 15px;
`;

/**MOVIE LIST */

export const ContainerList = styled.section`
  background-color: #141414;
  padding-top: 20px;
`;

export const Carousel = styled.div`
  display: flex;
  overflow-x: hidden;
  max-width: 85vw;
  margin: 0 auto;
  scroll-behavior: smooth;
`;

export const DivArrow = styled.div`
  display: flex;
  align-items: center;
`

export const Arrow = styled.button`
  width: 55px;
  height: 40px;
  background-color: transparent;
  border: none;
  cursor: pointer;
`;

export const ArrowLeft = styled.button`
  width: 55px;
  height: 40px;
  background-color: transparent;
  border: none;
  cursor: pointer;
  transform: rotate(180deg);
`;
