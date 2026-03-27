import { useEffect, useState } from "react";
import DataTable from "../../components/ui/DataTable";
import FormModal from "../../components/ui/FormModal";
import AdminPageShell from "../../components/admin/AdminPageShell";

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

    if (loading) {
        return (
            <div className="rounded-2xl border border-slate-200 bg-white p-6 text-sm font-medium text-slate-500 shadow-sm">
                Loading trainers...
            </div>
        );
    }

    return (
        <AdminPageShell
            title="Trainers"
            subtitle="Təlimçi məlumatlarını yeniləyin və yeni təlimçi əlavə edin."
            actionLabel="+ Add Trainer"
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
                    title={selected ? "Edit Trainer" : "Add Trainer"}
                    fields={fields}
                    initialData={selected}
                    onClose={() => setOpen(false)}
                    onSubmit={handleSave}
                />
            )}
        </AdminPageShell>
    );
}

export default Trainers;