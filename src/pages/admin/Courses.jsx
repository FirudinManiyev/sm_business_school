import { useEffect, useState } from "react";
import DataTable from "../../components/ui/DataTable";
import FormModal from "../../components/ui/FormModal";

import {
    getCourses,
    createCourse,
    updateCourse,
    deleteCourse,
} from "../../services/courseService";

function Courses() {
    const [data, setData] = useState([]);
    const [open, setOpen] = useState(false);
    const [selected, setSelected] = useState(null);
    const [loading, setLoading] = useState(true);

    const fields = [
        { name: "title", label: "Title", required: true },
        { name: "students", label: "Students", type: "number" },
    ];

    const columns = [
        { key: "title", label: "Title" },
        { key: "students", label: "Students" },
    ];

    // FETCH
    const fetchData = async () => {
        setLoading(true);
        const res = await getCourses();
        setData(res);
        setLoading(false);
    };

    useEffect(() => {
        fetchData();
    }, []);

    // SAVE
    const handleSave = async (formData) => {
        if (selected) {
            await updateCourse(selected.id, formData);
        } else {
            await createCourse(formData);
        }

        await fetchData();
        setOpen(false);
    };

    // DELETE
    const handleDelete = async (id) => {
        await deleteCourse(id);
        fetchData();
    };

    if (loading) return <p>Loading...</p>;

    return (
        <div>
            <div className="flex justify-between mb-4">
                <h2 className="text-2xl font-bold">Courses</h2>

                <button
                    onClick={() => {
                        setSelected(null);
                        setOpen(true);
                    }}
                    className="bg-blue-500 text-white px-4 py-2 rounded"
                >
                    + Add
                </button>
            </div>

            <DataTable
                columns={columns}
                data={data}
                actions={{
                    onEdit: (item) => {
                        setSelected(item);
                        setOpen(true);
                    },
                    onDelete: handleDelete,
                }}
            />

            {open && (
                <FormModal
                    title={selected ? "Edit Course" : "Add Course"}
                    fields={fields}
                    initialData={selected}
                    onClose={() => setOpen(false)}
                    onSubmit={handleSave}
                />
            )}
        </div>
    );
}

export default Courses;