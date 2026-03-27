import { useEffect, useState } from "react";
import DataTable from "../../components/ui/DataTable";
import FormModal from "../../components/ui/FormModal";
import AdminPageShell from "../../components/admin/AdminPageShell";

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
        { name: "students", label: "Students", type: "number", required: true },
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

    if (loading) {
        return (
            <div className="rounded-2xl border border-slate-200 bg-white p-6 text-sm font-medium text-slate-500 shadow-sm">
                Loading courses...
            </div>
        );
    }

    return (
        <AdminPageShell
            title="Courses"
            subtitle="Kurs siyahısını idarə edin və yeni kurs əlavə edin."
            actionLabel="+ Add Course"
            onAction={() => {
                setSelected(null);
                setOpen(true);
            }}
        >

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
        </AdminPageShell>
    );
}

export default Courses;