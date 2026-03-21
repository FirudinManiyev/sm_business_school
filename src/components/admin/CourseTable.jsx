function CourseTable({ courses, onEdit, onDelete }) {
    return (
        <div className="bg-white rounded shadow overflow-hidden">
            <table className="w-full">
                <thead className="bg-gray-100 text-left">
                    <tr>
                        <th className="p-3">Title</th>
                        <th className="p-3">Students</th>
                        <th className="p-3 text-center">Actions</th>
                    </tr>
                </thead>

                <tbody>
                    {courses.length === 0 && (
                        <tr>
                            <td colSpan="3" className="text-center p-4 text-gray-500">
                                No data found
                            </td>
                        </tr>
                    )}

                    {courses.map((course) => (
                        <tr key={course.id} className="border-t hover:bg-gray-50">
                            <td className="p-3">{course.title}</td>
                            <td className="p-3">{course.students}</td>

                            <td className="p-3 flex justify-center gap-3">
                                <button
                                    onClick={() => onEdit(course)}
                                    className="text-blue-500 hover:underline"
                                >
                                    Edit
                                </button>

                                <button
                                    onClick={() => onDelete(course.id)}
                                    className="text-red-500 hover:underline"
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default CourseTable;