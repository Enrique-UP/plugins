import React, { useState, useEffect } from 'react';


const Left_sidebar = () => {
    const [show, setShow] = useState(false);
    const controlNavbar = () => {
        if (window.scrollY > 550 && window.scrollY <= 1000 ) {
            setShow(true)
        }else{
            setShow(false)
        }
    }
    useEffect(() => {
        window.addEventListener('scroll', controlNavbar)
        return () => {
            window.removeEventListener('scroll', controlNavbar)
        }
    }, []);
    return (
        <>
            <div className="fixed_area">
                <div className={`main_fixed_area top2 ${show && 'fixed2'}`}>
                    <label className="save">
                        <input type="checkbox" />
                        <div className="star_text">
                            <span className="show_text">Save</span><span className="hide_text">Saved</span> to favorites
                            <i className="fa star fa-star-o"></i>
                            <i className="fa star fa-star"></i>
                        </div>{/*--star_text--*/}
                    </label>
                    <div className="share_area">
                        <span>Share</span>
                        <a href="https://facebook.com/" target="_blank" className="fa fa-facebook"></a>
                        <a href="https://twitter.com/" target="_blank" className="fa fa-twitter"></a>
                        <a href="https://linkedin.com/" target="_blank" className="fa fa-linkedin"></a>
                        <a href="https://www.pinterest.com/" target="_blank" className="fa fa-pinterest"></a>
                        <a href="mailto:demo@example.com" target="_blank" className="fa fa-envelope"></a>
                    </div>{/*--share_area--*/}
                </div>{/*--main_fixed_area--*/}
            </div>{/*--fixed_area--*/}
        </>
    )
}
export default Left_sidebar;