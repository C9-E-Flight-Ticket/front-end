import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="text-center">
        <h1 className="text-6xl font-extrabold text-gray-800">404</h1>
        <p className="text-xl font-semibold text-gray-600 mt-4">
          Oops! The page you’re looking for doesn’t exist.
        </p>
        <p className="text-gray-500 mt-2">
          It might have been removed, or you may have mistyped the URL.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="px-6 py-3 text-white bg-gray-600 hover:bg-gray-700 rounded-lg shadow-md transition"
          >
            Go Back Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
