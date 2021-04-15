import { useEffect, useState } from "react";
import Table from "../components/Table";

const Location = () => {
  const [location, setLocation] = useState();
  const [pages, setPages] = useState(1);
  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/location?page=${pages}`)
      .then((response) => response.json())
      .then((data) => setLocation(data.results));
  }, [pages]);
  const nextPage = () => {
    if (pages < 6) {
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
        {location && <div className="name">{pages} de 6</div>}
        <div onClick={nextPage}>
          <button className="btn btn-success mt-2">Right</button>
        </div>
      </div>
      <Table
        title="Location"
        titleTable={["id", "Dimension", "Name", "Type"]}
        bodyLotation={location}
      />
    </div>
  );
};

export default Location;
