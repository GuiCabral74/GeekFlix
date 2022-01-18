import { Section, Content, ContentTitle, ContentP, BtnAssistir, BtnInfo, Clasificacao } from "./styles/styleIndex";

const Banner = () => {
  return <Section>
    <Content>
      <ContentTitle>Star Wars: Episodio 2 <br/> Ataque dos clones</ContentTitle>
      <ContentP>Dez anos após a tentativa frustrada de invasão do planeta Naboo, Obi-Wan Kenobi, Anakin Skywalker e Padmé Amidala estão juntos novamente. Neste período de tempo Obi-Wan passou de aprendiz a professor dos ensinamentos jedi para Anakin, sendo que ambos foram...</ContentP>
      <BtnAssistir>Assistir</BtnAssistir>
      <BtnInfo>Mais Informações</BtnInfo>
    </Content>
  </Section>
}

export default Banner;