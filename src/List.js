function List() {

    const fruit = ['apple',"banana", 'kiwi'];

    return(
        <ul>
            {
                fruit.map((a,b)=> <li key={b}>{a}</li>)
            }
        </ul>
    );

    
}
export default List;