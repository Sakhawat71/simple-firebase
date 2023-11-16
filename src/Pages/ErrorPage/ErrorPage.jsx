import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="text-center mt-20 md:mt-48">
            <h1 className="font-bold text-8xl text-red-600">404</h1>
            <p className="text-xl">Page not found</p>
            <Link className="btn text-blue-600 text-2xl my-10">Go Home</Link>
        </div>
    );
};

export default ErrorPage;