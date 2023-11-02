import loader from "../assets/images/loader.gif";
import $ from "jquery";

const Loader = () => {
  
  setInterval(function(){
    $(".loader").fadeOut();
  }, 1000);

  return(
    <>
      <div className="loader">
        <img src={loader} />
      </div>
    </>
  )
};
export default Loader;