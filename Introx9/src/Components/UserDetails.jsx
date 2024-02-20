import React from "react";
import { useParams } from "react-router-dom";

const UserDetails = () => {
  const { name } = useParams();

  return <div>HI ! {name}</div>;
};

export default UserDetails;



