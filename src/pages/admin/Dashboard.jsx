import { BookOpen, Users, GraduationCap } from "lucide-react";

function Dashboard() {
    const stats = [
        {
            title: "Courses",
            value: 12,
            icon: <BookOpen size={22} />,
        },
        {
            title: "Students",
            value: 340,
            icon: <GraduationCap size={22} />,
        },
        {
            title: "Trainers",
            value: 8,
            icon: <Users size={22} />,
        },
    ];

    return (
        <div>
            {/* Title */}
            <h2 className="text-2xl font-bold mb-6">
                Dashboard
            </h2>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">

                {stats.map((item, index) => (
                    <div
                        key={index}
                        className="bg-white p-5 rounded-xl shadow hover:shadow-md transition flex items-center justify-between"
                    >
                        <div>
                            <p className="text-gray-500 text-sm">
                                {item.title}
                            </p>

                            <h3 className="text-2xl font-bold mt-1">
                                {item.value}
                            </h3>
                        </div>

                        <div className="bg-blue-100 text-blue-600 p-3 rounded-lg">
                            {item.icon}
                        </div>
                    </div>
                ))}

            </div>

            {/* Extra Section (gözəllik + real hissiyat) */}
            <div className="mt-8 grid md:grid-cols-2 gap-4">

                {/* Recent Activity */}
                <div className="bg-white p-5 rounded-xl shadow">
                    <h3 className="font-semibold mb-3">
                        Recent Activity
                    </h3>

                    <ul className="text-sm text-gray-600 space-y-2">
                        <li>+ New student added</li>
                        <li>+ New course created</li>
                        <li>+ Trainer updated</li>
                    </ul>
                </div>

                {/* Quick Info */}
                <div className="bg-white p-5 rounded-xl shadow">
                    <h3 className="font-semibold mb-3">
                        Quick Info
                    </h3>

                    <p className="text-sm text-gray-600">
                        Welcome to admin panel. You can manage courses,
                        students and trainers easily from here.
                    </p>
                </div>

            </div>
        </div>
    );
}

export default Dashboard;