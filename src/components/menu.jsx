import { Title, Nav, Ul, Li, IconSvg } from "./styles/styleIndex";
import lupa from "./img/lupa-svg.svg";
import sino from "./img/sino.png";

const Menu = () => {
  return (
    <Nav>
      <Title>GEEKFLIX</Title>
      <Ul>
        <Li>Inicio</Li>
        <Li>Séries</Li>
        <Li>Filmes</Li>
        <Li>Minha lista</Li>
      </Ul>
      <IconSvg src={lupa}/>
      <IconSvg src={sino} alt="sino"/>
      <IconSvg src="https://img.icons8.com/glyph-neue/64/000000/name.png" alt="Perfil"/>
    </Nav>
  );
};

export default Menu;