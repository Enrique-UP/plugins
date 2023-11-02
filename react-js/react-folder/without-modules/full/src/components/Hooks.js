import React,{useEffect, useState} from "react";
import Loader from "./Loader";
import Aos from "aos";

function Hooks(){
    const [name, setName]=useState("anil");
    const [age, setAge]=useState(26);
    useEffect(()=>{
        console.warn("hello from hook");
    },[age])
    let data="hooks"
    return(
        <>
            <Loader />
            <section className="content">
                <div className="container">
                    <h1>{data}</h1>
                    <h2>Name: {name}</h2>
                    <h2>Age: {age}</h2>
                    <button onClick={()=>setName("ABC")}>Update</button>
                    <button onClick={()=>setAge(62)}>Update</button>
                </div>
            </section>
        </>
    )
}
export default Hooks;