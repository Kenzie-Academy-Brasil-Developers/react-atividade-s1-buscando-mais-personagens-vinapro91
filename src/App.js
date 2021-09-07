import { useEffect, useState } from "react";
import "./App.css";
import Chacarcters from "./components/Characters";
function App() {
  const [characterList, setCharacterList] = useState([]);
  const [page, setPage] = useState(1);
  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/?page=${page}`)
      .then((response) => response.json())
      .then((response) => setCharacterList(response.results))
      .catch((err) => console.log(err));
  }, [page]);
  const previousPage = () => {
    page > 1 && setPage(page - 1);
  };
  const nextPage = () => {
    setPage(page + 1);
    console.log(page);
  };

  return (
    <div className="App">
      <Chacarcters characterList={characterList} />
      <button onClick={previousPage}>Previous Page</button>
      <button onClick={nextPage}>Next Page</button>
    </div>
  );
}

export default App;
