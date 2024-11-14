import { useLoaderData } from "react-router-dom";

const Postd = () => {
  const postd = useLoaderData();
  const {id,title,body} = postd;
  return (
    <div>
      <h1>Post Details</h1>
      <p>Post id : {id}</p>
      <p>Post title : {title}</p>
      <p>Post body : {body}</p>
    </div>
  );
};

export default Postd;
