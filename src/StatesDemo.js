import React, {useState} from "react";
const StateDemo =()=>{
    // let age=25;
    const [age, setAge] = useState(25);

    function updatedage(){
        setAge(30);
    }
    //state is use to show the updated value in react
    return(
        <>
        <h1>My age is:{age}</h1>
        <button onClick={updatedage} className="btn btn-warning">Update Age</button>
        
        </>
    )

}
export default StateDemo;