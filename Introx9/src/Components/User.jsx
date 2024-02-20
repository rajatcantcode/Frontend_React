import React from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { userDetailsContext } from "./Context";
import { Outlet } from "react-router-dom";

const User = () => {
  const [user, setUsers] = useContext(userDetailsContext);

  return (
    <div className="absolute flex gap-5 top-[50%] left-1/2 -translate-x-[50%] -translate-y-[50%] flex-col">
      <h3 className="font-mono font-bold uppercase">UsersList</h3>
      <div className="flex flex-col">
        {user.map((item) => {
          return (
            <Link to={`/user/${item.name}`} className="p-1 px-2 bg-green-300">
              {item.name}
            </Link>
          );
        })}
      </div>
      <hr className="w-full"></hr>
      <Outlet />
    </div>
  );
};

export default User;



