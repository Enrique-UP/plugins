import React from 'react';

import './App.css';
import "wowjs/css/libs/animate.css";


//Calling WOWjs
import WOW from 'wowjs';


class App extends React.Component {

// Defining WOW 
componentDidMount() {
  new WOW.WOW({
    live: false
}).init();
}
  
render() {
  return (

    //Wow js animation in HTML
    <div className="container text-center">
      <div className="jumbotron bg-sky">
      <h1>ReactJs</h1>
      <p>Animmations with WOWjs</p> 
    </div>
      <div className="row">
        <div className="col-sm-4 wow bounceInDown center" data-wow-delay="0.5s">
        <p className="circle bg-yellow">very ES	</p>
        </div>
        <div className="col-sm-4">
          <img className="wow fadeInDown img-thumbnail" data-wow-delay="0.5s" src="https://wowjs.uk/img/wow-logo.jpg" />  
        </div>
        <div className="col-sm-4 wow bounceInDown center" data-wow-delay="0.5s">
        <p className="circle bg-yellow">very ES	</p>
        </div>  
        <div className="col-sm-4 wow bounceInUp center" data-wow-delay="0.5s">
        <p class="circle bg-green">3 KiB only	</p>
        </div>
        <div className="col-sm-4">
          <img className="wow fadeInDown img-thumbnail" data-wow-delay="0.5s" src="https://wowjs.uk/img/wow-logo.jpg" />  
        </div>
        <div className="col-sm-4 wow bounceInUp center" data-wow-delay="0.5s">
        <p class="circle bg-green">3 KiB only	</p>
        </div>  
        <div className="col-sm-4 wow bounceInRight" data-wow-delay="0.5s">
        <p class="circle bg-red">so impress</p>
        </div>
        <div className="col-sm-4">
          <img className="wow fadeInDown img-thumbnail" data-wow-delay="0.5s" src="https://wowjs.uk/img/wow-logo.jpg" />  
        </div>
        <div className="col-sm-4 wow bounceInRight" data-wow-delay="0.5s">
        <p class="circle bg-red">so impress</p>
        </div>  
      </div>
  </div>
  );
  
}

}
export default App;