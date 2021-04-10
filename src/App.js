import Caharacter from "./pages/Caharacter";
import Header from "./pages/Header";
import Location from './pages/Location'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import './main.scss'
import NavBar from "./pages/NavBar";
import Episodes from "./pages/Episodes";
import Details from "./components/Details";
function App() {
  return (
    <div className="App">
      <Router>
          <Header title={"Api Rick & Morty"} />
          <NavBar />
        <Switch>
          <Route exact path="/" component={Caharacter} />
          <Route exact path="/location" component={Location} />
          <Route exact path="/episodes" component={Episodes} />
          <Route exact path="/details/:id" component={Details} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
