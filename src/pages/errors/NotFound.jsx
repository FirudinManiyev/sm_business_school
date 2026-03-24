import React from 'react';
import { Link } from 'react-router-dom';

export default function NotFound() {
    return (
        <section className="flex items-center justify-center min-h-screen bg-blue-50 text-blue-900 p-6">
            <div className="container flex flex-col items-center justify-center px-5 mx-auto">
                <div className="max-w-md text-center">
                    <h1
                        className="text-9xl font-extrabold mb-6 animate-bounce text-blue-400"
                        aria-hidden="true"
                    >
                        404
                    </h1>
                    <h2 className="text-2xl md:text-3xl font-semibold mb-4 animate-fadeInUp">
                        Səhifə tapılmadı
                    </h2>
                    <p className="text-blue-700 mb-8 animate-fadeInUp delay-100">
                        Amma narahat olma, saytımızda bir çox digər resursları tapa bilərsən.
                    </p>
                    <Link
                        to="/"
                        className="inline-block px-8 py-3 font-semibold rounded-lg bg-blue-500 text-white shadow-lg
                       hover:bg-blue-600 hover:scale-105 transition transform duration-300"
                    >
                        Ana səhifəyə qayıt
                    </Link>
                </div>
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