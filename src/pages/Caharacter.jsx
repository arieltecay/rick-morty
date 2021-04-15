import { useEffect, useState } from "react";
import Card from '../components/Card'

const Caharacter = () => {
  const [characters, setCharacter] = useState();
  const [pages, setPages] = useState(1);
  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character?page=${pages}`)
      .then((response) => response.json())
      .then((data) => setCharacter(data.results));
  }, [pages]);
  const nextPage = () => {
    if (pages < 34) {
      setPages(pages + 1);
    } else {
      alert("Fin!!");
    }
  };
  const prevPage = () => {
    if (pages > 1) {
      setPages(pages - 1);
    } else {
      alert("Fin!!");
    }
  };
  return (
    <div className="container">
      <div className="container-pagination">
        <div onClick={prevPage}>
          <button className="btn btn-success mt-2">Left</button>
        </div>
        <div className="name">{pages} de 34</div>
        <div onClick={nextPage}>
          <button className="btn btn-success mt-2">Right</button>
        </div>
      </div>
      <div>
        <Card characters={characters} />
      </div>
    </div>
  );
};

export default Caharacter;
