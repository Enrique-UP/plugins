import {useEffect} from "react";
import React from "react";
import State from "./State";
import Loader from "./Loader";

class State1 extends React.Component{
    constructor(){
        super();
        this.state={
            name:"Name",
            age:26
        }
    }
    componentDidMount(){
        console.warn("Did Mount");
    }
    componentDidUpdate(){
        alert("Name is updated.");
    }
    
    render(){
        console.warn("Render");
        const nm="ABCDEF";
        
        return(
            <>        
                <Loader />    
                <section className="content">
                    <div className="container">
                        <h1>{this.state.name}</h1>
                        <h2>{this.state.age}</h2>
                        <button onClick={()=>{this.setState({name:"Anil"})}}>Update</button>
                        <br /><br />
                        <p>{nm}</p>
                        
                    </div>
                </section>
            </>
        )
    }
}
export default State1;