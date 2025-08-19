import { useContext } from "react";

function UseContext2(params) {

    const appcolor=useContext(dataInfo);
    console.log("Value of dataInfo:", appcolor);

    return(

        <>
        <h1 style={{color:appcolor}}>UseContext2</h1>
        </>
    )
    
}

export default UseContext2;