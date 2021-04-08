import logo from "./logo.svg";
import "./App.css";
import HomePage from "./components/home.component.js";
import NavbarComponent from "./components/navbar.component";
import { BrowserRouter as Router, Route } from "react-router-dom";
import AboutUs from "./components/aboutus.component";
import Services from "./components/services.component";
import ContactComponent from "./components/contact.component";
function App() {
  return (
    <Router>
      <NavbarComponent />
      <Route path="/" exact component={HomePage} />
      <Route path="/about-us" exact component={AboutUs} />
      <Route path="/services" exact component={Services} />
      <Route path="/contact" exact component={ContactComponent} />
    </Router>
  );
}

export default App;
