import { Section, Content, ContentTitle, ContentP, BtnAssistir, BtnInfo } from "./styles/styleIndex";

const Banner = () => {
  return <Section>
    <Content>
      <ContentTitle>Star Wars: Episodio 2 <br/> Ataque dos clones</ContentTitle>
      <ContentP>Dez anos após a tentativa frustrada de invasão do planeta Naboo, Obi-Wan Kenobi, Anakin Skywalker e Padmé Amidala estão juntos novamente. Neste período de tempo Obi-Wan passou de aprendiz a professor dos ensinamentos jedi para Anakin, sendo que ambos foram...</ContentP>
      <BtnAssistir target="_blanck" href="https://www.disneyplus.com/pt-br/movies/star-wars-ataque-dos-clones-episodio-ii/mgpYHGnzZW6N">Assistir</BtnAssistir>
      <BtnInfo target="_blanck" href="https://deveserisso.com.br/blog/star-wars-episodio-ii-ataque-dos-clones-e-bom-e-vale-a-pena-assistir-confira-trailer-sinopse-e-mais/#:~:text=Sinopse%3A%20Dez%20anos,para%20se%20apaixonarem.">Mais Informações</BtnInfo>
    </Content>
  </Section>
}

export default Banner;