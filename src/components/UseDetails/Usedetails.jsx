import {useLoaderData } from "react-router-dom";

const Usedetails = () => {
  const userdetails = useLoaderData();
  const { name,website } = userdetails;
  return (
    <div>
      <h1>User details: {name} </h1>
      <h1>Website: {website} </h1>

    </div>
  );
};

export default Usedetails;
