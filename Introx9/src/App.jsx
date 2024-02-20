import React from "react";
import Home from "./Components/Home";
import User from "./Components/User";
import { NavLink, Routes, Route } from "react-router-dom";
import UserDetails from "./Components/UserDetails";

function App() {
  return (
    <div>
      <nav className="absolute flex gap-10 top-[15%] left-1/2 -translate-x-[50%] -translate-y-[50%]">
        <NavLink
          style={(e) => {
            return {
              color: e.isActive ? "red" : "",
              fontWeight: e.isActive ? "bold" : "",
            };
          }}
          to="/"
        >
          Home
        </NavLink>
        <NavLink
          style={(e) => {
            return {
              color: e.isActive ? "red" : "",
              fontWeight: e.isActive ? "bold" : "",
            };
          }}
          to="/user"
        >
          User
        </NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user" element={<User />}>
          <Route path="/user/:name" element={<UserDetails />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
