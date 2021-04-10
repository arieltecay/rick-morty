import { Link } from "react-router-dom";
const NavBar = () => {
  return (
    <div className="routes-names">
      <Link to="/" className="enlaces">Character</Link>
      <Link to="/episodes" className="enlaces">Episodes</Link>
      <Link to="/location" className="enlaces">Location</Link>
    </div>
  );
};

export default NavBar;
