import React from 'react';
import "../src/assets/css/style.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import "aos/dist/aos.css";

import { Switch, Route, Redirect } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Blogs from './components/Blogs';
import Bloginner from './components/Bloginner';
import State from './components/State';
import State1 from './components/State1';
import Hooks from './components/Hooks';
import Sliderone from './components/Sliderone';
import Textslider from './components/Textslider';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Imagegallery from './components/Imagegallery';
import Counter from './components/Counter';
import CounterSkills from './components/CounterSkills';
import Searchbar from './components/Searchbar';
import Accordion from './components/Accordion';

function App() {
	return (
    <>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/blogs" component={Blogs} />
        <Route path="/contact" component={Contact} />
        <Route path="/bloginner" component={Bloginner} />
        <Route path="/state" component={State} />
        <Route path="/state1" component={State1} />
        <Route path="/hooks" component={Hooks} />
        <Route path="/textslider" component={Textslider} />
        <Route path="/sliderone" component={Sliderone} />
        <Route path="/imagegallery" component={Imagegallery} />
        <Route path="/counter" component={Counter} />
        <Route path="/counterskills" component={CounterSkills} />
        <Route path="/searchbar" component={Searchbar} />
        <Route path="/accordion" component={Accordion} />
        
        <Redirect to="/" />
      </Switch>
      <Footer />
    </>
  );
}
export default App;
