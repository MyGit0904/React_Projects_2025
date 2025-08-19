import { createContext } from "react";
import UseContext2 from "./UseContext2";

export const dataInfo = createContext();

function UseContext1() {
  return (
    <>
      <dataInfo.Provider value={{ appcolor: "blue" }}>
        <h1>UseContext1</h1>
        <UseContext2 />
      </dataInfo.Provider>
    </>
  );
}

export default UseContext1;
