import React from "react";
import {Helmet} from "react-helmet";

import Slider from "./home/Slider";
import Short_links from "./home/Short_links";
import About_our_university from "./home/About_our_university";
import Icon_text from "./home/Icon_text";
import Add_boxes from "./home/Add_boxes";
import Upcoming_events from "./home/Upcoming_events";
import Search_course from "./home/Search_course";
import Identity from "./home/Identity";
const Home = () => {
    return(
        <>
            <Helmet>
                <title>Home | OHIO</title>
            </Helmet>
            <Slider />
            <Short_links />
            <About_our_university />
            <Icon_text />
            <Add_boxes />
            <Upcoming_events />
            <Search_course />
            <Identity />
        </>
    )
}
export default Home;