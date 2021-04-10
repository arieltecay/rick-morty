import { useEffect, useState } from "react";

const Caharacter = () => {
  const [character, setCharacter] = useState();
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
      <div className="characters">
        {character &&
          character.map((char, id) => (
            <div key={id} className="box">
              <img src={char.image} alt="" />
              <div className="character">
                <div className="name">{char.name}</div>
                <div className="specie">{char.species}</div>
                <div className="status">{char.status}</div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Caharacter;
