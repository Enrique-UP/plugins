import React, { useState, useEffect } from 'react';
const Fixed_area = () => {
    const [show, setShow] = useState(false);
    const rightcontact = () => {
        if (window.scrollY >= 550 && window.scrollY <= 1000 ) {
            setShow(true)
        }else{
            setShow(false)
        }
    }
    useEffect(() => {
        window.addEventListener('scroll', rightcontact)
        /*return () => {
            window.removeEventListener('scroll', rightcontact)
        }*/
    }, []);
    return(
        <>
            <div className="fixed_area">
                <div className={`main_fixed_area top1 ${show && 'fixed1'}`} id="main_fixed_area1">
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

export default Fixed_area;