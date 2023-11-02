import React from "react";
import {Helmet} from "react-helmet";
import {NavLink} from "react-router-dom";
import Banner_line from "./include/Banner_line";
import Left_sidebar from "./include/Left_sidebar";
import Right_sidebar from "./include/Right_sidebar";
import Bottom_counter from "./include/Bottom_counter";


import SimpleReactLightbox from 'simple-react-lightbox';
import { SRLWrapper } from "simple-react-lightbox";
import Gallery_tag from "./gallery/Gallery_tag";
import Gallery_persons from "./gallery/Gallery_persons";

const Image_gallery = () => {
    return (
        <>
            <Helmet>
                <title>Image Gallery | OHIO</title>
            </Helmet>
            <Banner_line pagename="About Us" tagline="OHIO - Image Gallery" />
            <section className="main_container res_margin">
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                            <div className="right_area for_right_sidebar_padding">
                                <Left_sidebar />
                                <div className="middle_area">
                                    <ol className="breadcrumb">
                                        <li><NavLink to="/">Home</NavLink></li>
                                        <li><NavLink to="/about">About Us</NavLink></li>
                                        <li>OHIO - Image Gallery</li>
                                    </ol>
                                    <h1 className="heading">OHIO - Image Gallery</h1>
                                    <SimpleReactLightbox>
                                        <SRLWrapper>
                                            <div className="row management_area_col-xs-responsive">
                                                {
                                                    Gallery_persons.map((val, ind) => {
                                                        return <Gallery_tag key={ind} dp={val.dp} />
                                                    })
                                                }
                                            </div>{/*--row--*/}
                                        </SRLWrapper>
                                        </SimpleReactLightbox>
                                    <Bottom_counter />               
                                </div>{/*--middle_area--*/}
                                <Right_sidebar />
                            </div>{/*--right_area--*/}
                        </div>{/*--cols--*/}
                    </div>{/*--row--*/}
                </div>{/*--container--*/}
            </section>{/*--main_container--*/}
        </>
    )
}
export default Image_gallery;