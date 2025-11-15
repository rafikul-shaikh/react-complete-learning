import React from "react";
import { data, Link } from "react-router-dom";

const User = () => {
  const user = [
    {
      Id: 1,
      Name: "Rafikul Shaikh",
      Email: "rafikulshaikh@gmail.com",
      Age: 25,
    },
    { Id: 2, Name: "Raihan sk", Email: "raihansk@gmail.com", Age: 26 },
    { Id: 3, Name: "Julfikar", Email: "julfikar@gmail.com", Age: 27 },
    { Id: 4, Name: "Jahangir", Email: "jahangirh@gmail.com", Age: 28 },
  ];

  return (
    <>
      {user.map((data) => (
        <div key={data.Id}>
          <Link to={"/user/Id"}>
            <h1>{data.Name}</h1>
          </Link>
        </div>
      ))}
    </>
  );
};

export default User;
