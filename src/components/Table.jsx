import { Link } from "react-router-dom";

const Table = ({ title, titleTable, bodyLotation, bodyEpisode }) => {
  return (
    <div id="box">
      <main id="center">
        <h1 className="name">{title}</h1>
        <table className="table table-striped">
          <thead>
            <tr className="name">
              {titleTable.map((tit) => (
                <th scope="col">{tit}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {bodyLotation &&
              bodyLotation.map((bod) => (
                <tr key={bod.id}>
                  <th scope="row">{bod.id}</th>
                  <td>{bod.dimension}</td>
                  <td>{bod.name}</td>
                  <td>{bod.type}</td>
                </tr>
              ))}
            {bodyEpisode &&
              bodyEpisode.map((bod) => (
                <tr key={bod.id}>
                  <th scope="row">{bod.id}</th>
                  <td>{bod.air_date}</td>
                  <td>{bod.episode}</td>
                  <td>{bod.name}</td>
                  <td>
                    <Link to={`/details/${bod.id}`}>
                      <button className="btn btn-secondary">Detalles</button>
                    </Link>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </main>
    </div>
  );
};

export default Table;
