import { useRef, useState } from "react";

function GetInputValue() {
  const [email, setEmail] = useState("-");
  const username = useRef();
  const [pass1, setPassword] = useState("-");
  const pass = useRef();

  function getUserValue(e) {
    e.preventDefault(); // prevent form reload
    setEmail(username.current.value);
  }

  function getUserPassword(e) {
    e.preventDefault(); // prevent form reload
    setPassword(pass.current.value);
  }

  return (
    <>
    <div align="center">
        
    

      <h1>My Login Form</h1>
      <table border={"2px solid black"}>
        <tbody>
          <tr>
            <td>
              <input
                ref={username}
                placeholder="Enter name"
                style={{ width: "200px" }}
              />
              <button onClick={getUserValue}>Submit Name</button>
            </td>
          </tr>

          <tr>
            <td>
              <input
                ref={pass}
                type="password"
                placeholder="Enter password"
                style={{ width: "200px" }}
              />
              <button onClick={getUserPassword}>Submit Password</button>
            </td>
          </tr>
        </tbody>
      </table>

      <h3>Welcome {email}</h3>
      <h3>Your password is {pass1}</h3>

      </div>
    </>
  );
}

export default GetInputValue;
