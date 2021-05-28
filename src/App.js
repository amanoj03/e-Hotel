import "./App.css";
import HomePage from "./components/home.component.js";
import NavbarComponent from "./components/navbar.component";
import { BrowserRouter as Router, Route } from "react-router-dom";
import AboutUs from "./components/aboutus.component";
import Gallery from "./components/gallery.component";
import FeedBackComponent from "./components/feedback.component";
import BookComponent from "./components/book.component";
import AdminLoginComponent from "./components/admin.login.component";
import AdminDashboardComponent from "./components/admin.dashboard.component";
import ErrorComponent from "./components/error.component";
function App() {
  return (
    <Router>
      <NavbarComponent />
      <Route path="/" exact component={HomePage} />
      <Route path="/about-us" exact component={AboutUs} />
      <Route path="/gallery" exact component={Gallery} />
      <Route path="/feedback" exact component={FeedBackComponent} />
      <Route path="/book" exact component={BookComponent} />
      <Route path="/admin-login" exact component={AdminLoginComponent} />
      <Route
        path="/admin-dashboard"
        exact
        component={AdminDashboardComponent}
      />
      <Route path="/error" exact component={ErrorComponent} />
    </Router>
  );
}

export default App;
