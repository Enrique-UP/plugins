import Logo1 from "../../assets/images/logos/logo-1.png";
import Logo2 from "../../assets/images/logos/logo-2.png";
import Logo3 from "../../assets/images/logos/logo-3.png";
import Logo4 from "../../assets/images/logos/logo-4.png";
import Logo5 from "../../assets/images/logos/logo-5.png";
const Identity = () => {
    return (
        <>
            <section className="identity_area">
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                            <ul>
                                <li data-aos="fade-left"><img src={Logo1} /></li>
                                <li data-aos="fade-left"><img src={Logo2} /></li>
                                <li data-aos="fade-up"><img src={Logo3} /></li>
                                <li data-aos="fade-right"><img src={Logo4} /></li>
                                <li data-aos="fade-right"><img src={Logo5} /></li>
                            </ul>
                        </div>{/*--cols--*/}
                    </div>{/*--row--*/}
                </div>{/*--container--*/}
            </section>
        </>
    )
}
export default Identity;