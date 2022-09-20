import "./App.css";
import Header from "./Components//Header/Header";
import Home from "./Components/Routes/Home";
import About from "./Components/Routes/About";
import { Route } from "react-router-dom";
import Contact from "./Components/Routes/Contact";
function App() {
  return (
    <div>
      <Header />
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/about">
        <About />
      </Route>
      <Route path="/contact">
        <Contact />
      </Route>
    </div>
  );
}

export default App;
