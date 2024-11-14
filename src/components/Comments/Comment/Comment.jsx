import { Link, useNavigate } from "react-router-dom";


const Comment = ({ comment }) => {
  const { name, email, postId, id } = comment;
  const navigate = useNavigate();
  //   console.log(comment);
  const handleShowComment = ()=> {
        navigate( `/comment/${id}`)
  }
  return (
    <div>
      <h2>
        My comment {postId} : {comment.length}{" "}
      </h2>
      <h4>Name: {name}</h4>
      <p>email : {email}</p>
        <button onClick={handleShowComment}>Show comment</button>
    </div>
  );
};

export default Comment;
