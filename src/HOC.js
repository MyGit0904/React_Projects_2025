import { useState } from "react"


function HOC() {

    return(

        <>
        <HOCRed cmp={Counter}/>
        </>

    )
    
}

function HOCRed(props) {

    return(

        <>
        <h1 style={{color: "red", backgroundColor: "yellow"}}>
        <props.cmp/>
        </h1>
        
        </>

    )
    
}



function Counter(props) {

    let[count ,setCounter]=useState(0);

    return(

        <>

        <h2>count {count}</h2>
        <button type="" onClick={() => setCounter(count + 1)}>CounterClick</button>

        </>

    )
    
}

export default HOC;