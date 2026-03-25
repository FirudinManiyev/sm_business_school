import { Link } from "react-router-dom";

export default function Unauthorized() {
    return (
        <section className="min-h-screen flex items-center justify-center bg-blue-50 p-6">
            <div className="bg-white p-10 rounded-2xl shadow-xl text-center max-w-md w-full transition-all duration-500 hover:shadow-2xl">

                <h1 className="text-6xl font-extrabold text-blue-400 mb-4 animate-pulse">
                    403
                </h1>

                <h2 className="text-2xl font-semibold text-blue-900 mb-2 animate-fadeInUp">
                    Giriş qadağandır
                </h2>

                <p className="text-blue-700 mb-8 animate-fadeInUp delay-100">
                    Bu səhifəyə baxmaq üçün sənin icazən yoxdur. Zəhmət olmasa ana səhifəyə qayıt.
                </p>

                <Link
                    to="/"
                    className="inline-block px-6 py-3 bg-blue-500 text-white font-medium rounded-lg shadow-md
                     hover:bg-blue-600 hover:scale-105 active:scale-95
                     transition-all duration-300"
                >
                    Ana səhifəyə qayıt
                </Link>
            </div>

            <style>
                {`
          @keyframes fadeInUp {
            0% { opacity: 0; transform: translateY(20px); }
            100% { opacity: 1; transform: translateY(0); }
          }

          .animate-fadeInUp {
            animation: fadeInUp 0.6s ease forwards;
          }

          .animate-fadeInUp.delay-100 {
            animation-delay: 0.1s;
          }
        `}
            </style>
        </section>
    );
}