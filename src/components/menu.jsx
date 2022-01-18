import {
  Title,
  Nav,
  DivList,
  Ul,
  Li,
  IconSvg,
  DivImgs,
} from "./styles/styleIndex";
import lupa from "./img/lupa2-svg.svg";
import sino from "./img/bell.svg";

const Menu = () => {
  return (
    <Nav>
      <DivList>
        <Title>GEEKFLIX</Title>
        <Ul>
          <Li>Inicio</Li>
          <Li>Séries</Li>
          <Li>Filmes</Li>
          <Li>Minha lista</Li>
        </Ul>
      </DivList>
      <DivImgs>
        <IconSvg src={lupa} />
        <IconSvg src={sino} alt="sino" />
        <IconSvg style={{"width": "45px"}}
          src="https://img.icons8.com/glyph-neue/64/000000/name.png"
          alt="Perfil"
        />
      </DivImgs>
    </Nav>
  );
};

export default Menu;
