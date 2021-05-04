import "./App.css";
import HomePage from "./components/home.component.js";
import NavbarComponent from "./components/navbar.component";
import { BrowserRouter as Router, Route } from "react-router-dom";
import AboutUs from "./components/aboutus.component";
import Gallery from "./components/gallery.component";
import ContactComponent from "./components/contact.component";
function App() {
  return (
    <Router>
      <NavbarComponent />
      <Route path="/" exact component={HomePage} />
      <Route path="/about-us" exact component={AboutUs} />
      <Route path="/gallery" exact component={Gallery} />
      <Route path="/contact" exact component={ContactComponent} />
    </Router>
  );
}

export default App;
