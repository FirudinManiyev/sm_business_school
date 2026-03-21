import { useEffect, useState } from "react";
import DataTable from "../../components/ui/DataTable";
import FormModal from "../../components/ui/FormModal";

import {
    getStudents,
    createStudent,
    updateStudent,
    deleteStudent,
} from "../../services/studentService";

function Students() {
    const [data, setData] = useState([]);
    const [open, setOpen] = useState(false);
    const [selected, setSelected] = useState(null);
    const [loading, setLoading] = useState(true);

    const fields = [
        { name: "name", label: "Name", required: true },
        { name: "course", label: "Course", required: true },
    ];

    const columns = [
        { key: "name", label: "Name" },
        { key: "course", label: "Course" },
    ];

    const fetchData = async () => {
        setLoading(true);
        const res = await getStudents();
        setData(res);
        setLoading(false);
    };

    useEffect(() => {
        fetchData();
    }, []);

    const handleSave = async (formData) => {
        if (selected) {
            await updateStudent(selected.id, formData);
        } else {
            await createStudent(formData);
        }

        await fetchData();
        setOpen(false);
    };

    const handleDelete = async (id) => {
        await deleteStudent(id);
        fetchData();
    };

    if (loading) return <p>Loading...</p>;

    return (
        <div>
            <div className="flex justify-between mb-4">
                <h2 className="text-2xl font-bold">Students</h2>

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
                    title={selected ? "Edit Student" : "Add Student"}
                    fields={fields}
                    initialData={selected}
                    onClose={() => setOpen(false)}
                    onSubmit={handleSave}
                />
            )}
        </div>
    );
}

export default Students;