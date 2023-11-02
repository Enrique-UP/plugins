import React, {useState} from "react";
import Common from "./Common";
import Loader from "./Loader";
function State(){
    const [data, setData]=useState("NMN")
    
    function updateData()
    {
        setData("ARF")
    }

    function bgChange(){
        alert("Hi");
    }

    const [status, setStatus]=React.useState(true)

    return(
        <>
            <Loader />
            <Common name="State" />
            <section className="content">
                <div className="container">
                    <h1 className="heading">State</h1>
                    <p>{data}</p>
                    <button onClick={updateData}>Update Data</button>

                    <button onClick={bgChange}>Click Me</button>
                    <br />
                    {
                        status? <h1>Hide</h1>:null
                    }
                    <button onClick={()=>setStatus(false)}>Hide</button>
                    <button onClick={()=>setStatus(true)}>Show</button>
                    <button onClick={()=>setStatus(!status)}>Toggle</button>
                </div>
            </section>
        </>
    )
}
export default State;