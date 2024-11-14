import { useLoaderData, useNavigate, useParams } from "react-router-dom";

const ComDetails = () => {
  const comdetails = useLoaderData();
  const { id, body } = comdetails;
  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate(-1);
  };
  const {cmId} = useParams();
  console.log(cmId);
  return (
    <div>
      <h4>Post Id : {id}</h4>
      <p>comment details:{body}</p>
      <button onClick={handleGoBack}>Go BAck</button>
    </div>
  );
};

export default ComDetails;
