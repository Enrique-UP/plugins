import React from "react";
import {useEffect} from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import "aos/dist/aos.css";
import Aos from "aos";
import "./assets/css/style.css";
import "fontawesome-4.7/css/font-awesome.min.css";
import "bootstrap/dist/css/bootstrap.min.css";




import Rendertotop from "./components/include/Rendertotop";
import Scrolltotop from "./components/include/Scrolltotop";
import Header from "./components/include/Header";
import Footer from "./components/include/Footer";
import Home from "./components/Home";
import About from "./components/About";
import Location from "./components/Location";
import Image_gallery from "./components/Image_gallery";
import Mission_vision from "./components/Mission_vision";
import Accreditation from "./components/Accreditation";
import President_message from "./components/President_message";
import Management from "./components/Management";
import Why_ohio from "./components/Why_ohio";
import Payment from "./components/Payment";
import Contact_us from "./components/Contact_us";
import Login from "./components/Login";
import Register from "./components/Register";
import Enrollment_verification from "./components/Enrollment_verification";
import Student_grievances from "./components/Student_grievances";
import Diversity_policy from "./components/Diversity_policy";
import Credit_transfer_policy from "./components/Credit_transfer_policy";
import Credit_hour_policy from "./components/Credit_hour_policy";
import Admission_process from "./components/Admission_process";
import Exams_results from "./components/Exams_results";
import Research_publication from "./components/Research_publication";
import Tution_fees from "./components/Tution_fees";
import Scholarship from "./components/Scholarship";
import Alumni_experience from "./components/Alumni_experience";
import Jobs from "./components/Jobs";
import Refund_policy from "./components/Refund_policy";
import Terms_conditions from "./components/Terms_conditions";
import Privacy_policy from "./components/Privacy_policy";
import Faq from "./components/Faq";
import Blogs from "./components/Blogs";
import Blog_detail from "./components/Blog_detail";
import News_events from "./components/News_events";
import News_events_detail from "./components/News_events_detail";
import Research_articles from "./components/Research_articles";
import Research_articles_detail from "./components/Research_articles_detail";
import Program_detail from "./components/Program_detail";
 import Phd from "./components/Phd";
 import Mba from "./components/Mba";
 import Ex_mba from "./components/Ex_mba";
 import Cs from "./components/Cs";
 import Mph from "./components/Mph";
 import Mpa from "./components/Mpa";
import Programs from "./components/Programs";






const App = () => {
  useEffect(() => {
    Aos.init({duration:1000});
  }, []);
  return (
    <>
      <Router>
        <Rendertotop>
          <Header />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/location" component={Location} />
            <Route exact path="/image-gallery" component={Image_gallery} />
            <Route exact path="/mission-vision" component={Mission_vision} />
            <Route exact path="/accreditation" component={Accreditation} />
            <Route exact path="/president-message" component={President_message} />
            <Route exact path="/management" component={Management} />
            <Route exact path="/why-ohio" component={Why_ohio} />
            <Route exact path="/payment" component={Payment} />
            <Route exact path="/contact" component={Contact_us} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/enrollment-verification" component={Enrollment_verification} />
            <Route exact path="/student-grievances" component={Student_grievances} />
            <Route exact path="/diversity-policy" component={Diversity_policy} />
            <Route exact path="/credit-transfer-policy" component={Credit_transfer_policy} />
            <Route exact path="/credit-hour-policy" component={Credit_hour_policy} />
            <Route exact path="/admission-process" component={Admission_process} />
            <Route exact path="/exams-results" component={Exams_results} />
            <Route exact path="/research-publication" component={Research_publication} />
            <Route exact path="/tution-fees" component={Tution_fees} />
            <Route exact path="/scholarship" component={Scholarship} />
            <Route exact path="/alumni-experience" component={Alumni_experience} />
            <Route exact path="/jobs" component={Jobs} />
            <Route exact path="/refund-policy" component={Refund_policy} />
            <Route exact path="/terms-conditions" component={Terms_conditions} />
            <Route exact path="/privacy-policy" component={Privacy_policy} />
            <Route exact path="/faq" component={Faq} />
            <Route exact path="/blogs" component={Blogs} />
            <Route exact path="/blog-detail" component={Blog_detail} />
            <Route exact path="/news-events" component={News_events} />
            <Route exact path="/news-events-detail" component={News_events_detail} />
            <Route exact path="/research-articles" component={Research_articles} />
            <Route exact path="/research-articles-detail" component={Research_articles_detail} />
            <Route exact path="/program-detail" component={Program_detail} />
            <Route exact path="/phd" component={Phd} />
            <Route exact path="/mba" component={Mba} />
            <Route exact path="/ex-mba" component={Ex_mba} />
            <Route exact path="/cs" component={Cs} />
            <Route exact path="/mph" component={Mph} />
            <Route exact path="/mpa" component={Mpa} />
            <Route exact path="/programs" component={Programs} />
            <Redirect to="/" />
          </Switch>
          <Scrolltotop />
          <Footer />
        </Rendertotop>
      </Router>
    </>
  );
}
export default App;
