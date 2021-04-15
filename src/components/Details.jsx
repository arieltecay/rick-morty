import { useEffect, useState } from "react";
import { useParams } from "react-router";
import Card from "../components/Card";

const Details = () => {
  const { id } = useParams();

  const [details, setDetails] = useState();
  const [characters, setCharacter] = useState();

  useEffect(() => {
    async function fetchData() {
      setCharacter([]);
      async function fetchCharacter(url) {
        await fetch(url)
          .then((response) => response.json())
          .then((character) =>
            setCharacter((characters) => [...characters, character])
          );
      }
      await fetch(`https://rickandmortyapi.com/api/episode/${id}`)
        .then((response) => response.json())
        .then((data) => {
          data.characters.forEach((url) => {
            fetchCharacter(url);
          });
          data.characters.forEach((url) => fetchCharacter(url));
          setDetails(data);
        });
    }
    fetchData();
  }, [id]);

  return (
    <div>
      {details && (
        <div>
          <div className="title">Episode: {details.id}</div>
          <div className="details-name">Name: {details.name}</div>
          <div className="details-name">Air Date: {details.air_date}</div>
          <div className="details-name">
            Characters in Episode: <br />
            {characters ? (
              <div>
                <Card characters={characters} />
              </div>
            ) : (
              <div class="spinner-border" role="status">
                <span class="visually-hidden">Loading...</span>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Details;
