import {useEffect} from "react";
import React from "react";
import Common from "./Common";
import Card from "./Card";
import Sdata from "./Sdata";
import Loader from "./Loader";
import Aos from "aos";
function Blogs() {
    useEffect(() => {
        Aos.init({duration:1000});
    }, []);
    return (
        <>
            <Loader />
            <Common name="Blogs" />
            <section className="content">
                <div className="container">
                    <h1 className="heading">Blogs</h1>
                    <div className="row">
                        {
                            Sdata.map((val, ind) => {
                                return <Card key={ind} imgsrc={val.imgsrc} title={val.title} text={val.text} />
                            })
                        }
                    </div>
                </div>
            </section>
        </>
    )
}
export default Blogs;