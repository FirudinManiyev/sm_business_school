import { Link } from "react-router-dom";

function Unauthorized() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white p-8 rounded-xl shadow text-center max-w-md w-full">

                <h1 className="text-5xl font-bold text-red-500 mb-4">
                    403
                </h1>

                <h2 className="text-xl font-semibold mb-2">
                    Unauthorized Access
                </h2>

                <p className="text-gray-600 mb-6">
                    You don’t have permission to view this page.
                </p>

                <Link
                    to="/"
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
                >
                    Go to Home
                </Link>
            </div>
        </div>
    );
}

export default Unauthorized;