import User from './User'
function myfunc() {

    let a=10;
    let b=2;
    console.log(a+b);

    return(
        <>
            <h1>{a+b}</h1>
            {
                <h1><User /></h1>
            }
        </>
    )
    
}
export default myfunc;