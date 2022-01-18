import Banner from "./components/banner";
import MovieList from "./components/movieList";
import Menu from "./components/menu";


import { GlobalStyle } from "./components/styles/styleIndex";


function App() {
  return (
    <div>
      <GlobalStyle />
      <Menu />
      <Banner />
      <MovieList />
    </div>
  );
}

export default App;
