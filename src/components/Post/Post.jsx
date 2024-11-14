import { Link, Navigate, useNavigate } from "react-router-dom";

const Post = ({ post }) => {
  // console.log(post);
  const navigate = useNavigate();
  const { id, title } = post;
  const handleComDetails = () => {
    navigate(`/post/${id}`);
  };
  return (
    <div>
      <h1>Post id : {id}</h1>
      <p>Post title : {title}</p>

      <button onClick={handleComDetails}>Show Post details</button>

    </div>
  );
};

export default Post;
