function MyMap(){
      const Employee = [
    { id: 1, designation: "Java Developer"},
    { id: 2, designation: "React Developer" },
    { id: 3, designation: "Full Stack Developer" }
  ];


    return(
        <>
        <h1>Employee List</h1>
        {
            Employee.map((values)=>(
                // <h3>{values}</h3>
                <h3>{values.id} - {values.designation}</h3> // ✅ combining properties

            ))
        }
        <table className="table table-striped">
        <thead>
            <tr>
            <th scope="col">ID</th>
            <th scope="col">Designation</th>
            </tr>   
        </thead>
        <tbody>
        {
            Employee.map((values)=>(
                <tr>

                    <td>{values.id}</td>
                    <td>{values.designation}</td>
                </tr>
            ))
        }
        </tbody>
        </table>
        </>
    )
}
export default MyMap;