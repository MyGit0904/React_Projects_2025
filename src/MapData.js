function myfun1() {
    
    let lang=["java","React",".net","angular"];

    return(
        <>
        <h1>{lang.map((item)=>(<h2>{item}</h2>))}</h1>
        </>
    )
}
export default myfun1;