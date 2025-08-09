import Child from "./Child";
import React, {useState} from "react";
function Parent(){
    let message ="Parent passing variable to child";

    const [data , setdata] = useState("");
    const getDataFromChild=(value)=>{
        console.log(value);
    }

    return(
        <>
        {
            <h1>Parent component</h1>
        }
        <p>Child says :{data}</p>
        <Child text={message}/>
        <Child sendData={getDataFromChild}/>
        </>
    );
}

export default Parent;