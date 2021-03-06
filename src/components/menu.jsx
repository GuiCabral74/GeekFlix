import {
  Title,
  Nav,
  DivList,
  Ul,
  Li,
  IconSvg,
  DivImgs,
  Link,
} from "./styles/styleIndex";
import Search from "./img/lupa2-svg.svg";
import Bell from "./img/bell.svg";

const Menu = () => {
  return (
    <Nav>
      <DivList>
        <Title>GEEKFLIX</Title>
        <Ul>
          <Li><Link href="#">Inicio</Link></Li>
          <Li><Link href="#">Séries</Link></Li>
          <Li><Link href="#">Filmes</Link></Li>
          <Li><Link href="#">Minha lista</Link></Li>
        </Ul>
      </DivList>
      <DivImgs>
        <a href="#"><IconSvg src={Search} alt="Search"/></a>
        <a href="#"><IconSvg src={Bell} alt="Bell" /></a>
        <a href="#"><IconSvg style={{"width": "45px","marginTop": "15px" }}
          src="https://img.icons8.com/glyph-neue/64/000000/name.png"
          alt="Perfil"
        /></a>
      </DivImgs>
    </Nav>
  );
};

export default Menu;