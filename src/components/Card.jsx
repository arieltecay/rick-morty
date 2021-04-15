const Card = ({ characters }) => {
  return (
    <div className="characters">
      {characters &&
        characters.map((char, id) => (
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
  );
};

export default Card;
