import { useLoaderData } from "react-router-dom";
import Post from "../Post/Post";

const Posts = () => {
  const posts = useLoaderData();
  return (
    <div>
      <h1>Posts : {posts.length}</h1>
      <p>Posts should show here</p>
      {
        posts.map(post => <Post post={post} key={post.id}></Post> )
      }
    </div>
  );
};

export default Posts;
