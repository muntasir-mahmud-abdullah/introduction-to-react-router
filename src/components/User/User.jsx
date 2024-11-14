import { Link } from "react-router-dom";

const User = ({ user }) => {
  const { name, email, id } = user;
  console.log(id);
  return (
    <div>
      <h2>{name}</h2>
      <p>{email}</p>
      <Link to={`/user/${id}`}>Show Details</Link>
    </div>
  );
};

export default User;
