function MapDemo(){
    const User=[
        {id:1,name:"John"},
        {id:2,name:"Merry"},
        {id:3,name:"Peter"}
    ]

    return(

        <ol>
            {User.map((user)=>
            <li key={user.id}>{user.name}</li>)}
        </ol>
    )
}
export default MapDemo;