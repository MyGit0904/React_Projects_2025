import { useState } from "react"

const GetInputVal_state=()=>{

    const [email,setEmail]=useState('');
    const [display, setdisplay]=useState('');

    function getValueByChange(event) {
        
        console.log(event.target.value);

        setEmail(event.target.value);

    }

    function getUserValue() {
        
        setdisplay(email);
    }



    return(
        <>
        
        <input onClick={getValueByChange} placeholder="name" />
        <button type="" onClick={getUserValue}>Subscribe</button>
        <h1>welcome {display}</h1>

        </>
    )


}
export default GetInputVal_state;