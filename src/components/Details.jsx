import { useEffect, useState } from "react";
import { useParams } from "react-router";

const Details = () => {
  const { id } = useParams();

  const [details, setDetails] = useState();
  /* const [characters, setCharacter] = useState(); */
  useEffect(() => {
    const data = fetch(`https://rickandmortyapi.com/api/episode/${id}`);
    const dataDetails = data.json();
    setDetails(dataDetails);
  }, [id]);

  /*   const fetchCharacters = async()=>{
    const data = await fetch
  } */

  return (
    <div>
      {details && (
        <div>
          <div>Episode: {details.id}</div>
          <div>Name: {details.name}</div>
          <div>Air Date: {details.air_date}</div>
          {/* Problema para mostrar los datos de los personajes ya que ya se consumpio la api */}
          <div>
            Characters in Episode: <br />
            {details.characters}
          </div>
          {/* *********************************************************************************/}
        </div>
      )}
    </div>
  );
};

export default Details;
