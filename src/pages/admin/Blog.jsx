import { useEffect, useState } from "react";
import DataTable from "../../components/ui/DataTable";
import FormModal from "../../components/ui/FormModal";

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

    if (loading) return <p>Loading...</p>;

    return (
        <div>
            <div className="flex justify-between mb-4">
                <h2 className="text-2xl font-bold">Blog</h2>

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
                    title={selected ? "Edit Blog" : "Add Blog"}
                    fields={fields}
                    initialData={selected}
                    onClose={() => setOpen(false)}
                    onSubmit={handleSave}
                />
            )}
        </div>
    );
}

export default Blog;