import {useEffect} from "react";
import Aos from "aos";
function Footer() {
    useEffect(() => {
        Aos.init({duration:1000});
    }, []);
    return (
        <>
            <footer>
                <div class="container">
                    <div class="row">
                        <div class="col-xs-12">
                            Copyright &copy; <span></span> with all rights reserved.
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}
export default Footer;