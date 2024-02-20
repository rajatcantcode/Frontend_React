import { createContext } from "react";
import { useState } from "react";

export const userDetailsContext = createContext();

const Context = (props) => {
  const [user, setUsers] = useState([
    {
      id: 1,
      name: "Rajat",
      age: 18,
    },
    {
      id: 2,
      name: "Simba",
      age: 2,
    },
  ]);
  return (
    <userDetailsContext.Provider value={[user, setUsers]}>
      {props.children}
    </userDetailsContext.Provider>
  );
};

export default Context;
