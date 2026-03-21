import { useEffect, useState } from "react";
import DataTable from "../../components/ui/DataTable";
import FormModal from "../../components/ui/FormModal";

import {
    getTrainers,
    createTrainer,
    updateTrainer,
    deleteTrainer,
} from "../../services/trainerService";

function Trainers() {
    const [data, setData] = useState([]);
    const [open, setOpen] = useState(false);
    const [selected, setSelected] = useState(null);
    const [loading, setLoading] = useState(true);

    const fields = [
        { name: "name", label: "Name", required: true },
        { name: "specialty", label: "Specialty", required: true },
    ];

    const columns = [
        { key: "name", label: "Name" },
        { key: "specialty", label: "Specialty" },
    ];

    const fetchData = async () => {
        setLoading(true);
        const res = await getTrainers();
        setData(res);
        setLoading(false);
    };

    useEffect(() => {
        fetchData();
    }, []);

    const handleSave = async (formData) => {
        if (selected) {
            await updateTrainer(selected.id, formData);
        } else {
            await createTrainer(formData);
        }

        await fetchData();
        setOpen(false);
    };

    const handleDelete = async (id) => {
        await deleteTrainer(id);
        fetchData();
    };

    if (loading) return <p>Loading...</p>;

    return (
        <div>
            <div className="flex justify-between mb-4">
                <h2 className="text-2xl font-bold">Trainers</h2>

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
                    title={selected ? "Edit Trainer" : "Add Trainer"}
                    fields={fields}
                    initialData={selected}
                    onClose={() => setOpen(false)}
                    onSubmit={handleSave}
                />
            )}
        </div>
    );
}

export default Trainers;