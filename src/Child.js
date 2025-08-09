function Child(props) {
    console.log(props);
    
    return(
        <>
        <h3>Child Component</h3>
        {
            <h3>{props.text}</h3>
        }
        <button onClick={() => props.sendData("Hello From Child")}>send to Parent</button>
        </>
    )
    
}
export default Child;