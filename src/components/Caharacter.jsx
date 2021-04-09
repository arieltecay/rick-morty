import { useEffect, useState } from "react";

const Caharacter = () => {
  const [character, setCharacter] = useState();
  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character")
      .then((response) => response.json())
      .then((data) => setCharacter(data.results));
  }, []);
  return (
    <div className="container">
      <div className="container-pagination">
        <div>Prev</div>
        <div>Next</div>
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
