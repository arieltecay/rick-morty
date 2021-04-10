import { useEffect, useState } from "react";
import Table from "../components/Table";

const Episodes = () => {
  const [episode, setEpisode] = useState();
  const [pages, setPages] = useState(1);

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/episode?page=${pages}`)
      .then((response) => response.json())
      .then((data) => setEpisode(data.results));
  }, [pages]);

  const nextPage = () => {
    if (pages < 3) {
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
        {episode && <div className="name">{pages} de 3</div>}
        <div onClick={nextPage}>
          <button className="btn btn-success mt-2">Right</button>
        </div>
      </div>
      <Table
        title="Episodes"
        titleTable={["id", "Air Date", "Episode", "Name", "Url"]}
        bodyEpisode={episode}
      />
    </div>
  );
};

export default Episodes;
