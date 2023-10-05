import CustomScript from "./modules/CustomScript";
import { useEffect } from "react";
const Contact = () => {
    useEffect(() => {
        let observer = new window.IntersectionObserver(function (entries, self) {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              loadImages(entry.target);
              self.unobserve(entry.target);
            }
          });
        });
    
        const imgs = document.querySelectorAll("section");
        imgs.forEach((img) => {
          observer.observe(img);
        });
        return () => {
          imgs.forEach((img) => {
            observer.unobserve(img);
          });
        };
    }, []);    
    const loadImages = (image) => {
        image.style = `width:${image.dataset.width}`;
        
        if(image.hasAttribute("data-width")){
            image.removeAttribute("data-width");
        }
    };
    const DataPropsdata = [
        {
            text : "Contact Us 1",
            link : () => window.open('https://react.dev/')
        },
        {
            text : "Contact Us 2",
            link : () => window.open('https://react.dev/')
        },
        {
            text : "Contact Us 3",
            link : () => window.open('https://react.dev/')
        }
    ];
    function DataPropsTag(props) {
        return(
            <>
                <section data-width="100%">
                    <div className="container">
                        <div className="row">
                            <div className="col-xs-12">
                                <div className="row">
                                <div className="col-xs-12">
                                    <div className="row">
                                        <div className="col-xs-12" onClick={props.link}>
                                            <p>{props.text}</p>
                                        </div>
                                        <div className="col-xs-12"><a onClick={(e) => {e.target.closest(".container").classList.toggle("active")}}>{props.text} Click here...</a></div>
                                    </div>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        )
    }
    return(
        <>
            <CustomScript>
                {
                    DataPropsdata.map((val, KeyName) => {
                        return <DataPropsTag key={KeyName} text={val.text} link={val.link} />
                    })
                }
            </CustomScript>
        </>
    )
}
export default Contact;