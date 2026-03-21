function Dashboard() {
    return (
        <div>
            <h2 className="text-2xl font-bold mb-4">
                Dashboard
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

                <div className="bg-white p-4 rounded shadow">
                    <h3 className="text-gray-500">Courses</h3>
                    <p className="text-2xl font-bold">12</p>
                </div>

                <div className="bg-white p-4 rounded shadow">
                    <h3 className="text-gray-500">Students</h3>
                    <p className="text-2xl font-bold">340</p>
                </div>

                <div className="bg-white p-4 rounded shadow">
                    <h3 className="text-gray-500">Trainers</h3>
                    <p className="text-2xl font-bold">8</p>
                </div>

            </div>
        </div>
    );
}

export default Dashboard;