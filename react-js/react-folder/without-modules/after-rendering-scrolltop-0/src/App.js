import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import Header from "./pages/include/Header";
import Footer from "./pages/include/Footer";
import Home from "./pages/Home";
import Aboutus from "./pages/Aboutus";
import Contactus from "./pages/Contactus";
import ScrollToTop from "./ScrollToTop";
const App = () => {
  return (
    <Router>
      <ScrollToTop>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={Aboutus} />
          <Route exact path="/contact" component={Contactus} />
          <Redirect to="/" />
        </Switch>
        <Footer />
        </ScrollToTop>
    </Router>
  );
}
export default App;
