import { useEffect, useState } from "react";
import DataTable from "../../components/ui/DataTable";
import FormModal from "../../components/ui/FormModal";
import AdminPageShell from "../../components/admin/AdminPageShell";

import {
    getBlogs,
    createBlog,
    updateBlog,
    deleteBlog,
} from "../../services/blogService";

function Blog() {
    const [data, setData] = useState([]);
    const [open, setOpen] = useState(false);
    const [selected, setSelected] = useState(null);
    const [loading, setLoading] = useState(true);

    const fields = [
        { name: "title", label: "Title", required: true },
        { name: "author", label: "Author", required: true },
    ];

    const columns = [
        { key: "title", label: "Title" },
        { key: "author", label: "Author" },
    ];

    const fetchData = async () => {
        setLoading(true);
        const res = await getBlogs();
        setData(res);
        setLoading(false);
    };

    useEffect(() => {
        fetchData();
    }, []);

    const handleSave = async (formData) => {
        if (selected) {
            await updateBlog(selected.id, formData);
        } else {
            await createBlog(formData);
        }

        await fetchData();
        setOpen(false);
    };

    const handleDelete = async (id) => {
        await deleteBlog(id);
        fetchData();
    };

    if (loading) {
        return (
            <div className="rounded-2xl border border-slate-200 bg-white p-6 text-sm font-medium text-slate-500 shadow-sm">
                Loading blog posts...
            </div>
        );
    }

    return (
        <AdminPageShell
            title="Blog"
            subtitle="Bloq məqalələrini idarə edin və yeni post əlavə edin."
            actionLabel="+ Add Post"
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
                    title={selected ? "Edit Blog" : "Add Blog"}
                    fields={fields}
                    initialData={selected}
                    onClose={() => setOpen(false)}
                    onSubmit={handleSave}
                />
            )}
        </AdminPageShell>
    );
}

export default Blog;