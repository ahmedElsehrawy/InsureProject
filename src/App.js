import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import How from "./pages/How";
import Blog from "./pages/Blog";
import Account from "./pages/Account";
import Footer from "./components/Footer";
import { useState } from "react";
import Aside from "./components/Aside";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const closeAside = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="App">
      <Router>
        <Navbar isOpen={isOpen} closeAside={closeAside} />
        {isOpen ? (
          <Aside closeAside={closeAside} />
        ) : (
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/how-we-work" component={How} />
            <Route path="/blog" component={Blog} />
            <Route path="/account" component={Account} />
          </Switch>
        )}
        {!isOpen ? <Footer /> : null}
      </Router>
    </div>
  );
}

export default App;
