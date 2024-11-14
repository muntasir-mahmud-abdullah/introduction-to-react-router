import { useLoaderData } from "react-router-dom";
import User from "../User/User";

const Users = () => {
  const users = useLoaderData();
//   console.log(users);
  return (
    <div>
      <h1> Users : {users.length}</h1>
      <p>Here are the Users</p>
      {
        users.map((user)=> <User key={user.id} user={user}></User>)
      }
    </div>
  );
};

export default Users;
