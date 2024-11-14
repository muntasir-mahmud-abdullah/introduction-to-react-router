import { Link, useRouteError } from "react-router-dom";

const Errorpage = () => {
    const error = useRouteError();
    console.log(error);
    return (
        <div>
            <h1>Oops!!!</h1>
            <p>{error.statusText}</p>
            {
                error.status === 404 && <div>
                    <p>page not found</p>
                    <h1>its unavailabe</h1>
                    <Link to="/"><button>Go Back</button></Link>
                </div>
            }
        </div>
    );
};

export default Errorpage;