import { useState, useEffect } from "react";

function CourseModal({ onClose, onSave, initialData }) {
    const [title, setTitle] = useState("");
    const [students, setStudents] = useState("");

    useEffect(() => {
        if (initialData) {
            setTitle(initialData.title);
            setStudents(initialData.students);
        }
    }, [initialData]);

    const handleSubmit = (e) => {
        e.preventDefault();

        onSave({
            title,
            students: Number(students),
        });
    };

    return (
        <div className="fixed inset-0 bg-black/30 flex items-center justify-center">
            <div className="bg-white p-6 rounded w-full max-w-md">
                <h2 className="text-xl font-bold mb-4">
                    {initialData ? "Edit Course" : "Add Course"}
                </h2>

                <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                    <input
                        type="text"
                        placeholder="Course title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className="border p-2 rounded"
                    />

                    <input
                        type="number"
                        placeholder="Students count"
                        value={students}
                        onChange={(e) => setStudents(e.target.value)}
                        className="border p-2 rounded"
                    />

                    <div className="flex justify-end gap-2 mt-4">
                        <button onClick={onClose} type="button">
                            Cancel
                        </button>

                        <button className="bg-blue-500 text-white px-4 py-2 rounded">
                            Save
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default CourseModal;