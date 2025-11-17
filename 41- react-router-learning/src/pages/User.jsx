import { Link } from "react-router-dom";

function User() {
  const users = [
    { id: 1, name: "Rafikul" },
    { id: 2, name: "Aman" },
    { id: 3, name: "Sahil" },
  ];

  return (
    <>
      <h1>User List</h1>
      {users.map((u) => (
        <div key={u.id}>
          <Link to={`/users/${u.id}`}>{u.name}</Link>
        </div>
      ))}
    </>
  );
}

export default User;
